<?php

namespace App\Services;

use App\Models\BlogCategory;
use GuzzleHttp\Client;
use App\Models\Post;
use App\Models\Tag;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class WordPressImporterService
{
    protected $client;

    public function __construct()
    {
        $this->client = new Client([
            'base_uri' => 'https://nmieducation.com/wp-json/wp/v2/', 
        ]);
    }


public function importPosts($perPage = 10)
{
    $response = $this->client->get('posts', [
        'query' => [
            'per_page' => $perPage,
            '_embed' => 'true',
        ],
    ]);

    $posts = json_decode($response->getBody()->getContents(), true);

    //dd($posts);

    try {
        DB::beginTransaction();

        foreach ($posts as $post) {
            // Store the post
            $newPost = Post::create([
                'title' => $post['title']['rendered'],
                'slug' => $post['slug'],
                'content' => $post['content']['rendered'],
                'user_id' => auth()->id(),
                'status' => 'published',
                'published_at' => $post['date'],
            ]);

            // Download and store the featured image
            if (isset($post['_embedded']['wp:featuredmedia'][0]['source_url'])) {
                $imageUrl = $post['_embedded']['wp:featuredmedia'][0]['source_url'];
                $imageContents = file_get_contents($imageUrl);
                $imageName = basename($imageUrl);
                Storage::disk('public')->put("blog/{$imageName}", $imageContents);
                $newPost->featured_image = $imageName;
                $newPost->save();
            }

            // Store categories
            foreach ($post['_embedded']['wp:term'][0] as $category) {
                $cat = BlogCategory::firstOrCreate(
                    ['name' => $category['name']],
                    ['slug' => str($category['name'])->slug()]
                );
                $newPost->categories()->attach($cat->id);
            }

            // Store tags
            foreach ($post['_embedded']['wp:term'][1] as $tag) {
                $tagModel = Tag::firstOrCreate([
                        'name' => $tag['name'],
                        'slug' => str($tag['name'])->slug()
                ]);
                $newPost->tags()->attach($tagModel->id, [
                    'taggable_type' => Post::class,
                    'taggable_id' => $newPost->id
                ]);
            }
        }

        DB::commit();
    } catch (\Exception $e) {
        DB::rollBack();
        throw $e;
    }
}
}
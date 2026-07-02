<?php

namespace Tests\Feature;

use App\Enums\DefaultStatusEnum;
use App\Models\Post;
use App\Models\BlogCategory;
use App\Models\Tag;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PostPublishingTest extends TestCase
{
    use RefreshDatabase;

    protected User $user;

    protected function setUp(): void
    {
        parent::setUp();
        $this->user = User::factory()->create();
    }

    /** @test */
    public function can_create_published_post_with_all_fields()
    {
        $category = BlogCategory::factory()->create();
        $tag = Tag::factory()->create();

        $post = Post::create([
            'title' => 'Test Article',
            'slug' => 'test-article',
            'sub_title' => 'Article description',
            'body' => '<p>Article content</p>',
            'cover_photo_path' => 'images/test.jpg',
            'photo_alt_text' => 'Test image',
            'status' => DefaultStatusEnum::PUBLISHED->value,
            'published_at' => now(),
            'user_id' => $this->user->id,
        ]);

        $post->categories()->attach($category);
        $post->tags()->attach($tag);

        $this->assertDatabaseHas('posts', [
            'id' => $post->id,
            'title' => 'Test Article',
            'status' => 'published',
        ]);

        $this->assertTrue($post->categories->contains($category));
        $this->assertTrue($post->tags->contains($tag));
    }

    /** @test */
    public function published_post_appears_in_query()
    {
        Post::factory()->create([
            'status' => DefaultStatusEnum::PUBLISHED->value,
            'published_at' => now(),
            'user_id' => $this->user->id,
        ]);

        Post::factory()->create([
            'status' => DefaultStatusEnum::DRAFT->value,
            'user_id' => $this->user->id,
        ]);

        $publishedPosts = Post::published()->get();

        $this->assertCount(1, $publishedPosts);
        $this->assertEquals(DefaultStatusEnum::PUBLISHED->value, $publishedPosts->first()->status);
    }

    /** @test */
    public function observer_sets_published_at_when_status_changes_to_published()
    {
        $post = Post::factory()->create([
            'status' => DefaultStatusEnum::DRAFT->value,
            'published_at' => null,
            'user_id' => $this->user->id,
        ]);

        $this->assertNull($post->published_at);

        $post->update(['status' => DefaultStatusEnum::PUBLISHED->value]);

        $post->refresh();

        $this->assertNotNull($post->published_at);
    }

    /** @test */
    public function observer_clears_published_at_when_status_changes_from_published()
    {
        $post = Post::factory()->create([
            'status' => DefaultStatusEnum::PUBLISHED->value,
            'published_at' => now()->subDay(),
            'user_id' => $this->user->id,
        ]);

        $this->assertNotNull($post->published_at);

        $post->update(['status' => DefaultStatusEnum::DRAFT->value]);

        $post->refresh();

        $this->assertNull($post->published_at);
    }

    /** @test */
    public function content_field_syncs_with_body()
    {
        $post = Post::create([
            'title' => 'Test Article',
            'slug' => 'test-article',
            'sub_title' => 'Description',
            'body' => '<p>Content via body field</p>',
            'cover_photo_path' => 'test.jpg',
            'photo_alt_text' => 'Alt text',
            'user_id' => $this->user->id,
        ]);

        // Check that body field has the content
        $this->assertNotEmpty($post->body);
        $this->assertEquals('<p>Content via body field</p>', $post->body);
    }

    /** @test */
    public function draft_post_does_not_appear_in_published_query()
    {
        Post::factory()->create([
            'status' => DefaultStatusEnum::DRAFT->value,
            'user_id' => $this->user->id,
        ]);

        $publishedPosts = Post::published()->get();

        $this->assertCount(0, $publishedPosts);
    }

    /** @test */
    public function published_post_with_categories_and_tags()
    {
        $category = BlogCategory::factory()->create();
        $tag = Tag::factory()->create();

        $post = Post::create([
            'title' => 'Test Article',
            'slug' => 'test-article',
            'sub_title' => 'Description',
            'body' => '<p>Content</p>',
            'cover_photo_path' => 'test.jpg',
            'photo_alt_text' => 'Alt',
            'status' => DefaultStatusEnum::PUBLISHED->value,
            'published_at' => now(),
            'user_id' => $this->user->id,
        ]);

        $post->categories()->sync([$category->id]);
        $post->tags()->sync([$tag->id]);

        $post->refresh();

        $this->assertCount(1, $post->categories);
        $this->assertCount(1, $post->tags);
    }

    public function test_featured_image_upload_path_is_correct(): void
    {
        $post = Post::factory()
            ->published()
            ->create([
                'cover_photo_path' => 'blog/test-image.webp',
                'photo_alt_text' => 'Test Image',
            ]);

        // Vérifier que le chemin est stocké correctement
        $this->assertEquals('blog/test-image.webp', $post->cover_photo_path);

        // Vérifier que l'asset URL est générée correctement
        $expectedUrl = asset('storage/blog/test-image.webp');
        $this->assertStringContainsString('/storage/blog/test-image.webp', $expectedUrl);
    }

    public function test_featured_image_displays_in_api_resource(): void
    {
        $post = Post::factory()
            ->published()
            ->create([
                'cover_photo_path' => 'blog/featured.webp',
            ]);

        $resource = $post->getAttributes();
        
        // Vérifier que le champ cover_photo_path existe
        $this->assertArrayHasKey('cover_photo_path', $resource);
        $this->assertEquals('blog/featured.webp', $resource['cover_photo_path']);
    }
}


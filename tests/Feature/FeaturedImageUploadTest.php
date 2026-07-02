<?php

namespace Tests\Feature;

use App\Models\Post;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class FeaturedImageUploadTest extends TestCase
{
    use RefreshDatabase;

    protected User $user;

    protected function setUp(): void
    {
        parent::setUp();
        Storage::fake('public');
        $this->user = User::factory()->create();
    }

    public function test_featured_image_upload_stores_file_correctly(): void
    {
        $file = UploadedFile::fake()->image('featured.jpg', 1200, 800);

        $post = Post::create([
            'title' => 'Test Post',
            'slug' => 'test-post',
            'sub_title' => 'Test Description',
            'body' => '<p>Test content</p>',
            'photo_alt_text' => 'Test Image',
            'status' => 'published',
            'published_at' => now(),
            'user_id' => $this->user->id,
            'cover_photo_path' => $file->store('blog', 'public'),
        ]);

        // Vérifier que le fichier est stocké
        Storage::disk('public')->assertExists('blog/' . $file->hashName());

        // Vérifier que le chemin est sauvegardé dans la BD
        $this->assertNotNull($post->cover_photo_path);
        $this->assertStringContainsString('blog', $post->cover_photo_path);
    }

    public function test_featured_image_asset_url_generation(): void
    {
        $post = Post::factory()
            ->published()
            ->create([
                'cover_photo_path' => 'blog/test-image.webp',
            ]);

        // Simuler l'asset helper
        $assetUrl = asset('storage/' . $post->cover_photo_path);
        
        // Vérifier que l'URL est correcte
        $this->assertStringContainsString('/storage/blog/test-image.webp', $assetUrl);
    }

    public function test_post_without_featured_image_returns_null(): void
    {
        $post = Post::factory()
            ->published()
            ->create([
                'cover_photo_path' => null,
            ]);

        $this->assertNull($post->cover_photo_path);
    }

    public function test_featured_image_path_persists_after_post_update(): void
    {
        $post = Post::factory()
            ->published()
            ->create([
                'cover_photo_path' => 'blog/original.webp',
            ]);

        // Mettre à jour d'autres champs
        $post->update([
            'title' => 'Updated Title',
            'status' => 'published',
        ]);

        // Vérifier que le chemin d'image est toujours là
        $this->assertEquals('blog/original.webp', $post->cover_photo_path);
    }
}

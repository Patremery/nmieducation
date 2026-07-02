<?php

namespace Database\Factories;

use App\Enums\DefaultStatusEnum;
use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class postsFactory extends Factory
{
    protected $model = Post::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $title = $this->faker->sentence();
        
        return [
            'title' => $title,
            'slug' => \Str::slug($title),
            'sub_title' => $this->faker->paragraph(),
            'body' => $this->faker->paragraphs(5, true),
            'cover_photo_path' => 'blog/' . $this->faker->image('public/storage/blog', 640, 480, null, false),
            'photo_alt_text' => $this->faker->sentence(),
            'status' => DefaultStatusEnum::DRAFT->value,
            'published_at' => null,
            'user_id' => User::factory(),
        ];
    }

    /**
     * State for published posts
     */
    public function published(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => DefaultStatusEnum::PUBLISHED->value,
            'published_at' => $this->faker->dateTimeBetween('-1 year', 'now'),
        ]);
    }

    /**
     * State for unpublished posts
     */
    public function unpublished(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => DefaultStatusEnum::UNPUBLISHED->value,
            'published_at' => null,
        ]);
    }
}


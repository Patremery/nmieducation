<?php

namespace Database\Factories;

use App\Models\BlogCategory;
use Illuminate\Database\Eloquent\Factories\Factory;

class blog_categoriesFactory extends Factory
{
    protected $model = BlogCategory::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $name = $this->faker->unique()->word();
        
        return [
            'name' => $name,
            'slug' => \Str::slug($name),
            'parent_id' => null,
            'order' => $this->faker->numberBetween(0, 100),
        ];
    }
}


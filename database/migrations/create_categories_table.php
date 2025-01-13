<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Category;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('categories', function (Blueprint $table) {
            $table->id();
            $table->string('code')->unique();
            $table->string('label');
            $table->boolean('is_active')->default(true);
            $table->softDeletes();
            $table->timestamps();
        });

        // Insertion des catégories système
        $this->seedSystemCategories();
    }

    private function seedSystemCategories(): void
    {
        $categories = [
            ['code' => 'literature', 'label' => 'Littérature générale'],
            ['code' => 'school', 'label' => 'Livres Scolaires'],
            ['code' => 'guides', 'label' => 'Guides pédagogiques'],
            // ... autres catégories système
        ];

        foreach ($categories as $category) {
            Category::create($category);
        }
    }
}; 
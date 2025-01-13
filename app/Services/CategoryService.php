<?php

namespace App\Services;

use App\Models\Category;
use Illuminate\Support\Facades\Cache;
use Illuminate\Database\Eloquent\Collection;

class CategoryService
{
    private const CACHE_KEY = 'categories';
    private const CACHE_TTL = 3600; // 1 heure

    public function getAllActive(): Collection
    {
        return Cache::remember(
            self::CACHE_KEY . ':active', 
            self::CACHE_TTL, 
            fn () => Category::where('is_active', true)->get()
        );
    }

    public function getById(int $id): ?Category
    {
        return Cache::remember(
            self::CACHE_KEY . ":id:{$id}", 
            self::CACHE_TTL, 
            fn () => Category::find($id)
        );
    }

    public function getByCode(string $code): ?Category
    {
        return Cache::remember(
            self::CACHE_KEY . ":code:{$code}", 
            self::CACHE_TTL, 
            fn () => Category::where('code', $code)->first()
        );
    }

    public function clearCache(): void
    {
        Cache::forget(self::CACHE_KEY . ':active');
        // Vous pourriez vouloir nettoyer d'autres clés de cache ici
    }
} 
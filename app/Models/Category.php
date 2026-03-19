<?php

namespace App\Models;

use App\Http\Resources\CategoryResource;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Category extends Model
{
    use SoftDeletes; // Pour éviter la perte de données

    protected $fillable = ['code', 'label'];

    // Constantes pour les catégories par défaut (non supprimables)
    public const DEFAULT_CATEGORIES = [
        'LITERATURE' => 'literature',
        'SCHOOL' => 'school',
        'GUIDES' => 'guides',
        'KIDS' => 'kids',
        'CATALOG' => 'catalog',
    ];

    // Scope pour les catégories par défaut
    public function scopeDefault($query)
    {
        return $query->whereIn('code', array_values(self::DEFAULT_CATEGORIES));
    }

    // Vérifie si c'est une catégorie par défaut
    public function isDefault(): bool
    {
        return in_array($this->code, array_values(self::DEFAULT_CATEGORIES));
    }

    public function toResource()
    {
        return new CategoryResource($this);
    }
} 
<?php

namespace App\Models;

use App\Http\Resources\CategoryResource;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Category extends Model
{
    use SoftDeletes; // Pour éviter la perte de données

    protected $fillable = ['code', 'label'];

    // Constantes pour les catégories système (non supprimables)
    public const SYSTEM_CATEGORIES = [
        'LITERATURE' => 'literature',
        'SCHOOL' => 'school',
        'GUIDES' => 'guides',
        'KIDS' => 'kids',
    ];

    // Scope pour les catégories système
    public function scopeSystem($query)
    {
        return $query->whereIn('code', array_values(self::SYSTEM_CATEGORIES));
    }

    // Vérifie si c'est une catégorie système
    public function isSystem(): bool
    {
        return in_array($this->code, array_values(self::SYSTEM_CATEGORIES));
    }

    public function toResource()
    {
        return new CategoryResource($this);
    }
} 
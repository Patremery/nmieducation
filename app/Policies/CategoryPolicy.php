<?php

namespace App\Policies;

use App\Models\Category;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class CategoryPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return $user->can('view_any_category');
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Category $categories): bool
    {
        return $user->can('view_category');
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return $user->can('create_category');
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Category $categories): bool
    {
        return $user->can('update_category');
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Category $categories): bool
    {
        return $user->can('delete_category');
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Category $categories): bool
    {
        return $user->can('restore_category');
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Category $categories): bool
    {
        return $user->can('force_delete_category');
    }


    public function import_data(User $user): bool
    {
        return $user->can('import_data_category');
    }

    public function download_template_file(User $user): bool
    {
        return $user->can('download_template_file_category');
    }

    public function deleteAny(User $user): bool
    {
        return $user->can('delete_any_category');
    }

    public function restoreAny(User $user): bool
    {
        return $user->can('restore_any_category');
    }

    public function forceDeleteAny(User $user): bool
    {
        return $user->can('force_delete_any_category');
    }

    public function replicate(User $user, Category $categories): bool
    {
        return $user->can('replicate_category');
    }

    public function reorder(User $user): bool
    {
        return $user->can('reorder_category');
    }
}
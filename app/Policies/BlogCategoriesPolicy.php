<?php

namespace App\Policies;

use App\Models\BlogCategory;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class BlogCategoriesPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return $user->can('view_any_blog::categories');
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, BlogCategory $blog_categories): bool
    {
        return $user->can('view_blog::categories');
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return $user->can('create_blog::categories');
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, BlogCategory $blog_categories): bool
    {
        return $user->can('update_blog::categories');
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, BlogCategory $blog_categories): bool
    {
        return $user->can('delete_blog::categories');
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, BlogCategory $blog_categories): bool
    {
        return $user->can('restore_blog::categories');
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, BlogCategory $blog_categories): bool
    {
        return $user->can('force_delete_blog::categories');
    }


    public function import_data(User $user): bool
    {
        return $user->can('import_data_blog::categories');
    }

    public function download_template_file(User $user): bool
    {
        return $user->can('download_template_file_blog::categories');
    }

    public function deleteAny(User $user): bool
    {
        return $user->can('delete_any_blog::categories');
    }

    public function restoreAny(User $user): bool
    {
        return $user->can('restore_any_blog::categories');
    }

    public function forceDeleteAny(User $user): bool
    {
        return $user->can('force_delete_any_blog::categories');
    }

    public function replicate(User $user, BlogCategory $blog_categories): bool
    {
        return $user->can('replicate_blog::categories');
    }

    public function reorder(User $user): bool
    {
        return $user->can('reorder_blog::categories');
    }
}
<?php

namespace App\Policies;

use App\Models\Post;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class PostPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return $user->can('view_any_post');
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Post $posts): bool
    {
        return $user->can('view_post');
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return $user->can('create_post');
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Post $posts): bool
    {
        return $user->can('update_post');
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Post $posts): bool
    {
        return $user->can('delete_post');
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Post $posts): bool
    {
        return $user->can('restore_post');
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Post $posts): bool
    {
        return $user->can('force_delete_post');
    }


    public function import_data(User $user): bool
    {
        return $user->can('import_data_post');
    }

    public function download_template_file(User $user): bool
    {
        return $user->can('download_template_file_post');
    }

    public function deleteAny(User $user): bool
    {
        return $user->can('delete_any_post');
    }

    public function restoreAny(User $user): bool
    {
        return $user->can('restore_any_post');
    }

    public function forceDeleteAny(User $user): bool
    {
        return $user->can('force_delete_any_post');
    }

    public function replicate(User $user, Post $posts): bool
    {
        return $user->can('replicate_post');
    }

    public function reorder(User $user): bool
    {
        return $user->can('reorder_post');
    }
}
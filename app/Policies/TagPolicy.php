<?php

namespace App\Policies;

use App\Models\Tag;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class TagPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return $user->can('view_any_tag');
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Tag $tags): bool
    {
        return $user->can('view_tag');
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return $user->can('create_tag');
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Tag $tags): bool
    {
        return $user->can('update_tag');
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Tag $tags): bool
    {
        return $user->can('delete_tag');
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Tag $tags): bool
    {
        return $user->can('restore_tag');
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Tag $tags): bool
    {
        return $user->can('force_delete_tag');
    }


    public function import_data(User $user): bool
    {
        return $user->can('import_data_tag');
    }

    public function download_template_file(User $user): bool
    {
        return $user->can('download_template_file_tag');
    }

    public function deleteAny(User $user): bool
    {
        return $user->can('delete_any_tag');
    }

    public function restoreAny(User $user): bool
    {
        return $user->can('restore_any_tag');
    }

    public function forceDeleteAny(User $user): bool
    {
        return $user->can('force_delete_any_tag');
    }

    public function replicate(User $user, Tag $tags): bool
    {
        return $user->can('replicate_tag');
    }

    public function reorder(User $user): bool
    {
        return $user->can('reorder_tag');
    }
}
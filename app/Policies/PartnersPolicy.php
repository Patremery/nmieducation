<?php

namespace App\Policies;

use App\Models\Partners;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class PartnersPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return $user->can('view_any_partners');
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Partners $partners): bool
    {
        return $user->can('view_partners');
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return $user->can('create_partners');
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Partners $partners): bool
    {
        return $user->can('update_partners');
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Partners $partners): bool
    {
        return $user->can('delete_partners');
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Partners $partners): bool
    {
        return $user->can('restore_partners');
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Partners $partners): bool
    {
        return $user->can('force_delete_partners');
    }


    public function import_data(User $user): bool
    {
        return $user->can('import_data_partners');
    }

    public function download_template_file(User $user): bool
    {
        return $user->can('download_template_file_partners');
    }

    public function deleteAny(User $user): bool
    {
        return $user->can('delete_any_partners');
    }

    public function restoreAny(User $user): bool
    {
        return $user->can('restore_any_partners');
    }

    public function forceDeleteAny(User $user): bool
    {
        return $user->can('force_delete_any_partners');
    }

    public function replicate(User $user, Partners $partners): bool
    {
        return $user->can('replicate_partners');
    }

    public function reorder(User $user): bool
    {
        return $user->can('reorder_partners');
    }
}
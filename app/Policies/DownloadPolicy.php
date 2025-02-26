<?php

namespace App\Policies;

use App\Models\Download;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class DownloadPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return $user->can('view_any_download');
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Download $downloads): bool
    {
        return $user->can('view_download');
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return $user->can('create_download');
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Download $downloads): bool
    {
        return $user->can('update_download');
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Download $downloads): bool
    {
        return $user->can('delete_download');
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Download $downloads): bool
    {
        return $user->can('restore_download');
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Download $downloads): bool
    {
        return $user->can('force_delete_download');
    }


    public function import_data(User $user): bool
    {
        return $user->can('import_data_download');
    }

    public function download_template_file(User $user): bool
    {
        return $user->can('download_template_file_download');
    }

    public function deleteAny(User $user): bool
    {
        return $user->can('delete_any_download');
    }

    public function restoreAny(User $user): bool
    {
        return $user->can('restore_any_download');
    }

    public function forceDeleteAny(User $user): bool
    {
        return $user->can('force_delete_any_download');
    }

    public function replicate(User $user, Download $downloads): bool
    {
        return $user->can('replicate_download');
    }

    public function reorder(User $user): bool
    {
        return $user->can('reorder_download');
    }
}
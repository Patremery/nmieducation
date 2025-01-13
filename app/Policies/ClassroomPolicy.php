<?php

namespace App\Policies;

use App\Models\Classroom;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class ClassroomPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return $user->can('view_any_Classroom');
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Classroom $Classroom): bool
    {
        return $user->can('view_Classroom');
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return $user->can('create_Classroom');
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Classroom $Classroom): bool
    {
        return $user->can('update_Classroom');
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Classroom $Classroom): bool
    {
        return $user->can('delete_Classroom');
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Classroom $Classroom): bool
    {
        return $user->can('restore_Classroom');
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Classroom $Classroom): bool
    {
        return $user->can('force_delete_Classroom');
    }


    public function import_data(User $user): bool
    {
        return $user->can('import_data_Classroom');
    }

    public function download_template_file(User $user): bool
    {
        return $user->can('download_template_file_Classroom');
    }

    public function deleteAny(User $user): bool
    {
        return $user->can('delete_any_Classroom');
    }

    public function restoreAny(User $user): bool
    {
        return $user->can('restore_any_Classroom');
    }

    public function forceDeleteAny(User $user): bool
    {
        return $user->can('force_delete_any_Classroom');
    }

    public function replicate(User $user, Classroom $Classroom): bool
    {
        return $user->can('replicate_Classroom');
    }

    public function reorder(User $user): bool
    {
        return $user->can('reorder_Classroom');
    }
}
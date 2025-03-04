import { usePage } from "@inertiajs/react";

export function useSettings() {
    return usePage().props.settings;
}

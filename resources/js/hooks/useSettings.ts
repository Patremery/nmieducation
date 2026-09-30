import { usePage } from "@inertiajs/react";

export function useSettings(): Settings {
    return usePage<SharedPageProps>().props.settings;
}

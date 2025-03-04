interface Settings {
    support_phone: string;
    support_email: string;
    // ... autres paramètres
}

declare module "@inertiajs/core" {
    interface PageProps {
        settings: Settings;
    }
}

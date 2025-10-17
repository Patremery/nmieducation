import { Head as InertiaHead, usePage } from "@inertiajs/react";
const Head = ({ title }: { title: string }) => {
    const { settings } = usePage().props;
    return (
        <InertiaHead>
            <title>{title}</title>
            <meta name="description" content={settings.site_description} />
            <meta name="keywords" content={settings.site_keywords} />
            <meta name="author" content="NMI Education" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <link rel="icon" href={settings.favicon} />
        </InertiaHead>
    );
};

export default Head;

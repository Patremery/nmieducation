/// <reference types="vite/client" />

interface ImportMeta {
    glob: (pattern: string) => Promise<Record<string, any>>;
}

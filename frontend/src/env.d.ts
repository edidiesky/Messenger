interface ImportMetaEnv {
    readonly VITE_API_BASE_URLS: string
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
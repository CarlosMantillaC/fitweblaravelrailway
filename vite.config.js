import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js'
            ],
            refresh: true,
        }),
    ],
    optimizeDeps: {
        include: [
            'jquery',
            'popper.js',
            'masonry-layout',
            // Añade otras dependencias si es necesario
        ],
    },
});
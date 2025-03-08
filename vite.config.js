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
    resolve: {
        alias: {
            'jquery': 'jquery/dist/jquery.min.js',
            'desandro-matches-selector': 'desandro-matches-selector/matches-selector.js',
            'popper.js': '@popperjs/core/dist/umd/popper.min.js',
            'ev-emitter': 'ev-emitter/ev-emitter.js',
            'get-size': 'get-size/get-size.js',
            'fizzy-ui-utils': 'fizzy-ui-utils/utils.js',
            'outlayer': 'outlayer/outlayer.js'
        }
    }
});

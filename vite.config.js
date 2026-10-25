import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// A few 2014-era scripts assume sloppy-mode classic <script> semantics, which an ES module
// bundle (always strict) does not give them. Patch exactly those spots, in builds and in the
// dev server's dependency pre-bundling alike.
const legacyFixes = [
    // d3 v3 (used by rickshaw and datamaps) reads the global object through `this`
    { file: /\/node_modules\/d3\/d3\.js$/, patches: [[/\}\(\);\s*$/, '}.call(window);\n']] },
    // datamaps assigns two undeclared variables (the first is a typo for optionsValue)
    { file: /\/node_modules\/datamaps\/dist\/datamaps\.usa\.js$/, patches: [
        ['optionsValues = undefined;', 'optionsValue = undefined;'],
        [/(\n\s*)hoverover = d3\.select\( self\.options\.element \)/, '$1var hoverover = d3.select( self.options.element )']
    ] },
    // loaders.css assigns an undeclared loop variable
    { file: /\/node_modules\/loaders\.css\/loaders\.css\.js$/, patches: [['for (i = 1;', 'for (var i = 1;']] }
];

function legacyScripts() {
    return {
        name: 'legacy-scripts',
        transform(code, id) {
            const fix = legacyFixes.find(f => f.file.test(id));
            if (!fix) return null;
            for (const [from, to] of fix.patches) {
                const patched = code.replace(from, to);
                if (patched === code) this.error(`legacy-scripts: a patch for ${id} no longer applies`);
                code = patched;
            }
            return code;
        }
    };
}

// Ports come from soulcraft's dev block (3100-3149); never a vendor default.
export default defineConfig({
    plugins: [react(), legacyScripts()],
    optimizeDeps: { rolldownOptions: { plugins: [legacyScripts()] } },
    server: { port: 3120, strictPort: true },
    preview: { port: 3121, strictPort: true },
    css: {
        // Some 2014-era plugin stylesheets still carry IE7 hacks (*display); drop them when minifying.
        lightningcss: { errorRecovery: true },
        // The theme's 2016 SCSS (@import, global color functions) needs a module-system migration
        // before Dart Sass 3; until then these warnings would repeat 400+ times per build.
        preprocessorOptions: {
            scss: { silenceDeprecations: ['import', 'global-builtin', 'color-functions', 'if-function', 'slash-div'] }
        }
    },
    build: {
        chunkSizeWarningLimit: 4096,
        rolldownOptions: {
            output: {
                // Page titles come from each page's class name (this.constructor.name).
                keepNames: true,
                // Rickshaw's classes find their parent method by an argument named $super.
                minify: { compress: true, mangle: { reserved: ['$super'] } }
            }
        }
    }
});

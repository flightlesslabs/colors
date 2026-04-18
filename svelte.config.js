import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  compilerOptions: {
    runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true),
  },
  extensions: ['.svelte', '.svx'],
  preprocess: [
    mdsvex({
      extensions: ['.svx'],
    }),
  ],
  kit: {
    adapter: adapter({
      fallback: 'index.html',
    }),
    paths: {
      base: dev ? '' : '/colors', // 👈 MUST be inside kit
    },
  },
};

export default config;

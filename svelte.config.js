import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

const production = process.env.NODE_ENV === 'production';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess({
    postcss: true,
    sourceMap: !production,
  }),

  kit: {
    adapter: adapter(),
  },
};

export default config;

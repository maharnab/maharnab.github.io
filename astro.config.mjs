// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// Notes to self in Markdown (<div class="todo">…</div>) show in `astro dev` but are removed from the build.
const isBuild = process.argv.includes('build');
function stripTodos() {
	const walk = (node) => {
		if (!node.children) return;
		node.children = node.children.filter(
			(c) =>
				!(c.type === 'element' && [].concat(c.properties?.className ?? []).includes('todo')) &&
				!(c.type === 'raw' && /^\s*<div class="todo"[\s\S]*<\/div>\s*$/.test(c.value)),
		);
		node.children.forEach(walk);
	};
	return (tree) => walk(tree);
}

// https://astro.build/config
export default defineConfig({
	site: 'https://maharnab.github.io',
	integrations: [mdx(), sitemap()],
	markdown: { rehypePlugins: isBuild ? [stripTodos] : [] },
});

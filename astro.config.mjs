import { unified } from '@astrojs/markdown-remark'
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import rehypePrism from '@mapbox/rehype-prism'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import remarkGfm from 'remark-gfm'

const site =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.PUBLIC_SITE_URL ??
  'https://codepsy2001.blog'

export default defineConfig({
  site,
  integrations: [
    react(),
    mdx({
      processor: unified({
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypePrism],
      }),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
})

import type { APIContext } from 'astro'
import { getAllPosts } from '@/lib/posts'

const defaultPages = [
  { path: '/', changeFrequency: 'daily', priority: 1 },
  { path: '/posts', changeFrequency: 'daily', priority: 0.9 },
  { path: '/about', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/projects', changeFrequency: 'weekly', priority: 0.8 },
]

export async function GET(context: APIContext) {
  const site = context.site ?? new URL('https://codepsy2001.blog')
  const now = new Date().toISOString()
  const posts = await getAllPosts()
  const entries = [
    ...defaultPages.map((page) => ({
      url: new URL(page.path, site).toString(),
      lastModified: now,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...posts.map((post) => ({
      url: new URL(`/posts/${post.slug}`, site).toString(),
      lastModified: new Date(post.date).toISOString(),
      changeFrequency: 'weekly',
      priority: 0.7,
    })),
  ]

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (entry) => `  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastModified}</lastmod>
    <changefreq>${entry.changeFrequency}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>`

  return new Response(body, {
    headers: {
      'content-type': 'application/xml',
    },
  })
}

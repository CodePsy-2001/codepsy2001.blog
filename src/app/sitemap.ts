import type { MetadataRoute } from 'next'
import { assert } from '@toss/assert'
import { getAllPosts } from '@/lib/posts'
import { parse } from 'date-fns'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
assert(siteUrl)

const defaultSiteMap: MetadataRoute.Sitemap = [
  {
    url: siteUrl,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1,
  },
  {
    url: `${siteUrl}/posts`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.9,
  },
  {
    url: `${siteUrl}/about`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  },
  {
    url: `${siteUrl}/projects`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts()
  const postSiteMap: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteUrl}/posts/${post.slug}`,
    lastModified: parse(post.date, 'yyyy-MM-dd', new Date()),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  return [...defaultSiteMap, ...postSiteMap]
}

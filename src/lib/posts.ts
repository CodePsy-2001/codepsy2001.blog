import { getCollection } from 'astro:content'

interface Post {
  title: string
  description: string
  author: string
  date: string
  tags: string[]
}

export interface PostWithSlug extends Post {
  slug: string
}

export function normalizeSlug(id: string) {
  return id.replace(/\/index$/, '').replace(/\.mdx$/, '')
}

export async function getAllPosts() {
  const posts = await getCollection('posts')

  return posts
    .map((post) => ({
      slug: normalizeSlug(post.id),
      ...post.data,
    }))
    .sort((a, z) => +new Date(z.date) - +new Date(a.date))
}

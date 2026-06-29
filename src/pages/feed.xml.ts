import rss from '@astrojs/rss'
import type { APIContext } from 'astro'
import { getAllPosts } from '@/lib/posts'

export async function GET(context: APIContext) {
  const site = context.site ?? new URL('https://codepsy2001.blog')
  const posts = await getAllPosts()
  const author = {
    name: 'CodePsy-2001',
    email: 'codepsy2001@gmail.com',
  }

  return rss({
    title: author.name,
    description: 'Your blog description',
    site,
    customData: `<image><url>${new URL('/favicon.ico', site)}</url><title>${author.name}</title><link>${site}</link></image>`,
    items: posts.map((post) => ({
      title: post.title,
      description: post.description,
      pubDate: new Date(post.date),
      link: `/posts/${post.slug}`,
      author: author.name,
      categories: post.tags,
    })),
  })
}

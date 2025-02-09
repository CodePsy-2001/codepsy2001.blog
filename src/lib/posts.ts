import glob from 'fast-glob'

interface Post {
  title: string
  description: string
  author: string
  date: string
}

export interface PostWithSlug extends Post {
  slug: string
}

async function importPost(postFilename: string): Promise<PostWithSlug> {
  let { article } = (await import(`../app/posts/${postFilename}`)) as {
    default: React.ComponentType
    article: Post
  }

  return {
    slug: postFilename.replace(/(\/page)?\.mdx$/, ''),
    ...article,
  }
}

export async function getAllPosts() {
  let postFilenames = await glob('*/page.mdx', {
    cwd: './src/app/posts',
  })

  let posts = await Promise.all(postFilenames.map(importPost))

  return posts.sort((a, z) => +new Date(z.date) - +new Date(a.date))
}

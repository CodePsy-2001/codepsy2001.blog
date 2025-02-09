import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { type PostWithSlug, getAllPosts } from '@/lib/posts'
import { formatDate } from '@/lib/formatDate'

function Post({ post }: { post: PostWithSlug }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/posts/${post.slug}`}>{post.title}</Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={post.date}
          className="md:hidden"
          decorate
        >
          {formatDate(post.date)}
        </Card.Eyebrow>
        <Card.Description>{post.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={post.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(post.date)}
      </Card.Eyebrow>
    </article>
  )
}

export const metadata: Metadata = {
  title: '게시글',
  description:
    '프로그래밍, 오픈소스 프로젝트, 공부한 것을 기록하고 정리합니다.',
}

export default async function PostsIndex() {
  let posts = await getAllPosts()

  return (
    <SimpleLayout
      title="공부한 것을 기록하고 정리합니다."
      intro="꾸준한 기록만이 발자취를 남깁니다. 일주일에 한 번 이상 프로그래밍, 오픈소스 프로젝트, 세상에 대해 공부한 것을 자유롭게 정리하고 기록합니다."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {posts.map((post) => (
            <Post key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  )
}

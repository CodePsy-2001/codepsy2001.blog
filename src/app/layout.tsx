import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import localFont from 'next/font/local'

const pretendard = localFont({
  src: '../static/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
})

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s : 코드싸이 블로그',
    default: '코드싸이 - 엔지니어링을 즐겁게',
  },
  description:
    '코드싸이의 블로그. 엔지니어링을 즐겁게 생각합니다. 세상에 대해 공부하고 알아간 것을 자유롭게 기록하고 정리합니다.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="ko"
      className={`h-full antialiased ${pretendard.className}`}
      suppressHydrationWarning
    >
      <body
        className={`flex h-full bg-zinc-50 dark:bg-black ${pretendard.className}`}
      >
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}

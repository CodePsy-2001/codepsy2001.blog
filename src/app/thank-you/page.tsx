import { type Metadata } from 'next'

import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata: Metadata = {
  title: '구독 완료',
  description: '뉴스레터를 구독해주셔서 감사합니다.',
}

export default function ThankYou() {
  return (
    <SimpleLayout
      title="구독해주셔서 감사합니다."
      intro="새로운 블로그 글을 게시하거나, 새로운 프로젝트를 출시하거나, 공유하고 싶은 흥미로운 소식이 있을 때마다 이메일을 보내드릴게요. 언제든 부담 없이 구독을 해지할 수 있습니다."
    />
  )
}

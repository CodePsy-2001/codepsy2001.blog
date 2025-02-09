import Utterances from '@/components/Utterances'
import type { PropsWithChildren } from 'react'

export default function CommentsLayout({ children }: PropsWithChildren) {
  return (
    <>
      {children}
      <Utterances />
    </>
  )
}

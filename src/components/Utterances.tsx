'use client'

import { usePathname } from 'next/navigation'

export default function Utterances() {
  const pathname = usePathname()

  if (pathname === '/posts') return null

  return (
    <section
      id="comments"
      ref={(element) => {
        if (!element) return
        const script = document.createElement('script')
        script.src = 'https://utteranc.es/client.js'
        script.async = true
        script.crossOrigin = 'anonymous'
        script.setAttribute('repo', 'CodePsy-2001/codepsy2001.blog')
        script.setAttribute('issue-term', 'title')
        script.setAttribute('theme', 'preferred-color-scheme')
        element.appendChild(script)
      }}
    >
      {/*<hr />*/}
      {/*<h2 className="text-xl">*/}
      {/*  댓글*/}
      {/*</h2>*/}
    </section>
  )
}

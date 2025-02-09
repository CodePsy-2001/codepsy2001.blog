import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

const projects = [
  {
    name: 'tldr',
    description:
      'GPT를 활용한 번역 자동화로 1만건이 넘는 문서의 한국어 번역률 100%를 달성했습니다.',
    link: {
      href: 'https://github.com/tldr-pages/tldr',
      label: 'github.com',
    },
  },
  {
    name: 'next-use-funnel',
    description:
      '토스팀의 use-funnel 라이브러리를 Next.js App Router 와 호환되게 만든 커뮤니티 프로젝트입니다.',
    link: {
      href: 'https://www.npmjs.com/package/next-use-funnel',
      label: 'npmjs.com',
    },
  },
  {
    name: 'Cataclysm-BN',
    description:
      '좀비 테마의 정통 로그라이크 생존 게임입니다. 스키마 파일 정리 및 배포 도구 자동화에 기여했습니다.',
    link: {
      href: 'https://github.com/cataclysmbnteam/Cataclysm-BN',
      label: 'github.com',
    },
  },
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Projects',
  description: '코드싸이의 오픈소스 작업 모음입니다.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="오픈소스 기여 모음"
      intro="세상에 남긴 자랑스럽고 가치 있는 것들을 모아둡니다. 대부분은 오픈 소스 프로젝트이니, 흥미로운 것이 있다면 코드를 확인하고 개선할 아이디어가 있다면 함께 기여해 주세요."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            {/*<div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white ring-1 shadow-md shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">*/}
            {/*  <Image*/}
            {/*    src={project.logo}*/}
            {/*    alt=""*/}
            {/*    className="h-8 w-8"*/}
            {/*    unoptimized*/}
            {/*  />*/}
            {/*</div>*/}
            <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}

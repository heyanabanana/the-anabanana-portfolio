import React from 'react'

import Link from '@/shared/components/ui/lib/Link'
import PageTitle from '@/shared/components/ui/sections/PageTitle'
import SectionContainer from '@/shared/components/ui/sections/SectionContainer'
import { BlogSEO } from '@/shared/components/SEO'
import Image from '@/shared/components/ui/lib/Image'
import Tag from '@/shared/components/ui/lib/Tag'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndShare from '@/shared/components/ScrollTopAndShare'
import { ReactNode } from 'react'
import { PostFrontMatter } from '@/shared/models/PostFrontMatter'
import { AuthorFrontMatter } from '@/shared/models/AuthorFrontMatter'
import { ShareOnTwitter } from '@/shared/components/ui/lib/ShareOnTwitter'
import { author } from '@/data/author'
import { ShareOnLinkedin } from '@/shared/components/ui/lib/ShareOnLinkedin'

const editUrl = (fileName: any) => `${siteMetadata.siteRepo}/blob/master/data/proyectos/${fileName}`

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

interface Props {
  frontMatter: PostFrontMatter
  authorDetails: AuthorFrontMatter[]
  next?: { slug: string; title: string }
  prev?: { slug: string; title: string }
  children: ReactNode
}

export default function ProjectLayout({ frontMatter, next, prev, children }: Props) {
  const { slug, fileName, date, title, tags } = frontMatter

  return (
    <SectionContainer>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/proyectos/${slug}`}
        authorDetails={author}
        {...frontMatter}
      />
      <ScrollTopAndShare
        type="project"
        slug={slug}
        text="Acabo de ver este proyecto de "
        author={author?.twitter?.replace('https://twitter.com/', '@') || ''}
        url={`${siteMetadata.siteUrl}/`}
      />
      <article className="w-full">
        <div className="w-full xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          <header className="pt-6 xl:pb-6">
            <Link
              href="/proyectos"
              className="text-primary hover:text-primary-600 dark:hover:text-primary-400"
            >
              &larr; Volver a los proyectos
            </Link>
            <div className="flex flex-col items-center justify-center gap-2">
              <PageTitle>{title}</PageTitle>
              {tags && (
                <div className="flex flex-wrap items-center gap-2">
                  {tags.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </div>
              )}

              {(next || prev) && (
                <div className="flex w-full justify-between pt-4">
                  {prev ? (
                    <div>
                      <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                        Proyecto anterior
                      </h2>
                      <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                        <Link href={`/proyectos/${prev.slug}`}>{prev.title}</Link>
                      </div>
                    </div>
                  ) : (
                    <div></div>
                  )}
                  {next ? (
                    <div>
                      <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                        Siguiente proyecto
                      </h2>
                      <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                        <Link href={`/proyectos/${next.slug}`}>{next.title}</Link>
                      </div>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
              )}
            </div>
          </header>
          <div className="flex w-full flex-col gap-6 pb-8 xl:flex-row">
            {/* CONTENT COL */}

            <section className="flex w-full flex-col items-center divide-y divide-gray-200 dark:divide-gray-700">
              <div className="prose w-full  max-w-3xl pt-10 pb-8 dark:prose-dark">{children}</div>
              <div className="flex w-full flex-col items-center justify-between gap-2 pt-6 pb-6 text-sm text-gray-700 dark:text-gray-300 md:flex-row">
                <Link href={editUrl(fileName)}>{'View on GitHub'}</Link>{' '}
                <span className="flex gap-2">
                  <ShareOnTwitter
                    type="project"
                    slug={slug}
                    text="Acabo de ver este proyecto de "
                    author={author?.twitter?.replace('https://twitter.com/', '@') || ''}
                    url={`${siteMetadata.siteUrl}/`}
                  />
                  <ShareOnLinkedin type="project" slug={slug} url={`${siteMetadata.siteUrl}/`} />
                </span>
              </div>
            </section>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}

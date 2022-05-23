import React from 'react'

import Link from '@/shared/components/ui/lib/Link'
import PageTitle from '@/shared/components/ui/sections/PageTitle'
import SectionContainer from '@/shared/components/ui/sections/SectionContainer'
import { BlogSEO } from '@/shared/components/SEO'
import Image from '@/shared/components/ui/lib/Image'
import Tag from '@/shared/components/ui/lib/Tag'
import siteMetadata from '@/data/siteMetadata'
import Comments from '@/shared/components/comments'
import ScrollTopAndComment from '@/shared/components/ScrollTopAndComment'
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
      <ScrollTopAndComment />
      <article>
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          <header className="pt-6 xl:pb-6">
            <div className="space-y-1 text-center">
              <dl className="space-y-10">
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>
                      {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                    </time>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
            </div>
          </header>
          <div className="flex flex-col gap-6  pb-8  md:flex-row">
            {/* AUTHOR COL */}
            <section className="flex w-full flex-col items-center gap-4 pt-8 md:pt-11">
              <span className="flex items-center gap-2">
                {author.avatar && (
                  <Image
                    src={author.avatar}
                    width="38px"
                    height="38px"
                    alt="avatar"
                    className="h-10 w-10 rounded-full"
                  />
                )}
                <h4 className="text-gray-900 dark:text-gray-100">{author.name}</h4>
              </span>
              <span>
                <ShareOnTwitter
                  type="project"
                  slug={slug}
                  text="Acabo de leer esto de "
                  author={author.twitter.replace('https://twitter.com/', '@')}
                  url={`${siteMetadata.siteUrl}/`}
                />
                <ShareOnLinkedin type="project" slug={slug} url={`${siteMetadata.siteUrl}/`} />
              </span>
              <div className="text-sm font-medium leading-5 ">
                {tags && (
                  <div className="py-4 xl:py-8">
                    <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                      Tags
                    </h2>
                    <div className="flex flex-wrap gap-px">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </div>
                )}
                {(next || prev) && (
                  <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                    {prev && (
                      <div>
                        <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                          Previous Article
                        </h2>
                        <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                          <Link href={`/blog/${prev.slug}`}>{prev.title}</Link>
                        </div>
                      </div>
                    )}
                    {next && (
                      <div>
                        <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                          Next Article
                        </h2>
                        <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                          <Link href={`/blog/${next.slug}`}>{next.title}</Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="pt-4 xl:pt-8">
                <Link
                  href="/blog"
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  &larr; Back to the blog
                </Link>
              </div>
            </section>
            {/* CONTENT COL */}

            <section className="flex flex-col divide-y divide-gray-200 dark:divide-gray-700">
              <div className="prose max-w-none pt-10 pb-8 dark:prose-dark">{children}</div>
              <div className="pt-6 pb-6 text-sm text-gray-700 dark:text-gray-300">
                <Link href={editUrl(fileName)}>{'View on GitHub'}</Link>
              </div>
              <Comments frontMatter={frontMatter} />
            </section>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}

import React, { useEffect, useState } from 'react'
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
import { author } from '@/data/author'
import { ShareOnTwitter } from '@/shared/components/ui/lib/ShareOnTwitter'
import { ShareOnLinkedin } from '@/shared/components/ui/lib/ShareOnLinkedin'

const editUrl = (fileName: any) => `${siteMetadata.siteRepo}/blob/master/data/notes/${fileName}`

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

export default function PostLayout({ frontMatter, authorDetails, next, prev, children }: Props) {
  const { slug, fileName, date, title, tags } = frontMatter
  const [show, setShow] = useState<boolean>(false)
  const [isComplete, setIsComplete] = useState<boolean>(false)

  const [scrollY, setScrollY] = useState(0)
  const [maxScrollY, setMaxScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    // just trigger this so that the initial state
    // is updated as soon as the component is mounted
    // related: https://stackoverflow.com/a/63408216
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    setMaxScrollY(document.documentElement.scrollHeight - document.documentElement.clientHeight)
  }, [])

  useEffect(() => {
    if (scrollY === maxScrollY) setIsComplete(true)
  }, [])

  useEffect(() => {
    if (window.scrollY > 50) setShow(true)
    else setShow(false)
  })
  return (
    <SectionContainer>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/apuntes/${slug}`}
        authorDetails={author}
        {...frontMatter}
      />
      <ScrollTopAndComment
        type="blog"
        slug={slug}
        text="Acabo de leer esto de "
        author={author.twitter.replace('https://twitter.com/', '@')}
        url={`${siteMetadata.siteUrl}/`}
      />
      <article className="relative w-full">
        {show && (
          <div className="fixed top-[80px] left-0 right-0 z-[100] h-1 w-full bg-gray-200 dark:bg-gray-800">
            <div
              className="h-1 bg-primary"
              style={{
                width: Math.round((100 * scrollY) / maxScrollY) + '%',
                transition: 'all 0.2s linear',
              }}
            ></div>
          </div>
        )}
        <div className="w-full xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          <header className="pt-6 xl:pb-6">
            <Link
              href="/blog"
              className="text-primary hover:text-primary-600 dark:hover:text-primary-400"
            >
              &larr; Back to the blog
            </Link>
            <div className="flex flex-col items-center justify-center">
              <time dateTime={date} className="text-sm text-gray-600">
                {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
              </time>

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
                        Previous Article
                      </h2>
                      <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                        <Link href={`/blog/${prev.slug}`}>{prev.title}</Link>
                      </div>
                    </div>
                  ) : (
                    <div></div>
                  )}
                  {next ? (
                    <div>
                      <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                        Siguiente
                      </h2>
                      <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                        <Link href={`/blog/${next.slug}`}>{next.title}</Link>
                      </div>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
              )}
            </div>
          </header>

          <section className="flex flex-col divide-y divide-gray-200 dark:divide-gray-700">
            <div className="prose max-w-none pt-10 pb-8 dark:prose-dark">{children}</div>
            <div className="flex items-center justify-between pt-6 pb-6 text-sm text-gray-700 dark:text-gray-300">
              <Link href={editUrl(fileName)}>{'View on GitHub'}</Link>{' '}
              <span className="flex gap-2">
                <ShareOnTwitter
                  type="project"
                  slug={slug}
                  text="Acabo de leer esto de "
                  author={author.twitter.replace('https://twitter.com/', '@')}
                  url={`${siteMetadata.siteUrl}/`}
                />
                <ShareOnLinkedin type="project" slug={slug} url={`${siteMetadata.siteUrl}/`} />
              </span>
            </div>
            <Comments frontMatter={frontMatter} />
          </section>
        </div>
      </article>
    </SectionContainer>
  )
}

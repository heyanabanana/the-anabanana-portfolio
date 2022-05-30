import React from 'react'

import fs from 'fs'
import PageTitle from '@/shared/components/ui/sections/PageTitle'
import generateRss from '@/shared/lib/generate-rss'
import { MDXLayoutRenderer } from '@/shared/components/MDXComponents'
import { formatSlug, getAllFilesFrontMatter, getFileBySlug, getFiles } from '@/shared/lib/mdx'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { AuthorFrontMatter } from '@/shared/models/AuthorFrontMatter'
import { PostFrontMatter } from '@/shared/models/PostFrontMatter'
import { Toc } from '@/shared/models/Toc'
import { author } from '@/data/author'

const DEFAULT_LAYOUT = 'PostLayout'

export async function getStaticPaths() {
  const notes = getFiles('notes')
  return {
    paths: notes.map((p) => ({
      params: {
        slug: formatSlug(p).split('/'),
      },
    })),
    fallback: false,
  }
}

// @ts-ignore
export const getStaticProps: GetStaticProps<{
  post: { mdxSource: string; toc: Toc; frontMatter: PostFrontMatter }
  prev?: { slug: string; title: string }
  next?: { slug: string; title: string }
}> = async ({ params }) => {
  const slug = (params?.slug as string[]).join('/')
  const allPosts = await getAllFilesFrontMatter('notes')
  const postIndex = allPosts.findIndex((post) => formatSlug(post.slug) === slug)
  const prev: { slug: string; title: string } = allPosts[postIndex + 1] || null
  const next: { slug: string; title: string } = allPosts[postIndex - 1] || null
  const post = await getFileBySlug<PostFrontMatter>('notes', slug)

  // rss
  if (allPosts.length > 0) {
    const rss = generateRss(allPosts)
    fs.writeFileSync('./public/feed.xml', rss)
  }

  return {
    props: {
      post,
      prev,
      next,
    },
  }
}

export default function Projects({
  post,
  prev,
  next,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { mdxSource, toc, frontMatter } = post

  return (
    <>
      {'draft' in frontMatter && frontMatter.draft !== true ? (
        <MDXLayoutRenderer
          layout={frontMatter.layout || DEFAULT_LAYOUT}
          toc={toc}
          mdxSource={mdxSource}
          frontMatter={frontMatter}
          authorDetails={author}
          prev={prev}
          next={next}
        />
      ) : (
        <div className="mt-24 text-center">
          <PageTitle>
            Under Construction{' '}
            <span role="img" aria-label="roadwork sign">
              🚧
            </span>
          </PageTitle>
        </div>
      )}
    </>
  )
}

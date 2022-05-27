import siteMetadata from '@/data/siteMetadata'
import generateRss from '@/lib/generate-rss'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { TagSEO } from '@/shared/components/SEO'
import NotesListLayout from '@/shared/components/ui/layouts/NotesListLayout'
import { kebabCase } from '@/shared/lib/utils/kebabCase'
import fs from 'fs'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import path from 'path'
import { getAllTypes } from '@/shared/lib/types'

const root = process.cwd()

export async function getStaticPaths() {
  const categories = await getAllTypes('notes')

  return {
    paths: Object.keys(categories).map((category) => ({
      params: {
        category,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps = async (
  context: any
) => {
  const category = context?.params?.category as string
  const allPosts = await getAllFilesFrontMatter('notes')
  const filteredPosts = allPosts.filter(
    (post) => post.draft !== true && post?.category?.map((t) => kebabCase(t)).includes(category)
  )

  // rss
  if (filteredPosts.length > 0) {
    const rss = generateRss(filteredPosts, `apuntes/${category}/feed.xml`)
    const rssPath = path.join(root, 'public', 'apuntes', category)
    fs.mkdirSync(rssPath, { recursive: true })
    fs.writeFileSync(path.join(rssPath, 'feed.xml'), rss)
  }

  return { props: { posts: filteredPosts, category } }
}

export default function Tag({ posts, category }: InferGetStaticPropsType<typeof getStaticProps>) {
  // Capitalize first letter and convert space to dash
  const title = category[0].toUpperCase() + category.split(' ').join('-').slice(1)
  return (
    <>
      <TagSEO
        title={`${category} - ${siteMetadata.title}`}
        description={`${category} ${siteMetadata.author}`}
      />
      <NotesListLayout posts={posts} title={title} />
    </>
  )
}

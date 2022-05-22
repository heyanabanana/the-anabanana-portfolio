import { TagSEO } from '@/shared/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/shared/components/ui/layouts/ListLayout'
import generateRss from '@/shared/lib/generate-rss'
import { getAllFilesFrontMatter } from '@/shared/lib/mdx'
import { getAllTags } from '@/shared/lib/tags'
import fs from 'fs'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import path from 'path'
import { PostFrontMatter } from '@/shared/models/PostFrontMatter'
import { kebabCase } from '@/shared/lib/utils/kebabCase'

const root = process.cwd()

export async function getStaticPaths() {
  const tags = await getAllTags('blog')

  return {
    paths: Object.keys(tags).map((tag) => ({
      params: {
        tag,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<{ posts: PostFrontMatter[]; tag: string }> = async (
  context
) => {
  const tag = context.params.tag as string
  const allPosts = await getAllFilesFrontMatter('blog')
  const filteredPosts = allPosts.filter(
    (post) => post.draft !== true && post.tags.map((t) => kebabCase(t)).includes(tag)
  )

  // rss
  if (filteredPosts.length > 0) {
    const rss = generateRss(filteredPosts, `tags/${tag}/feed.xml`)
    const rssPath = path.join(root, 'public', 'tags', tag)
    fs.mkdirSync(rssPath, { recursive: true })
    fs.writeFileSync(path.join(rssPath, 'feed.xml'), rss)
  }

  return { props: { posts: filteredPosts, tag } }
}

export default function Tag({ posts, tag }: InferGetStaticPropsType<typeof getStaticProps>) {
  // Capitalize first letter and convert space to dash
  const title = tag[0].toUpperCase() + tag.split(' ').join('-').slice(1)
  return (
    <>
      <TagSEO
        title={`${tag} - ${siteMetadata.title}`}
        description={`${tag} tags - ${siteMetadata.author}`}
      />
      <ListLayout posts={posts} title={title} />
    </>
  )
}

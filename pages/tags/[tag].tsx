import siteMetadata from '@/data/siteMetadata'
import generateRss from '@/lib/generate-rss'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { TagSEO } from '@/shared/components/SEO'
import NotesListLayout from '@/shared/components/ui/layouts/NotesListLayout'
import { kebabCase } from '@/shared/lib/utils/kebabCase'
import fs from 'fs'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import path from 'path'
import { getAllTags } from '@/shared/lib/tags'
import ProjectListLayout from '@/shared/components/ui/layouts/ProjectListLayout'

const root = process.cwd()

export async function getStaticPaths() {
  const tags = await getAllTags('projects')

  return {
    paths: Object.keys(tags).map((tag) => ({
      params: {
        tag,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps = async (context: any) => {
  const tag = context?.params?.tag as string
  const allPosts = await getAllFilesFrontMatter('projects')
  const filteredPosts = allPosts.filter(
    (post) => post.draft !== true && post?.tags?.map((t: any) => kebabCase(t)).includes(tag)
  )

  // rss
  if (filteredPosts.length > 0) {
    const rss = generateRss(filteredPosts, `proyectos/${tag}/feed.xml`, 'projects')
    const rssPath = path.join(root, 'public', 'proyectos', tag)
    fs.mkdirSync(rssPath, { recursive: true })
    fs.writeFileSync(path.join(rssPath, 'feed.xml'), rss)
  }

  return { props: { posts: filteredPosts, tag } }
}

export default function Tag({ posts, tag }: InferGetStaticPropsType<typeof getStaticProps>) {
  // Capitalize first letter and convert space to dash
  const title = tag[0].toUpperCase() + tag.split('-').join(' ').slice(1)

  return (
    <>
      <TagSEO
        title={`${tag[0].toUpperCase() + tag.split('-').join(' ').slice(1)} - ${
          siteMetadata.title
        }`}
        description={`${tag[0].toUpperCase() + tag.split('-').join(' ').slice(1)} ${
          siteMetadata.author
        }`}
      />
      <ProjectListLayout projects={posts} title={title} />
    </>
  )
}

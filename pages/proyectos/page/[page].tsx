import { PageSEO } from '@/shared/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/shared/lib/mdx'
import { POSTS_PER_PAGE } from '../../apuntes'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { PostFrontMatter } from '@/shared/models/PostFrontMatter'
import ProjectListLayout from '@/shared/components/ui/layouts/ProjectListLayout'

export const getStaticPaths: GetStaticPaths<{ page: string }> = async () => {
  const totalPosts = await getAllFilesFrontMatter('blog')
  const totalPages = Math.ceil(totalPosts.length / POSTS_PER_PAGE)
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    params: { page: (i + 1).toString() },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<{
  posts: PostFrontMatter[]
  initialDisplayPosts: PostFrontMatter[]
  pagination: { currentPage: number; totalPages: number }
}> = async (context) => {
  const {
    params: { page },
  } = context
  const posts = await getAllFilesFrontMatter('projects')
  const pageNumber = parseInt(page as string)
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return {
    props: {
      posts,
      initialDisplayPosts,
      pagination,
    },
  }
}

export default function ProjectPage({
  posts,
  initialDisplayPosts,
  pagination,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <ProjectListLayout
        projects={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="Todos los proyectos 🚀"
      />
    </>
  )
}

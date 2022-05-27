import { getAllFilesFrontMatter } from '@/shared/lib/mdx'
import siteMetadata from '@/data/siteMetadata'
import ProjectListLayout from '@/shared/components/ui/layouts/ProjectListLayout'
import { PageSEO } from '@/shared/components/SEO'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { ComponentProps } from 'react'

export const POSTS_PER_PAGE = 5

export const getStaticProps: GetStaticProps<{
  posts: ComponentProps<typeof ProjectListLayout>['projects']
  initialDisplayPosts: ComponentProps<typeof ProjectListLayout>['initialDisplayProjects']
  pagination: ComponentProps<typeof ProjectListLayout>['pagination']
}> = async () => {
  const posts = await getAllFilesFrontMatter('projects')
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return { props: { initialDisplayPosts, posts, pagination } }
}

export default function Proyectos({
  posts: projects,
  initialDisplayPosts,
  pagination,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO title={`Proyectos - ${siteMetadata.author}`} description={siteMetadata.description} />
      <ProjectListLayout
        projects={projects}
        initialDisplayProjects={initialDisplayPosts}
        pagination={pagination}
        title="🚀 Todos los proyectos "
      />
    </>
  )
}

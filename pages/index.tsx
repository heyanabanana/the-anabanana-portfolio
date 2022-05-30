import Link from '@/shared/components/ui/lib/Link'
import { PageSEO } from '@/shared/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/shared/lib/mdx'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { PostFrontMatter, NotesFrontMatter, ProjectsFrontMatter } from '@/shared/models'
import { IndexCTA } from '@/shared/components/ui/sections/IndexCTA'
import { BiDownArrowAlt } from 'react-icons/bi'
import ScrollTop from '@/shared/components/ScrollTop'
import { NoteCard } from '@/shared/components/ui/cards'
import { ProjectCard } from '../shared/components/ui/cards/ProjectCard'

const MAX_DISPLAY = 5

export const getStaticProps: GetStaticProps<{
  posts: NotesFrontMatter[]
  projects: PostFrontMatter[]
}> = async () => {
  const posts = await getAllFilesFrontMatter('notes')
  const projects = await getAllFilesFrontMatter('projects')
  return { props: { posts, projects } }
}

export default function Home({ posts, projects }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <ScrollTop />

      <div className="flex flex-col ">
        <div className="flex h-[calc(100vh-80px)] flex-col items-center justify-between py-12 md:justify-center md:py-0">
          <IndexCTA />
          <Link
            className="flex h-12 w-12 items-center justify-center rounded-full border border-primary text-primary hover:bg-primary/20 focus:outline-none focus:ring dark:border-primary-300 dark:text-primary-300 md:h-16 md:w-16"
            href="#proyectos-destacados"
          >
            <span className="sr-only"> Ver más </span>
            <BiDownArrowAlt className="h-8 w-8 md:h-10 md:w-10" />
          </Link>
        </div>
        <section id="proyectos-destacados" className="min-h-[calc(100vh-190px)]">
          <div className="flex w-full flex-col items-start justify-between pt-20 md:flex-row md:items-center">
            <h2 className="flex items-center gap-2  text-xl font-bold leading-8 tracking-tight sm:text-2xl md:text-3xl">
              🖍 Escribo sobre las cosas que aprendo
            </h2>
            <div className="flex justify-center  pt-2 text-base font-medium leading-6">
              <Link
                href="/apuntes"
                className="text-primary hover:text-primary-600 dark:text-primary-300 dark:hover:text-primary-400"
                aria-label="Todos los apuntes"
              >
                Ver todos &rarr;
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center">
            {!projects.length && 'No posts found.'}
            {posts
              .slice(0, MAX_DISPLAY)
              .filter((n: NotesFrontMatter) => n?.feat === true)
              .map((p: NotesFrontMatter) => {
                return <NoteCard key={p.slug} note={p} />
              })}
          </div>

          <div className="flex w-full flex-col items-start justify-between py-6 pt-16 md:flex-row md:items-center ">
            <h2 className="flex items-center gap-2 text-xl font-bold leading-8 tracking-tight sm:text-2xl md:text-3xl">
              📌 Proyectos detacados
            </h2>
            <div className="flex justify-center pt-2 text-base font-medium leading-6">
              <Link
                href="/proyectos"
                className="text-primary hover:text-primary-600 dark:text-primary-300 dark:hover:text-primary-400"
                aria-label="Todos los proyectos"
              >
                Ver todos &rarr;
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-start">
            {!projects.length && 'No posts found.'}
            {projects
              .slice(0, MAX_DISPLAY)
              .filter((n: ProjectsFrontMatter) => n?.feat === true)
              .map((p: ProjectsFrontMatter) => {
                return <ProjectCard key={p.slug} project={p} />
              })}
          </div>
        </section>
      </div>
    </>
  )
}

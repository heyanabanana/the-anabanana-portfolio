import Link from '@/shared/components/ui/lib/Link'
import Tag from '@/shared/components/ui/lib/Tag'
import { ComponentProps, useEffect, useState } from 'react'
import Pagination from '@/shared/components/ui/sections/Pagination'
import formatDate from '@/shared/lib/utils/formatDate'
import { generateHSL } from '@/shared/lib/utils/color-generator'
import { ProjectsFrontMatter } from '@/shared/models'
import { BiDownArrowAlt } from 'react-icons/bi'
import { ProjectCard } from '../cards/ProjectCard'
import { getAllFilesFrontMatter } from '@/shared/lib/mdx'
import { GetStaticProps } from 'next'
import { getAllTags } from '@/shared/lib/tags'
import { useRouter } from 'next/router'

interface Props {
  projects: ProjectsFrontMatter[]
  title: string
  initialDisplayProjects?: ProjectsFrontMatter[]
  pagination?: ComponentProps<typeof Pagination>
}

export default function ProyectListLayout({
  projects,
  title,
  initialDisplayProjects = [],
  pagination,
}: Props) {
  const { asPath } = useRouter()

  const [searchValue, setSearchValue] = useState('')
  const filteredProjects = projects.filter((frontMatter) => {
    const searchContent = frontMatter.title + frontMatter.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  const displayProjects =
    initialDisplayProjects.length > 0 && !searchValue ? initialDisplayProjects : filteredProjects

  const featProjects = filteredProjects.filter((n: ProjectsFrontMatter) => n?.feat === true)

  const tagList = projects.map((p: any) => p.tags.map((t: any) => t))
  const tagsFiltered = [...new Set(tagList.flat())]

  return (
    <>
      <div className="space-y-6">
        <div className="flex w-full flex-col items-center justify-center gap-4 pt-6 md:flex-row md:justify-between">
          <h1 className="flex items-center gap-4 text-3xl font-extrabold leading-9 tracking-tight sm:text-3xl md:items-center md:text-4xl">
            {title}
          </h1>

          <div className="relative max-w-lg">
            <input
              aria-label="Buscar artículos"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Buscar proyectos"
              className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
            />
            <svg
              className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        {asPath === '/proyectos' && (
          <div className="flex w-full items-center justify-center gap-3 pb-6 flex-wrap">
            {tagsFiltered.map((t: any) => (
              <Tag key={t} text={t.split('-').join('\xa0')} />
            ))}
          </div>
        )}
        {featProjects.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="flex items-center justify-center gap-2 text-3xl font-bold leading-8 tracking-tight md:justify-start ">
              Proyectos detacados <BiDownArrowAlt />
            </h2>
            <section className="flex flex-wrap justify-center gap-4 md:justify-start">
              {featProjects?.map((project: ProjectsFrontMatter) => {
                return <ProjectCard key={project.slug} project={project} />
              })}
            </section>
          </div>
        )}
        <div className="flex flex-col gap-6">
          <h2 className="flex items-center justify-center gap-2 pt-12 text-3xl font-bold leading-8 tracking-tight md:justify-start">
            Todos los proyectos <BiDownArrowAlt />
          </h2>
          <section className="flex flex-wrap justify-center gap-4 md:justify-start">
            {!filteredProjects.length && 'No hemos encontrado resultados.'}

            {displayProjects?.map((project: ProjectsFrontMatter) => {
              return <ProjectCard key={project.slug} project={project} />
            })}
          </section>
        </div>
        {pagination && pagination.totalPages > 1 && !searchValue && (
          <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
        )}
      </div>
    </>
  )
}

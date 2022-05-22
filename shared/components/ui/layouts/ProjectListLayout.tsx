import Link from '@/shared/components/ui/lib/Link'
import Tag from '@/shared/components/ui/lib/Tag'
import { ComponentProps, useState } from 'react'
import Pagination from '@/shared/components/ui/sections/Pagination'
import formatDate from '@/shared/lib/utils/formatDate'
import { PostFrontMatter } from '@/shared/models/PostFrontMatter'

interface Props {
  projects: PostFrontMatter[]
  title: string
  initialDisplayPosts?: PostFrontMatter[]
  pagination?: ComponentProps<typeof Pagination>
}

export default function ProyectListLayout({
  projects,
  title,
  initialDisplayPosts = [],
  pagination,
}: Props) {
  const [searchValue, setSearchValue] = useState('')
  const filteredProjects = projects.filter((frontMatter) => {
    const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredProjects

  return (
    <>
      <div className="divide-y">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {title}
          </h1>
          <div className="relative max-w-lg">
            <input
              aria-label="Search articles"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Buscar proyectos"
              className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-700 dark:bg-black dark:text-gray-100"
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
        <section className="pt-9">
          {!filteredProjects.length && 'No posts found.'}
          {displayPosts.map((frontMatter) => {
            const { slug, date, title, summary, tags, cover } = frontMatter
            return (
              <div
                key={slug}
                className="flex h-80 w-60 transform flex-col justify-end rounded-lg bg-cover p-2 shadow-xl transition duration-500 hover:scale-105 "
                style={{
                  backgroundImage: `linear-gradient(360deg, rgba(0,0,0,0.8) 0%, rgba(0,212,255,0) 100%), url(${cover})`,
                }}
              >
                <h3 className="font-semibold text-white">{title}</h3>
              </div>
            )
          })}
        </section>
      </div>
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}

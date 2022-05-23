import Link from '@/shared/components/ui/lib/Link'
import Tag from '@/shared/components/ui/lib/Tag'
import { ComponentProps, useState } from 'react'
import Pagination from '@/shared/components/ui/sections/Pagination'
import formatDate from '@/shared/lib/utils/formatDate'
import { PostFrontMatter } from '@/shared/models/PostFrontMatter'
import { generateHSL } from '@/shared/lib/utils/color-generator'

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
  //              onChange={(e) => setSearchValue(e.target.value)}

  const tagList = projects.map((p: any) => p.tags.map((t: any) => t))
  const tagsFiltered = [...new Set(tagList.flat())]

  return (
    <>
      <div className="divide-y">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {title}
          </h1>
          <div className="relative flex max-w-lg overflow-hidden rounded-md border border-gray-300 dark:border-gray-700">
            <select
              className="h-10 appearance-none  border-none bg-gray-100 pl-5  pr-10 uppercase text-gray-600 focus:outline-none dark:bg-gray-900 dark:text-gray-300"
              onChange={(e) => setSearchValue(e.target.value)}
            >
              <option disabled>Filtrar por tags</option>
              {tagsFiltered.map((t: any, i: number) => (
                <option value={t} key={t} className="uppercase">
                  {t?.split('_').join('\xa0')}
                </option>
              ))}
            </select>
            <input
              aria-label="Search articles"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Buscar proyectos"
              className="w-full border-none bg-white px-4 py-2 text-gray-900 focus:ring-gray-400 dark:bg-black dark:text-gray-100"
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
        <section className="flex flex-wrap gap-6 pt-9">
          {!filteredProjects.length && 'No posts found.'}
          {displayPosts.map((frontMatter) => {
            const { slug, title, summary, tags, cover, color } = frontMatter
            return (
              <Link key={slug} href={`/proyectos/${slug}`}>
                <div
                  className="flex h-80 w-60 transform flex-col justify-end gap-px overflow-hidden rounded-lg bg-cover p-2 shadow-xl transition duration-500 hover:scale-105"
                  style={{
                    backgroundImage: `linear-gradient(360deg, ${
                      color ? color : 'rgba(0,0,0,0.8)'
                    } 0%, transparent 100%), url(${cover})`,
                  }}
                >
                  <h3 className="text-ellipsis font-semibold text-white">{title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((t: any) => (
                      <Tag key={t} text={t.split('_').join('\xa0')} />
                    ))}
                  </div>
                </div>
              </Link>
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

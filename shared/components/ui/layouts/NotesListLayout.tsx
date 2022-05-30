import { ComponentProps, useState } from 'react'
import Link from 'next/link'
import { BiChevronDown, BiDownArrowAlt, BiLogIn } from 'react-icons/bi'

import Pagination from '@/shared/components/ui/sections/Pagination'
import formatDate from '@/shared/lib/utils/formatDate'

import { NotesFrontMatter } from '@/shared/models'
import { categories } from '@/data/notes/categories'
import { NoteCardFeat, NoteCard } from '@/shared/components/ui/cards'

interface Props {
  posts: NotesFrontMatter[]
  title: string
  initialDisplayPosts?: NotesFrontMatter[]
  pagination?: ComponentProps<typeof Pagination>
}

export default function NotesListLayout({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}: Props) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((frontMatter: NotesFrontMatter) => {
    const searchContent = frontMatter.title + frontMatter.summary + frontMatter.category.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  const featPost =
    initialDisplayPosts.length > 0 && !searchValue
      ? initialDisplayPosts.filter((n: NotesFrontMatter) => n?.feat === true)
      : filteredBlogPosts.filter((n: NotesFrontMatter) => n?.feat === true)

  return (
    <div className="flex flex-col gap-6">
      <div className="flex w-full justify-between pt-6 pb-6 flex-col md:flex-row">
        <h1 className="flex items-center gap-4 text-5xl font-extrabold leading-9 tracking-tight md:leading-14">
          {categories?.find((c: any) => c?.name.toLowerCase() === title.toLowerCase())?.icon}{' '}
          {title}
        </h1>

        <div className="relative max-w-lg pt-2 md:pt-0">
          <input
            aria-label="Buscar artículos"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Buscar artículos"
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
      <div>
        <h2 className="flex items-center gap-2 text-3xl font-bold leading-8 tracking-tight">
          Empieza aquí <BiDownArrowAlt />
        </h2>
        <section className="divide-y divide-gray-300 dark:divide-gray-700">
          {featPost?.map((frontMatter: NotesFrontMatter) => {
            return <NoteCardFeat key={frontMatter.slug} note={frontMatter} />
          })}
        </section>
      </div>
      <div>
        <h2 className="flex items-center gap-2 text-3xl font-bold leading-8 tracking-tight">
          O explora todos los apuntes <BiDownArrowAlt />
        </h2>
        <section className="divide-y divide-gray-300 dark:divide-gray-700">
          {!filteredBlogPosts.length && 'No hemos encontrado resultados.'}
          {displayPosts.map((frontMatter: NotesFrontMatter) => {
            const { slug, date, title, summary } = frontMatter
            return (
              <NoteCard key={frontMatter.slug} note={frontMatter} />
            )
          })}
        </section>
      </div>
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </div>
  )
}

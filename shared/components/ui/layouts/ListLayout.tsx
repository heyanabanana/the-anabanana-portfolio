import { ComponentProps, useState } from 'react'
import Link from 'next/link'
import { BiLogIn } from 'react-icons/bi'

import Pagination from '@/shared/components/ui/sections/Pagination'
import formatDate from '@/shared/lib/utils/formatDate'

import { NotesFrontMatter } from '@/shared/models'
import { categories } from '@/data/notes/categories'

interface Props {
  posts: NotesFrontMatter[]
  title: string
  initialDisplayPosts?: NotesFrontMatter[]
  pagination?: ComponentProps<typeof Pagination>
}

export default function ListLayout({ posts, title, initialDisplayPosts = [], pagination }: Props) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((frontMatter) => {
    const searchContent = frontMatter.title + frontMatter.summary + frontMatter.category.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  return (
    <>
      <div className="gap-6 divide-y">
        <div className="flex w-full justify-between pt-6 pb-6">
          <h1 className="flex items-center gap-4 text-5xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100  md:leading-14">
            {categories?.find((c: any) => c?.name.toLowerCase() === title.toLowerCase())?.icon}{' '}
            {title}
          </h1>
          <div className="relative max-w-lg">
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
        <section className="divide-y ">
          {!filteredBlogPosts.length && 'No posts found.'}
          {displayPosts.map((frontMatter) => {
            const { slug, date, title, summary } = frontMatter
            return (
              <article key={slug} className="gap-4 py-6">
                <div className="align-center flex w-full justify-between">
                  <h3 className="text-2xl font-medium leading-8 tracking-tight">
                    <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                      {title}
                    </Link>
                  </h3>{' '}
                  <time className="text-sm text-gray-500 dark:text-gray-400" dateTime={date}>
                    {formatDate(date)}
                  </time>
                </div>
                <div className="align-center flex w-full justify-between">
                  <div className="prose max-w-none text-gray-500 dark:text-gray-400">{summary}</div>{' '}
                  <Link
                    href={`/blog/${slug}`}
                    className="text-gray-900 dark:text-gray-100"
                    passHref
                  >
                    <BiLogIn className="h-6 w-6 cursor-pointer text-primary" />
                  </Link>
                </div>
              </article>
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

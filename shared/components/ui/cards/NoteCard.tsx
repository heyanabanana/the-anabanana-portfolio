import React from 'react'
import { NotesFrontMatter } from '@/shared/models'
import Link from '@/shared/components/ui/lib/Link'
import formatDate from '@/shared/lib/utils/formatDate'
import { BiLogIn } from 'react-icons/bi'

export const NoteCard = ({ note }: { note: NotesFrontMatter }) => {
  return (
<article key={note.slug} className="gap-4 py-6">
                <div className="align-center flex w-full flex-col justify-between md:flex-row">
                  <h3 className="text-2xl font-medium leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                    <Link href={`/apuntes/${note.slug}`} className="text-gray-900 dark:text-gray-100">
                      {note.title}
                    </Link>
                  </h3>
                  <time className="text-sm text-gray-500 dark:text-gray-400" dateTime={note.date}>
                    {formatDate(note.date)}
                  </time>
                </div>
                <div className="align-center flex w-full justify-between">
                  <div className="prose max-w-none text-gray-500 dark:text-gray-400">{note.summary}</div>
                  <Link
                    href={`/apuntes/${note.slug}`}
                    className="text-gray-900 dark:text-gray-100"
                  >
                    <BiLogIn className="h-6 w-6 cursor-pointer text-primary" />
                  </Link>
                </div>
              </article>
  )
}

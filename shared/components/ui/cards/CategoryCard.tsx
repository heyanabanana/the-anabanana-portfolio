import React from 'react'
import { BiLogIn } from 'react-icons/bi'

import { NotesFrontMatter } from '@/shared/models'
import Link from '@/shared/components/ui/lib/Link'
import formatDate from '@/shared/lib/utils/formatDate'

export const NotesCard = ({ note }: { note: NotesFrontMatter }) => {
  return (
    <article
      key={note.slug}
      className="my-6 gap-4 rounded-xl border border-primary-200  p-8 py-6 shadow-lg transition hover:border-primary-500/20 hover:shadow-primary-400/10 dark:border-primary-700"
    >
      <div className="align-center flex w-full justify-between">
        <h3 className="text-2xl font-medium leading-8 tracking-tight  ">
          <Link
            href={`/apuntes/${note.slug}`}
            className="text-gray-900 hover:text-primary dark:text-gray-100"
          >
            {note.title}
          </Link>
        </h3>
        <time className="text-sm text-gray-500 dark:text-gray-400" dateTime={note.date}>
          {formatDate(note.date)}
        </time>
      </div>
      <div className="align-center flex w-full justify-between">
        <div className="prose max-w-none text-gray-500 dark:text-gray-400">{note.summary}</div>{' '}
        <Link href={`/apuntes/${note.slug}`} className="text-gray-900 dark:text-gray-100">
          <BiLogIn className="h-6 w-6 cursor-pointer text-primary" />
        </Link>
      </div>
    </article>
  )
}

import React from 'react'
import { PostFrontMatter } from '@/shared/models/PostFrontMatter'
import formatDate from '@/shared/lib/utils/formatDate'
import Tag from '@/shared/components/ui/lib/Tag'

export const NotesCard = ({ note }: { note: PostFrontMatter }) => {
  return (
    <a href="" className="group block w-96 p-6 transition-shadow hover:shadow-sm sm:pr-12">
      <span className="inline-block rounded-sm text-primary p-2 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>
      </span>

      <h2 className="mt-3 text-lg font-bold">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </h2>

      <p className="mt-3 text-sm text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis facere fuga illum, totam dolor
        odio ad sunt quidem similique sint.
      </p>

      <p className="relative mt-16 inline-block text-sm font-bold text-indigo-600">
        <span className="absolute inset-x-0 bottom-0 h-2/3 transform bg-indigo-100 transition-transform group-hover:scale-110"></span>
        <span className="relative">Find out more</span>
      </p>
    </a>
  )
}

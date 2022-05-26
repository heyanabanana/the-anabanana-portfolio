import React from 'react'

import Link from 'next/link'

export const ShareOnLinkedin = ({
  type,
  slug,
  url,
  size = 'full',
}: {
  size?: 'icon' | 'full'
  type: 'blog' | 'project' | 'notes'
  slug: string
  url: string
}) => {
  return size === 'full' ? (
    <a
      href={`https://www.linkedin.com/sharing/share-offsite/?url=${url
        .replace(':', '%3A')
        .replace('/', '%2F')}%2F${type === 'blog' ? 'apuntes' : 'proyectos'}%2F${slug}`}
      rel="noopener noreferrer"
      target="_blank"
    >
<a
  className="inline-flex items-center px-5 py-3 text-sm font-medium text-white transition-colors bg-[#0077b5] border-2 border-[#0077b5] rounded hover:bg-transparent hover:text-[#0077b5] focus:outline-none focus:ring active:opacity-75"

>
  Compartir
  <svg
    className="w-5 h-5 ml-2"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"
    />
  </svg>
</a>
    </a>
  ) : (
    <a
      href={`https://www.linkedin.com/sharing/share-offsite/?url=${url
        .replace(':', '%3A')
        .replace('/', '%2F')}%2F${type === 'blog' ? 'apuntes' : 'proyectos'}%2F${slug}`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <button
        type="button"
        className="dark:focus:ring-[#3b5998]/55 flex h-8  w-8 items-center justify-center rounded-full bg-[#3b5998]  text-center text-sm font-medium text-white hover:bg-[#3b5998]/90 focus:outline-none focus:ring-4 focus:ring-[#3b5998]/50"
      >
        <svg
          className="h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          data-icon="linkedin"
          role="img"
        >
          <path
            fill="currentColor"
            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
          />
        </svg>
      </button>
    </a>
  )
}

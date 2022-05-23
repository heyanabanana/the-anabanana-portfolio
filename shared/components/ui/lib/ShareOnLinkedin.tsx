import React from 'react'

import Link from 'next/link'

export const ShareOnLinkedin = ({
  type,
  slug,
  url,
}: {
  type: 'blog' | 'project'
  slug: string
  url: string
}) => {
  return (
    <Link
      href={`https://www.linkedin.com/sharing/share-offsite/?url=${url
        .replace(':', '%3A')
        .replace('/', '%2F')}%2F${type === 'blog' ? 'apuntes' : 'proyectos'}%2F${slug}`}
      passHref
    >
      <button
        type="button"
        className="dark:focus:ring-[#3b5998]/55 mr-2 mb-2 inline-flex items-center rounded-lg bg-[#3b5998] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#3b5998]/90 focus:outline-none focus:ring-4 focus:ring-[#3b5998]/50"
      >
        <svg
          className="mr-2 -ml-1 h-4 w-4"
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
        Compartir
      </button>
    </Link>
  )
}

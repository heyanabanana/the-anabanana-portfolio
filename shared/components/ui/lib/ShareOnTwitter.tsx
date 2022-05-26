import Link from 'next/link'

export const ShareOnTwitter = ({
  type,
  slug,
  text,
  author,
  url,
  size = 'full',
}: {
  size?: 'full' | 'icon'
  type: 'blog' | 'project' | 'notes'
  slug: string
  text: string
  author: string
  url: string
}) => {
  return size === 'full' ? (
    <a
      href={`https://twitter.com/intent/tweet?url=${url}${
        type === 'blog' ? 'apuntes' : 'proyectos'
      }/${slug}&text=${text.replace(' ', '%20')}${author}`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <button className="inline-flex items-center rounded border-2 border-[#55acee] bg-[#55acee] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-[#55acee] focus:outline-none focus:ring active:opacity-75">
        Compartir
        <svg className="ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
        </svg>
      </button>
    </a>
  ) : (
    <a
      href={`https://twitter.com/intent/tweet?url=${url}${
        type === 'blog' ? 'apuntes' : 'proyectos'
      }/${slug}&text=${text.replace(' ', '%20')}${author}`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <button
        type="button"
        className="dark:focus:ring-[#1da1f2]/55 flex h-8 w-8 items-center justify-center rounded-full bg-[#1da1f2]  text-center text-sm font-medium text-white hover:bg-[#1da1f2]/90 focus:outline-none focus:ring-4 focus:ring-[#1da1f2]/50"
      >
        <svg
          className="h-5 w-5"
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="twitter"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z"
          ></path>
        </svg>
      </button>
    </a>
  )
}

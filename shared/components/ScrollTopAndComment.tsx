import React, { useEffect, useState } from 'react'
import { BiCheck } from 'react-icons/bi'
import { ShareOnTwitter } from '@/shared/components/ui/lib/ShareOnTwitter'
import { ShareOnLinkedin } from '@/shared/components/ui/lib/ShareOnLinkedin'

const ScrollTopAndComment = ({
  type,
  slug,
  text,
  author,
  url,
}: {
  type?: 'blog' | 'project'
  slug?: string
  text?: string
  author?: any
  url?: string
}) => {
  const [show, setShow] = useState<boolean>(false)
  const [isComplete, setIsComplete] = useState<boolean>(false)

  const [scrollY, setScrollY] = useState(0)
  const [maxScrollY, setMaxScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    // just trigger this so that the initial state
    // is updated as soon as the component is mounted
    // related: https://stackoverflow.com/a/63408216
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    setMaxScrollY(document.documentElement.scrollHeight - document.documentElement.clientHeight)
  }, [])

  useEffect(() => {
    if (scrollY === maxScrollY) setIsComplete(true)
  }, [])

  useEffect(() => {
    const handleWindowScroll = () => {
      if (window.scrollY > 50) setShow(true)
      else setShow(false)
    }

    window.addEventListener('scroll', handleWindowScroll)
    return () => window.removeEventListener('scroll', handleWindowScroll)
  }, [])

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="fixed right-8 bottom-8 z-50 flex flex-col gap-3">
      <ShareOnTwitter
        size="icon"
        type={type || 'blog'}
        slug={slug || ''}
        text="Acabo de leer esto de "
        author={author || ''}
        url={url || ''}
      />
      <ShareOnLinkedin type={type || 'blog'} slug={slug || ''} url={url || ''} size="icon" />
      <div className={`relative h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700 ${
          show ? 'flex' : 'hidden'
        }`}>
        <div
          className="rounded-full bg-primary"
          style={{
            width: Math.round((100 * scrollY) / maxScrollY) + '%',
            height: Math.round((100 * scrollY) / maxScrollY) + '%',
          }}
        />
        <BiCheck
          className="absolute h-7 w-7"
          style={{ opacity: scrollY >= maxScrollY ? '1' : '0', transition: 'opacity 0.3s' }}
        />
      </div>
      <button
        aria-label="Scroll To Top"
        type="button"
        onClick={handleScrollTop}
        className={`h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 ${
          show ? 'flex' : 'hidden'
        }`}
      >
        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  )
}
export default ScrollTopAndComment

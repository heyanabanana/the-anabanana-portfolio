import React, { useEffect, useState } from 'react'

const ScrollTopAndComment = () => {
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

  const handleScrollToComment = () => {
    document?.getElementById('comment')?.scrollIntoView()
  }

  return (
    <div className={`fixed right-8 bottom-8 flex-col gap-3 ${show ? 'flex' : 'hidden'}`}>
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700">
        <div
          className=" rounded-full bg-blue-600"
          style={{
            width: Math.round((100 * scrollY) / maxScrollY)+ '%',
            height: Math.round((100 * scrollY) / maxScrollY)+ '%',
          }}
        ></div>
      </div>
      <button
        aria-label="Scroll To Comment"
        type="button"
        onClick={handleScrollToComment}
        className="rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
      >
        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <button
        aria-label="Scroll To Top"
        type="button"
        onClick={handleScrollTop}
        className="rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
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

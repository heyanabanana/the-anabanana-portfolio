import React from 'react'
import { Nav } from './nav/Nav'
import LogoPrimary from '@/data/LogoPrimary.svg'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className="sticky top-0 z-10 flex h-20 w-full bg-white/30 backdrop-blur-lg backdrop-filter transition  duration-500 dark:bg-black/30">
      <div className="mx-auto flex w-full max-w-3xl items-center justify-between px-4 sm:px-6 xl:max-w-5xl xl:px-0">
        <Link href="/" passHref>
          <div className="w-7 cursor-pointer select-none items-center  fill-primary-400 text-primary-400  dark:fill-primary-200 dark:text-primary-200">
            <LogoPrimary />
          </div>
        </Link>
        <Nav />
      </div>
    </header>
  )
}

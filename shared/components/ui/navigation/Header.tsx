import React from 'react'
import { Nav } from './nav/Nav'
import LogoPrimary from '@/data/LogoPrimary.svg'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className="flex items-center justify-between py-6">
      <Link href="/" passHref>
      <div className="w-7 cursor-pointer select-none items-center  fill-primary-400 text-primary-400  dark:fill-primary-200 dark:text-primary-200">
        <LogoPrimary />
      </div></Link>
      <Nav />
    </header>
  )
}

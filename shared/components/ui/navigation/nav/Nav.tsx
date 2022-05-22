import React from 'react'
import headerNavLinks from '@/data/headerNavLinks'
import { MobileNav } from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import Link from '../../lib/Link'

export const Nav = () => {
  return (
    <div className="flex items-center text-base leading-5">
      <div className="hidden sm:block">
        {headerNavLinks.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className="ease all text-black-600  dark:text-white-200 p-1 font-semibold lowercase transition duration-200 hover:text-primary dark:hover:text-primary-200 sm:p-4"
          >
            {link.title}
          </Link>
        ))}
      </div>
      <ThemeSwitch />
      <MobileNav />
    </div>
  )
}

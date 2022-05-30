import { Menu, Transition } from '@headlessui/react'
import Link from '../../lib/Link'
import headerNavLinks from '@/data/headerNavLinks'
import { HamIcon } from './HamIcon'
import { Fragment } from 'react'

export const MobileNav = () => {
  return (
    <Menu as="div" className="relative text-left sm:hidden">
      {({ open }) => (
        <>
          <Menu.Button
            aria-label="Abrir menú"
            className="flex w-full justify-center text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            <HamIcon isOpen={open} />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-300"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-300"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-300"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 flex w-56 origin-top-right flex-col gap-4 rounded-md bg-white p-4 shadow-lg ring-1 ring-yellow  ring-opacity-20 focus:outline-none dark:bg-black">
              {headerNavLinks?.map((link) => (
                <Menu.Item key={link?.title}>
                  {({ active }) => (
                    <Link
                      href={link?.href}
                      className="ease all p-1 font-medium text-black transition duration-300 hover:text-primary dark:text-white dark:hover:text-primary-200 sm:p-4"
                    >
                      {link?.title}
                    </Link>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}

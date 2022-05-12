import React, { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'

import { navigationLinks } from 'lib/config'
import { useNotionContext } from 'react-notion-x'

export const MobileNav = () => {
  const { components, mapPageUrl } = useNotionContext()

  const [navShow, setNavShow] = useState(false)

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = 'auto'
      } else {
        // Prevent scrolling
        document.body.style.overflow = 'hidden'
      }
      return !status
    })
  }

  const HamIcon = ({ isOpen }) => {
    const hamLine = `h-1 w-5 rounded-full transition ease transform duration-300 ${
      isOpen
        ? '  bg-amber-400 dark:bg-amber-300'
        : ' bg-rose-400 dark:bg-rose-300'
    }`

    return (
      <button
        className={`flex flex-col h-8 w-8 justify-center  items-center  ${
          isOpen ? '' : 'gap-0.5'
        }
        `}
      >
        <span
          className={`${hamLine} ${
            isOpen ? 'rotate-45 translate-y-1 ' : 'p-px'
          }`}
        />
        <span className={`${hamLine} ${isOpen ? 'opacity-0' : ''}`} />
        <span
          className={`${hamLine} ${isOpen ? '-translate-y-1 -rotate-45' : ''}`}
        />
      </button>
    )
  }

  return (
    <div className='md:hidden'>
      <Menu as='div' className='relative  text-left  '>
        {({ open }) => (
          <>
            <Menu.Button aria-label='Toggle Menu'>
              <HamIcon isOpen={open} />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items className='absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                <div className='px-1 py-1 '>
                  {navigationLinks
                    ?.filter((n: any) => n.show)
                    .map((link, index) => {
                      if (!link.pageId && !link.url) {
                        return null
                      }

                      if (link.pageId) {
                        return (
                          <Menu.Item>
                            {({ active }) => (
                              <components.PageLink
                                href={mapPageUrl(link.pageId)}
                                key={index}
                                className={`${
                                  active
                                    ? 'bg-violet-500 text-white'
                                    : 'text-gray-900'
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              >
                                {link.title}
                              </components.PageLink>
                            )}
                          </Menu.Item>
                        )
                      } else {
                        return (
                          <Menu.Item>
                            {({ active }) => (
                              <components.Link
                                href={link.url}
                                key={index}
                                className={`${
                                  active
                                    ? 'bg-violet-500 text-white'
                                    : 'text-gray-900'
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              >
                                {link.title}
                              </components.Link>
                            )}
                          </Menu.Item>
                        )
                      }
                    })
                    .filter(Boolean)}
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  )
}

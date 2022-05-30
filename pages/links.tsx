import React from 'react'
import Image from '@/shared/components/ui/lib/Image'
import Link from '@/shared/components/ui/lib/Link'
import { author } from '@/data/author'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
export default function Links() {
  return (
    <div className=" flex h-full w-full flex-col items-center justify-center gap-6 px-16">
      <Image src="/static/images/linkAvatar.png" alt="Links" width="150px" height="150px" />

      <div className="flex w-full flex-col items-center justify-center gap-6">
        <Link href={author.github} className="w-full">
          <button className="max-w-36 flex w-full  items-center justify-center gap-2 rounded-xl border-gray-100 bg-gray-100 py-2 text-xl shadow-lg transition duration-500 ease-in-out hover:border hover:border-primary hover:bg-white dark:border-gray-900 dark:bg-gray-900 dark:hover:border-primary dark:hover:bg-black">
            <FaGithub className='="w-8 h-8' /> Github
          </button>
        </Link>
        <Link href={author.linkedin} className="w-full">
          <button className="max-w-96 flex w-full min-w-full items-center justify-center gap-2 rounded-xl border-gray-100 bg-gray-100 py-2 text-xl shadow-lg transition duration-500 ease-in-out hover:border hover:border-primary hover:bg-white dark:border-gray-900 dark:bg-gray-900 dark:hover:border-primary dark:hover:bg-black">
            <FaLinkedin className='="w-8 h-8' /> Linkedin
          </button>
        </Link>
      </div>
    </div>
  )
}

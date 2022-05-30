import React from 'react'
import { PageSEO } from '@/shared/components/SEO'
import siteMetadata from '@/data/siteMetadata'

import Image from '@/shared/components/ui/lib/Image'
import Link from '@/shared/components/ui/lib/Link'
import { author } from '@/data/author'
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaLaptop } from 'react-icons/fa'
export default function Links() {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className=" flex h-full w-full flex-col items-center justify-center gap-6 px-16 pt-4">
        <div className="flex flex-col items-center gap-2 ">
          <Image src="/static/images/linkAvatar.png" alt="Links" width="150px" height="150px" />
            <p className="sm:text-xl  font-semibold text-gray-700 dark:text-gray-300">Ana Fernández</p>
            <p className="text-sm sm:text-lg ">
              Desarrollo cosas en javascript y a veces diseño otras. 
            </p>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-6">
          <Link href={author.github} className="w-full">
            <button className="max-w-36 flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300 py-2 shadow-lg transition hover:border-primary-500/20 hover:shadow-primary-400/10 dark:border-gray-800">
              <FaGithub className="h-8" /> Github
            </button>
          </Link>
          <Link href={author.linkedin} className="w-full">
            <button className="max-w-36 flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300 py-2 shadow-lg transition hover:border-primary-500/20 hover:shadow-primary-400/10 dark:border-gray-800">
              <FaLinkedin className="h-8" /> Linkedin
            </button>
          </Link>
          <Link href={author.twitter} className="w-full">
            <button className="max-w-36 flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300 py-2 shadow-lg transition hover:border-primary-500/20 hover:shadow-primary-400/10 dark:border-gray-800">
              <FaInstagram className="h-8" /> Twitter
            </button>
          </Link>
          <Link href={author.instagram} className="w-full">
            <button className="max-w-36 flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300 py-2 shadow-lg transition hover:border-primary-500/20 hover:shadow-primary-400/10 dark:border-gray-800">
              <FaTwitter className="h-8" /> Instagram
            </button>
          </Link>
          <Link href={author.website} className="w-full">
            <button className="max-w-36 flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300 py-2 shadow-lg transition hover:border-primary-500/20 hover:shadow-primary-400/10 dark:border-gray-800">
              <FaLaptop className="h-8" /> Sitio web
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

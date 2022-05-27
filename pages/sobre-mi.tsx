import { useState } from 'react'
import Image from 'next/image'
import { PageSEO } from '@/shared/components/SEO'
import SocialIcon from '@/assets/icons/social-icons'
import { BiBookmarkHeart, BiBrush, BiCoffee, BiHeartCircle } from 'react-icons/bi'

import { author } from '@/data/author'

const About = () => {
  return (
    <>
      <PageSEO title={`Sobre mi - ${author.name}`} description={`Sobre mi - ${author.name}`} />
      <div className="h-full">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Sobre mi ⚡️
          </h1>
        </div>
        <div className="flex flex-col items-start gap-6 lg:flex-row  lg:gap-0 xl:space-y-0">
          <div className="flex w-full flex-col items-center pt-8 ">
            <Image
              src={author.avatar}
              alt="avatar"
              width="192px"
              height="192px"
              className="h-48 w-48 rounded-full"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{author.name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{author.occupation}</div>
            <div className="flex space-x-3 pt-4">
              <SocialIcon kind="mail" href={`mailto:${author.email}`} />
              <SocialIcon kind="github" href={author.github} />
              <SocialIcon kind="linkedin" href={author.linkedin} />
              <SocialIcon kind="twitter" href={author.twitter} />
            </div>
          </div>
          <div className="flex flex-col gap-6 ">
            <section className="flex max-w-none flex-col gap-4 xl:col-span-2">
              {author.description.map((d: string, i: number) => (
                <p key={i}>{d}</p>
              ))}
            </section>
            <section className="pt-6">
              <div className="flex flex-col gap-4">
                <h3 id="skills" className="flex items-center gap-2 text-2xl font-semibold">
                  <BiBookmarkHeart />
                  Skills
                </h3>
                <div className="gap-4 rounded-xl border border-gray-400 p-4 dark:border-gray-600">
                  {author.skills}
                </div>
                <h3 id="tools" className="flex items-center gap-2 text-2xl font-semibold">
                  <BiBrush />
                  Herramientas
                </h3>
                <div className="gap-4 rounded-xl border border-gray-400 p-4 dark:border-gray-600">
                  {author.tools}
                </div>
              </div>
            </section>
            <section className="pt-6">
              <div className="flex flex-col gap-4">
                <h3 id="experiencia" className="flex items-center gap-2 text-2xl font-semibold">
                  <BiCoffee />
                  Experiencia
                </h3>
                {author.experience.map((e: any, i: number) => (
                  <div key={i} className="gap-4 border-l-2 border-primary pl-2">
                    <p className="text-sm text-gray-600 dark:text-gray-400">{e.dates}</p>
                    <p className="font-semibold">
                      {e.title} - <strong className="font-normal text-primary">{e.company}</strong>
                    </p>
                    <p className="text-sm">{e.description}</p>
                  </div>
                ))}
              </div>
            </section>
            <section className="pt-6">
              <div className="flex flex-col gap-4">
                <h3 id="formacion" className="flex items-center gap-2 text-2xl font-semibold">
                  <BiCoffee />
                  Formación
                </h3>
                {author.education.map((e: any, i: number) => (
                  <div key={i} className="gap-4 border-l-2 border-primary pl-2">
                    <p className="text-sm text-gray-600 dark:text-gray-400">{e.dates}</p>
                    <p className="font-semibold">
                      {e.title} - <strong className="font-normal text-primary">{e.company}</strong>
                    </p>
                    <p className="text-sm">{e.description}</p>
                  </div>
                ))}
              </div>
            </section>
            <section className="pt-6">
              <div className="flex flex-col gap-4">
                <h3 id="personal" className="flex items-center gap-2 text-2xl font-semibold">
                  <BiHeartCircle />
                  {author?.personal?.title}
                </h3>
                {author?.personal?.description.map((e: any, i: number) => (
                  <div
                    key={i}
                    className="gap-4 rounded-xl border border-gray-400 p-4 dark:border-gray-600"
                  >
                    {e}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default About

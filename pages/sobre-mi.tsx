import { useState } from 'react'
import Image from 'next/image'
import { PageSEO } from '@/shared/components/SEO'
import SocialIcon from '@/assets/icons/social-icons'
import { BiBookmarkHeart, BiBrush, BiCoffee, BiHeartCircle } from 'react-icons/bi'

import { author } from '@/data/author'
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'

const About = () => {
  const [[page], setPage] = useState([0, 0])

  const tabs = [
    { title: 'Skills', body: <TabSkills /> },
    { title: 'Experiencia', body: <TabExperience /> },
    { title: 'Formación', body: <TabFormacion /> },
    { title: 'Personal', body: <TabPersonal /> },
  ]

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
            <div className="flex flex-col gap-6 ">
              <section className="flex max-w-none flex-col gap-4 xl:col-span-2">
                {author.description.map((d: string, i: number) => (
                  <p key={i}>{d}</p>
                ))}
              </section>
              <div>
                <AnimateSharedLayout>
                  <div className="flex cursor-pointer items-center justify-between rounded-2xl bg-gray-100 px-4 py-2 text-sm dark:bg-gray-900">
                    {tabs.map(({ title }, i) => {
                      const isActive = i === page
                      return (
                        <span
                          key={i}
                          className={
                            isActive
                              ? 'rounded-2xl bg-white px-4 py-2 font-semibold text-primary shadow-md dark:bg-black'
                              : ' px-4 py-2'
                          }
                          onClick={() => {
                            setPage([i, i - page])
                          }}
                        >
                          <h4>{title}</h4>
                        </span>
                      )
                    })}
                  </div>
                  <motion.div
                    key={page}
                    animate={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.5 }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                  >
                    {tabs[page].body}
                  </motion.div>
                </AnimateSharedLayout>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About

const TabSkills = () => {
  return (
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
  )
}

const TabExperience = () => {
  return (
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
  )
}

const TabFormacion = () => {
  return (
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
  )
}

const TabPersonal = () => {
  return (
    <section className="pt-6">
      <div className="flex flex-col gap-4">
        <h3 id="personal" className="flex items-center gap-2 text-2xl font-semibold">
          <BiHeartCircle />
          {author.personal.title}
        </h3>
        {author.personal.description.map((e: any, i: number) => (
          <div key={i} className="gap-4 rounded-xl border border-gray-400 p-4 dark:border-gray-600">
            {e}
          </div>
        ))}
      </div>
    </section>
  )
}

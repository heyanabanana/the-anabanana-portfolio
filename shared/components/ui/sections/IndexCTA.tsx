import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'

export const IndexCTA = () => {
  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Diseño UI/UX', 'Desarrollo Frontend', 'Diseño de producto'], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
    })

    // Destropying
    return () => {
      typed.destroy()
    }
  }, [])
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-32 ">
      <div className="mx-auto flex max-w-xl flex-col gap-4 text-center">
        <h1 className="align-center flex justify-center text-center text-4xl font-extrabold sm:text-6xl xl:text-7xl">
          Hola <div className="cursor-pointer hover:animate-wave">👋</div>, soy Ana
        </h1>
        <h2 className="align-center flex justify-center text-center text-2xl font-extrabold sm:text-4xl xl:text-5xl">
          <span
            className="bg-gradient-to-r from-orange-400 to-rose-400 dark:from-orange-300 dark:to-rose-300 bg-clip-text text-transparent "
            ref={el}
          ></span>
        </h2>

        <p className="mt-4 sm:text-xl sm:leading-relaxed">
          Desarrollo cosas en javascript y a veces diseño otras. Trabajo como Frontend developer en
          <a
            href="https://open-bootcamp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-1 font-semibold text-teal-400 dark:text-teal-200"
          >
            OpenBootcamp.
          </a>
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-primary-600 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
            href="/get-started"
          >
            Ver proyectos
          </a>

          <a
            className="block w-full rounded border border-primary-300 px-12 py-3 text-sm font-medium text-primary hover:text-primary-600 focus:outline-none focus:ring active:text-primary-500 dark:text-primary-300 sm:w-auto"
            href="/about"
          >
            Sobre mi
          </a>
        </div>
      </div>
    </div>
  )
}

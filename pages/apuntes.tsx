import Link from '@/shared/components/ui/lib/Link'
import { PageSEO } from '@/shared/components/SEO'
import Tag from '@/shared/components/ui/lib/Tag'
import siteMetadata from '@/data/siteMetadata'
import { kebabCase } from '@/shared/lib/utils/kebabCase'
import { categories } from '@/data/notes/categories'
import Image from 'next/image'

export default function Apuntes() {
  return (
    <>
      <PageSEO
        title={`Apuntes - ${siteMetadata.author}`}
        description="Cosas sobre las que escribo"
      />
      <div className="flex w-full flex-col items-center justify-center py-16 md:py-24">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold sm:text-4xl"> 🖍 Apuntes interesantes</h2>

          <p className="mt-4 text-gray-800 dark:text-gray-300">
            Escribo sobre las áreas en las que me formo.
          </p>
        </div>{' '}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {categories.map((c: any) => {
            return (
              <Link
                key={`categoria-${c.name}`}
                className="w-full sm:w-64 block rounded-xl border border-gray-300 p-8 shadow-lg transition hover:border-primary-500/20 hover:shadow-primary-400/10 dark:border-gray-800"
                href={`/apuntes/${kebabCase(c.name)}`}
              >
                <span className="flex items-center justify-center gap-2 ">
                  {c.icon}
                  <p className="text-2xl font-bold uppercase">{c.name}</p>
                  <p className="font-xl text-gray-400">- {c.nivel}</p>
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}


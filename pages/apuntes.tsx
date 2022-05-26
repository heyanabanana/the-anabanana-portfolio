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
      <div className="flex flex-col items-center justify-center md:py-24">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold sm:text-4xl"> 🖍 Cosas sobre las que escribo</h2>

          <p className="mt-4 text-gray-800 dark:text-gray-300">
            Escribo sobre las áreas en las que me formo.
          </p>
        </div>{' '}
        <div className="mt-8 flex flex-wrap gap-4">
          {categories.map((c: any) => {
            return (
              <Link
                key={`categoria${c}`}
                className="block rounded-xl border border-gray-300 p-8 shadow-lg transition hover:border-primary-500/20 hover:shadow-primary-400/10 dark:border-gray-800"
                href={`/apuntes/${kebabCase(c)}`}
              >
                <span className="flex w-56 items-center justify-center gap-2 ">{c.icon}
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
//https://www.hyperui.dev
{
  /* {Object.keys(types).length === 0 && 'No types found.'}
          {sortedtypes.map((t) => {
            return (
              <div key={t} classNameName="mt-2 mb-2 mr-5">
                <Tag text={t} />
                <Link
                  href={`/types/${kebabCase(t)}`}
                  classNameName="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300"
                >
                  {` (${types[t]})`}
                </Link>
              </div>
            )
          })} */
}

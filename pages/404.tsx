import Link from '@/shared/components/ui/lib/Link'

export default function FourZeroFour() {
  return (
    <div className="flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6">
      <div className="space-x-2 pt-6 pb-8 md:space-y-5">
        <h1 className="hover:animate-wave text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:border-r-2 md:px-6 md:text-8xl md:leading-14">
          404
        </h1>
      </div>
      <div className="max-w-md">
        <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
          😢 Lo siento, pero parece que esta página no existe.
        </p>
        <p className="mb-8">Pero seguro que encuentras otras muchas cosas interesantes.</p>
        <Link href="/">
          <button className="focus:shadow-outline-primary dark:bg-primary-300 inline rounded-lg border border-transparent bg-primary px-4 py-2 text-sm font-medium leading-5 text-white dark:text-black shadow transition-colors duration-150 hover:bg-primary-500 focus:outline-none dark:hover:bg-primary-400">
            Volver al inicio
          </button>
        </Link>
      </div>
    </div>
  )
}

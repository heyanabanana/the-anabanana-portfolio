import Link from '@/shared/components/ui/lib/Link'
import { PageSEO } from '@/shared/components/SEO'
import Tag from '@/shared/components/ui/lib/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/shared/lib/mdx'
import formatDate from '@/shared/lib/utils/formatDate'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { PostFrontMatter } from '@/shared/models/PostFrontMatter'
import { IndexCTA } from '@/shared/components/ui/sections/IndexCTA'

const MAX_DISPLAY = 5

export const getStaticProps: GetStaticProps<{
  posts: PostFrontMatter[]
  projects: PostFrontMatter[]
}> = async () => {
  const posts = await getAllFilesFrontMatter('blog')
  const projects = await getAllFilesFrontMatter('projects')
  return { props: { posts, projects } }
}

export default function Home({ posts, projects }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div>
        <div className="space-y-2 pt-12 pb-8 md:space-y-5">
          <IndexCTA />
          <p className="text-2xl leading-9 text-gray-600 dark:text-gray-400">
            Desarrollo cosas en javascript y a veces diseño otras. Trabajo como Frontend developer
            en
            <a
              href="https://open-bootcamp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-1 font-semibold text-teal-400 dark:text-teal-200"
            >
              OpenBootcamp.
            </a>
            Escribo cosas sobre lo que aprendo.
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
    </>
  )
}

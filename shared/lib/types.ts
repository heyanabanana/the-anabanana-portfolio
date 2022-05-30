import { PostFrontMatter } from '@/shared/models/PostFrontMatter'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { getFiles } from './mdx'
import { kebabCase } from './utils/kebabCase'

const root = process.cwd()

export async function getAllTypes(type: 'notes') {
  const files = getFiles(type)

  const tagCount: Record<string, number> = {}
  files.forEach((file) => {
    const source = fs.readFileSync(path.join(root, 'data', type, file), 'utf8')
    const matterFile = matter(source)
    const data = matterFile.data as PostFrontMatter
    if (data.category && data.draft !== true) {
      data.category.forEach((tag) => {
        const formattedTag = kebabCase(tag)
        if (formattedTag in tagCount) {
          tagCount[formattedTag] += 1
        } else {
          tagCount[formattedTag] = 1
        }
      })
    }
  })

  return tagCount
}

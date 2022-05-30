import GithubSlugger from 'github-slugger'
const slugger = new GithubSlugger()
export const kebabCase = (str: string) => slugger.slug(str)

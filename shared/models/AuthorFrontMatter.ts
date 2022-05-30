export type AuthorFrontMatter = {
  avatar: string
  name: string
  occupation: string

  email?: string
  twitter?: string
  linkedin?: string
  github?: string
  instagram?: string

  website: string

  description: string[]

  skills: string
  tools: string

  experience: {
    dates: string
    title: string
    company: string
    description?: string
  }[]

  education: {
    dates: string
    title: string
    company: string
    description?: string
  }[]

  personal?: {
    title: string
    description: string[]
  }
}

export type AuthorFrontMatter = {
  layout?: string
  name: string
  avatar: string
  occupation: string
  company: string
  email: string
  twitter: string
  linkedin: string
  github: string
}

export interface AuthorProps {
  avatar: string
  name: string
  occupation: string

  email: string
  twitter: string
  linkedin: string
  github: string

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

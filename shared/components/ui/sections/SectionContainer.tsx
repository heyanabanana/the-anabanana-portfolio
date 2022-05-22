import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function SectionContainer({ children }: Props) {
  return (
    <div className="ease all relative min-h-screen bg-white transition duration-500 dark:bg-black">
      <div className=" mx-auto h-full max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">{children}</div>
    </div>
  )
}

import Link from 'next/link'
import { kebabCase } from '@/shared/lib/utils/kebabCase'
import { generateHSL } from '@/shared/lib/utils/color-generator'

interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a
        className="rounded-md px-2 text-xs font-semibold uppercase text-white"
        style={{ backgroundColor: generateHSL(text) }}
      >
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag

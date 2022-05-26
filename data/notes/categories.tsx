import { FaHtml5, FaCss3Alt } from 'react-icons/fa'

export const categories = [
  {
    name: 'html',
    icon: <FaHtml5 className="h-10 w-10 text-primary dark:text-primary-300" />,
    nivel: 'Básico'
  },
  {
    name: 'css',
    icon: <FaCss3Alt className="h-10 w-10 text-primary dark:text-primary-300"  />,
    nivel: 'Básico'

  },
]

const IconComp = (icon: any) => {
  return <span>{icon}</span>
}

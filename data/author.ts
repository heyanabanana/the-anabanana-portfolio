import { AuthorFrontMatter } from '@/shared/models/AuthorFrontMatter'
export const author: AuthorFrontMatter = {
  name: '✨ Ana Fernández',
  avatar: '/static/images/avatar.png',
  occupation: 'Frontend developer',
  email: 'hola@heyanabanana.es',
  github: 'https://github.com/heyanabanana',
  twitter: 'https://twitter.com/hey_anabanana',
  linkedin: 'https://www.linkedin.com/in/anafernandezvaldes/',
  website: 'https://heyanabanana.es',

  description: [
    'Soy de Asturias 🌲, España. Estudié el Grado de Diseño de Producto, en la Escuela Superior de Arte del Principado de Asturias, y continué mi formación en Diseño Gráfico de forma autodidacta.',
    'Actualmente me encuentro trabajando como desarrolladora Frontend en OpenBootcamp.',
    'Me encanta el mundo del desarrollo web y el diseño en general, también tengo tres preciosos gatos 🐱 y el mis ratos libre dibujo mucho 🎨',
  ],

  skills: '✨ HTML5, CSS3, Javascript, ReactJS, TailwindCSS, Chakra UI, Storybook, Cypress.',
  tools: '✨ Photoshop, Illustrator, Indesign, After Effects, Cinema 4D, Notion, Git, Figma.',

  experience: [
    {
      dates: 'Feb 2022 - Actualidad',
      title: 'Frontend developer',
      company: 'OpenBootcamp',
      description: 'Trabajo en el equipo de Frontend desarrollando software con ReactJS',
    },
    {
      dates: 'Nov 2020 - Feb 2022        ',
      title: 'Graphic Designer & Community Manager',
      company: 'Freelance',
      description: 'Desarrollo de contenidos gráficos digitales para diferentes empresas.',
    },
    {
      dates: 'Mar 2018 - Oct 2020        ',
      title: 'Ilustradora',
      company: 'Freelance',
      description: 'Ilustración freelance para diferentes empresas.',
    },
  ],

  education: [
    {
      dates: 'May 2022 - Actualidad',
      title: 'Bootcamp de marketing digital',
      company: 'OpenMarketers',
      description: 'Formación en marketing digital',
    },
    {
      dates: 'Oct 2022 - Febrero 2022',
      title: 'Bootcamp de desarrollo web',
      company: 'OpenBootcamp',
      description:
        'Formación en diferentes tecnologías de desarrollo web, como HTML5, CSS3, Javascript, ReactJS, AdonisJS...',
    },
    {
      dates: 'Nov 2013 - Feb 2017',
      title: 'Grado en diseño de producto',
      company: 'Escuela Superior de Arte del Principado de Asturias.      ',
    },
  ],

  personal: {
    title: 'Intereses personales',
    description: [
      '✨ Actualmente me encuentro formándome en y mejorando en diseño UX/UI y marketing digital, creando proyectos personales y aprendiendo sobre nuevas tecnologías.',
      '✨ Me encanta viajar en furgoneta, mis gatos y la fotografía.',
    ],
  },
}

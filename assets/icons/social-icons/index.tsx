import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa'
// Icons taken from: https://simpleicons.org/

const components = {
  mail: FaEnvelope,
  github: FaGithub,
  facebook: FaFacebook,
  instagram: FaInstagram,
  linkedin: FaLinkedin,
  twitter: FaTwitter,
}

const SocialIcon = ({ kind, href, size = 8 }: any) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null

  //@ts-ignore
  const SocialSvg = components[kind]

  return (
    <a
      className="opacity-100 hover:opacity-80"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg className={` fill-primary-400  h-${size} w-${size}`} />
    </a>
  )
}

export default SocialIcon

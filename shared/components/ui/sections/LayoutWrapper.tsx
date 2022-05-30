import SectionContainer from './SectionContainer'
import Footer from '../navigation/Footer'
import { ReactNode } from 'react'
import { Header } from '../navigation/Header'
import { useRouter } from 'next/router'

interface Props {
  children: ReactNode
}

const LayoutWrapper = ({ children }: Props) => {
  const { asPath } = useRouter()

  return (
    <div className="bg-white transition duration-500 dark:bg-black">
      {asPath !== '/links' && <Header />}
      <SectionContainer>
        <div className="flex min-h-screen flex-col justify-between">
          <main className="	mb-auto h-full">{children}</main>
          {asPath !== '/links' && <Footer />}
        </div>
      </SectionContainer>
    </div>
  )
}

export default LayoutWrapper

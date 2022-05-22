import SectionContainer from './SectionContainer'
import Footer from '../navigation/Footer'
import { ReactNode } from 'react'
import { Header } from '../navigation/Header'
import Image from 'next/image'
import BgGradient from '@/public/static/images/BGGradient.png'
interface Props {
  children: ReactNode
}

const LayoutWrapper = ({ children }: Props) => {
  return (
    <SectionContainer>
      <div className="flex min-h-screen flex-col justify-between">
        <Header />
        <main className="	mb-auto h-full">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper

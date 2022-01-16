import Link from 'next/link'
import { CMS_NAME } from '../lib/constants'
import Container from './container'
import Navigation from '../components/Navigation'
import { useEffect } from 'react'

export default function Header() {

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll)
  //   return () => window.removeEventListener('scroll', handleScroll)
  // })

const handleScroll = () => {
    console.log('scroll event', window.scrollY)
  }

  return (
    <section className="mt-16 mb-16 md:mb-12" onScroll={handleScroll}>
      <Container>
        <div className="flex flex-col lg:flex-row justify-between lg:items-center">
          <h1 className="text-4xl lg:text-6xl mb-4 md:text-6xl font-bold tracking-tighter leading-tight md:pr-8">
            <Link href="/">
              <a className="hover:underline">{ CMS_NAME }</a>
            </Link>
          </h1>
          <Navigation/>
        </div>
      </Container>
    </section>
  )
}

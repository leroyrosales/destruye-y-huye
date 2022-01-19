import Link from 'next/link'
import { CMS_NAME } from '../lib/constants'
import Container from './container'
import Navigation from './navigation.component'
import { useState, useEffect } from 'react'

export default function Header() {

  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    setShow(window.pageYOffset > 140);
  };

  return (
    <section className="bg-gradient-to-rpy-8 mb-16 py-8">
        <div className={`flex flex-col px-5 md:px-10 z-50 xl:flex-row justify-between xl:items-center ${show ? "w-full fixed-nav bg-white" : ""}`}>
          <h1 className="text-transparent bg-clip-text bg-gradient-to-br from-green via-green to-white text-6xl mb-4 md:text-7xl font-extrabold tracking-tighter leading-tight md:pr-8">
            <Link href="/">
              <a className="hover:underline">{ CMS_NAME }</a>
            </Link>
          </h1>
          <Navigation/>
        </div>

    </section>
  )
}

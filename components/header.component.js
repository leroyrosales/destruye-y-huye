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
    <section className="mt-16 mb-16 md:mb-12">

        <div className={`flex flex-col px-10 lg:flex-row justify-between lg:items-center ${show ? "w-full fixed-nav bg-white" : ""}`}>
          <h1 className="text-4xl lg:text-6xl mb-4 md:text-6xl font-bold tracking-tighter leading-tight md:pr-8">
            <Link href="/">
              <a className="hover:underline">{ CMS_NAME }</a>
            </Link>
          </h1>
          <Navigation/>
        </div>

    </section>
  )
}

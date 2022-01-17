import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/router';

export default function Navigation() {
  const router = new useRouter();
  const [navToggle, setNavToggle] = useState(false)
  const toggleNav = () => {
    setNavToggle(toggle => !toggle)
  }
  return (
    <>
      <nav>
        <button className="block md:hidden mb-4" onClick={() => toggleNav()}>Menu</button>
        <div className={`flex flex-col md:flex-row mobile-nav ${navToggle ? "open" : ""}`}>
          <Link href="/">
            <a className={`${router.pathname == "/" ? "active" : ""}`}>Home</a>
          </Link>
          <Link href="/about">
            <a className={`${router.pathname == "/about" ? "active" : ""}`}>About</a>
          </Link>
          <Link href="/locations">
            <a className={`${router.pathname == "/locations" ? "active" : ""}`}>Locations</a>
          </Link>
          <Link href="/plan-a-visit">
            <a className={`${router.pathname == "/plan-a-visit" ? "active" : ""}`}>Plan A Visit</a>
          </Link>
          <Link href="/research">
            <a className={`${router.pathname == "/research" ? "active" : ""}`}>Research</a>
          </Link>
          <Link href="/maps-tools">
            <a className={`${router.pathname == "/maps-tools" ? "active" : ""}`}>Maps & Tools</a>
          </Link>
          <Link href="/survey">
            <a className={`${router.pathname == "/survey" ? "active" : ""}`}>Survey</a>
          </Link>
        </div>
      </nav>
    </>
  );
}

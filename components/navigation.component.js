import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Navigation() {
  const router = new useRouter();
  const [navToggle, setNavToggle] = useState(false);
  const openNav = () => {
    setNavToggle(true);
  };

  const closeNav = () => {
    setNavToggle(false);
  };

  return (
    <>
      <nav>
        <button className="block lg:hidden mb-4" onClick={() => openNav()}>
          Menu
        </button>
        <div
          className={`flex flex-col lg:flex-row mobile-nav ${
            navToggle ? "open" : ""
          }`}
        >
          <button
            onClick={closeNav}
            className="bg-white text-red hover:bg-blue hover:text-white absolute top-16 left-4 block lg:hidden"
          >
            Close
          </button>
          <Link href="/">
            <a className={`${router.pathname == "/" ? "active" : ""}`}>Home</a>
          </Link>
          <Link href="/about">
            <a className={`${router.pathname == "/about" ? "active" : ""}`}>
              About
            </a>
          </Link>
          <Link href="/locations">
            <a className={`${router.pathname == "/locations" ? "active" : ""}`}>
              Locations
            </a>
          </Link>
          <Link href="/research">
            <a className={`${router.pathname == "/research" ? "active" : ""}`}>
              Research
            </a>
          </Link>
          <Link href="/other-tools">
            <a
              className={`${router.pathname == "/other-tools" ? "active" : ""}`}
            >
              Other Tools
            </a>
          </Link>
          <Link href="/survey">
            <a className={`${router.pathname == "/survey" ? "active" : ""}`}>
              Survey
            </a>
          </Link>
        </div>
      </nav>
    </>
  );
}

import Link from "next/link";
import { useState } from "react";

const classes =
  "md:ml-8 text-lg font-bold mb-4 hover:text-ut-burntorange hover:underline focus:text-ut-burntorange focus:underline";

export default function Navigation() {
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
            <a className={classes}>Home</a>
          </Link>
          <Link href="/about">
            <a className={classes}>About</a>
          </Link>
          <Link href="/locations">
            <a className={classes}>Locations</a>
          </Link>
          <Link href="/plan-a-visit">
            <a className={classes}>Plan A Visit</a>
          </Link>
          <Link href="/research">
            <a className={classes}>Research</a>
          </Link>
          <Link href="/maps-tools">
            <a className={classes}>Maps & Tools</a>
          </Link>
          <Link href="/survey">
            <a className={classes}>Survey</a>
          </Link>
        </div>
      </nav>
    </>
  );
}

import Link from "next/link";
import { CMS_NAME } from "../lib/constants";
import Navigation from "./navigation.component";
import { useState, useEffect } from "react";

export default function Header() {
  const [fixedNav, setFixedNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    setFixedNav(window.pageYOffset > 140);
  };

  return (
    <section className="bg-gradient-to-r py-8 mb-16">
      <div
        className={`${
          fixedNav ? "w-full fixed-nav bg-white" : ""
        }`}
      >
        <div className="container mx-auto flex flex-col z-30 xl:flex-row justify-between xl:items-center px-5">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-br from-green via-green to-white text-6xl mb-4 md:text-7xl font-extrabold tracking-tighter leading-tight md:pr-8">
            <Link href="/">
              <a className="hover:underline">{CMS_NAME}</a>
            </Link>
          </h1>
          <Navigation />
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

const classes =
  "ml-8 text-lg font-bold hover:text-ut-burntorange hover:underline focus:text-ut-burntorange focus:underline";

export default function Navigation() {

  return (
    <>
      <nav className="flex">
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
      </nav>
    </>
  );
}

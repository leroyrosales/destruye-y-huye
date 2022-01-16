import React from 'react'
import Link from 'next/link'

const classes = "ml-8 text-lg font-bold hover:text-ut-burntorange hover:underline focus:text-ut-burntorange focus:underline"

export default function Navigation() {
    return (
        <>
            <ul className="flex">
                <li><Link href="/"><a className={classes}>Home</a></Link></li>
                <li><Link href="/about"><a className={classes}>About</a></Link></li>
            </ul>
        </>
    )
}

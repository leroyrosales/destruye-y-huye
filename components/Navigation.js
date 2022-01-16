import React from 'react'
import Link from 'next/link'

export default function Navigation() {
    return (
        <>
            <ul className="flex">
                <li className="mr-8 text-lg font-bold hover:text-ut-burntorange hover:underline focus:text-ut-burntorange focus:underline"><Link href="/"><a>Home</a></Link></li>
                <li className="text-lg font-bold hover:text-ut-burntorange hover:underline focus:text-ut-burntorange focus:underline"><Link href="/about"><a>About</a></Link></li>
            </ul>
        </>
    )
}

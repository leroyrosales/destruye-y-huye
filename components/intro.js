import { CMS_NAME } from '../lib/constants'

export default function Intro() {
  return (
    <>
      <h4 className="text-center md:text-right text-lg mb-5">A statically generated blog example using{' '}<a
        href="https://nextjs.org/"
        className="underline hover:text-ut-burntorange duration-200 transition-colors">Next.js</a>, <a
        href="https://tailwindcss.com/"
        className="underline hover:text-ut-burntorange duration-200 transition-colors">TailwindCSS</a>, and Markdown.</h4>
    </>
  )
}

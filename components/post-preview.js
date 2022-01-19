
import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  excerpt,
  slug,
}) {
  return (
    <div className="relative">
      <div className="projects--content-overlay"></div>
      <Link as={`/locations/${slug}`} href="/locations/[slug]">
      <a className="doc_link">
      <div className="">
        <CoverImage
          slug={slug}
          title={title}
          src={coverImage}
          height={400}
          width={600}
        />
      </div>
      <div className="projects--content-details absolute top-0 bottom-0 transition-opacity opacity-0 hover:opacity-100 p-6 span">
      <h3 className="text-white text-2xl md:text-3xl mb-3">

          {title}

      </h3>
      <p className="hidden md:block text-lg leading-relaxed mb-4">{excerpt}</p>
      </div>
      </a>
      </Link>
    </div>
  )
}

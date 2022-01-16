
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
      <div class="projects--content-overlay"></div>
      <div className="">
        <CoverImage
          slug={slug}
          title={title}
          src={coverImage}
          height={400}
          width={600}
        />
      </div>
      <div class="projects--content-details absolute top-0 transition-opacity opacity-0 hover:opacity-100">
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/locations/${slug}`} href="/locations/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      </div>
    </div>
  )
}

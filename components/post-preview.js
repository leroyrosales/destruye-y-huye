import CoverImage from "./cover-image.component";
import Link from "next/link";

export default function PostPreview({ title, coverImage, slug }) {
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
          <div className="projects--content-details p-2 lg:p-8 span">
            <h3 className="text-white text-2xl md:text-3xl mb-3">{title}</h3>
          </div>
        </a>
      </Link>
    </div>
  );
}

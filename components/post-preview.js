import CoverImage from "./cover-image.component";
import Link from "next/link";

export default function PostPreview({ title, coverImage, slug }) {
  return (
    <>
      <figure
        className="location"
        style={{
          backgroundImage: `url(${coverImage})`,
        }}
      >
        <div>
          <h3 className="block h-full">
            <Link as={`/locations/${slug}`} href="/locations/[slug]">
              <a className="h-full">{title}</a>
            </Link>
          </h3>
        </div>
      </figure>
    </>
  );
}

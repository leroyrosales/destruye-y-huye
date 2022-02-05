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
              <a className="text-white no-underline h-full">{title}</a>
            </Link>
          </h3>
        </div>
      </figure>
    </>
  );
}

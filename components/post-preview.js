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
          <h3 className="block h-full hover:cursor-pointer">
            <Link as={`/locations/${slug}`} href="/locations/[slug]">
              <a className="block text-white no-underline h-full hover:cursor-pointer">{title}</a>
            </Link>
          </h3>
        </div>
      </figure>
    </>
  );
}

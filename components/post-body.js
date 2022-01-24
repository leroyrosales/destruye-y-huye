import Container from "./container";
import CoverImage from './cover-image.component'

export default function PostBody({ title, coverImage, content }) {

  return (
    <>
      <Container>
        <section className="grid grid-cols-1 md:gap-8 md:grid-cols-2">
          <div>
            <CoverImage
              title={title}
              src={coverImage}
              height={600}
              width={900}
            />
          </div>
          <article className="mb-8 md:mb-16 sm:mx-0">
            <div
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </article>
        </section>
      </Container>
    </>
  );
}

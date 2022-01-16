import CoverImage from "../components/cover-image";
import PostTitle from "../components/post-title";
import Address from "./address.component";
import Container from "./container";

export default function PostHeader({
  title,
  coverImage,
  address,
  date,
  author,
}) {
  return (
    <>
      <Container>
        <section className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <PostTitle title={title}/>
            <Address address={address} />
          </div>
          <div className="mb-8 md:mb-16 sm:mx-0">
            <CoverImage
              title={title}
              src={coverImage}
              height={600}
              width={900}
              priority
            />
          </div>
        </section>
      </Container>
    </>
  );
}

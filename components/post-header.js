import PostTitle from "../components/post-title";
import Address from "./address.component";
import Container from "./container";
import MapBox from "./MapBox.component";

export default function PostHeader({
  title,
  address,
  coords,
}) {
  const [lat, lng] = coords.split(",");

  const location = { lng, lat };
  return (
    <>
      <Container>
        <section className="grid grid-cols-1 xl:grid-cols-2">
          <div>
            <PostTitle title={title}/>
            <Address address={address} />
          </div>
          <div className="mb-8 md:mb-16 sm:mx-0">
            <MapBox coordinates={location} title={title} />
          </div>
        </section>
      </Container>
    </>
  );
}

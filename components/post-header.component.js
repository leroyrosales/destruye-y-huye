import PostTitle from "../components/post-title.component";
import Address from "./address.component";
import dynamic from 'next/dynamic'
const MapBox = dynamic(
  () => import('./MapBox.component'),
  { loading: () => <p>Loading...</p> }
)

export default function PostHeader({ title, address, coords }) {

  return (
    <>
      <section className="grid grid-cols-1 xl:grid-cols-2">
        <div>
          <PostTitle title={title} />
          <Address address={address} />
        </div>
        <div className="mb-8 md:mb-16 sm:mx-0">
          <MapBox coordinates={[coords.lat, coords.lng]} title={title} />
        </div>
      </section>
    </>
  );
}

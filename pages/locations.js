import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import PostTitle from "../components/post-title.component";
import MoreLocations from "../components/more-locations.component";
import { getAllPosts } from "../lib/api";

import dynamic from 'next/dynamic'
const AllLocations = dynamic(
  () => import('../components/all-locations.component'),
  { loading: () => <p>Loading...</p> }
)


export default function Locations({ allPosts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Locations | {CMS_NAME}</title>
        </Head>
        <Container>
          <section className="grid grid-cols-1 xl:grid-cols-2" id="content">
            <PostTitle title="Locations" />
            <div>
              <p className="text-lg mb-8">
                East: Sun - Rise AR Intervention blurs notions of art in public
                places by virtually layering archival photographic material over
                public places in East Austin using Augmented Reality (AR)
                technology. The images' main protagonists, BIPOC (Black,
                Indigenous, and People of Color), are documented celebrating
                everyday life–playing sports, having a parade, demonstrating,
                standing outside of a school or just having a walk in the
                neighborhood. The physical markers–a street corner, a public
                swimming pool, a baseball field, or an iconic moon tower light,
                while trace in a virtual and a physical tour-like experiences
                that relate to history, origin, and labor.
              </p>
              <p className="text-lg mb-8">Plan your route to the East: Sun - Rise AR Intervention
                locations using maps and information on each location page
                guide. Where would you begin and extend your tour along the
                East: Sun - Rise ARI?</p>
            </div>
          </section>
        </Container>
        <Container>
          <section className="mx-auto w-full md:w-5/6">
            <AllLocations allLocations={allPosts}/>
          </section>
        </Container>
        <MoreLocations posts={allPosts} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "address",
    "slug",
    "author",
    "coverImage",
    "coords",
  ]);

  return {
    props: { allPosts },
  };
}

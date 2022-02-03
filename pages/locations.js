import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import PostTitle from "../components/post-title.component";
import MoreLocations from "../components/more-locations";
import { getAllPosts } from "../lib/api";

export default function Locations({ allPosts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Locations | {CMS_NAME}</title>
        </Head>
        <Container>
          <section className="grid grid-cols-1 xl:grid-cols-2">
            <PostTitle title="Locations" />
            <div>
              <p className="text-lg mb-8">
              Plan your route to the East: Sun - Rise AR Intervention locations using maps and information on each location page guide. Where would you begin and extend your tour along the East: Sun - Rise ARI?
              </p>
            </div>
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
  ]);

  return {
    props: { allPosts },
  };
}

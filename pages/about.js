import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import PostTitle from "../components/post-title";

export default function about() {
  return (
    <>
      <Layout>
        <Head>
          <title>About | {CMS_NAME}</title>
        </Head>
        <Container>
          <section className="grid grid-cols-1 xl:grid-cols-2">
            <PostTitle title="About" />
            <div>
              - About Me, my links (pending) - Background, map of east Austin
              (pending)
            </div>
          </section>
        </Container>
      </Layout>
    </>
  );
}

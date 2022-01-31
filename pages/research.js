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
          <title>Research | {CMS_NAME}</title>
        </Head>
        <Container>
          <section className="grid grid-cols-1 xl:grid-cols-2">
            <PostTitle title="Research" />
            <div>
              - Austin’s history
              http://www.austinlibrary.com/ahc/begin/default.htm
              https://austinrev.org/east-austin-history/
              http://www.austinlibrary.com/ahc/desegregation/index.cfm?action=year&yr=1953
              https://www.vice.com/en/article/nnqdk7/austin-was-built-to-be-segregated
              https://projects.statesman.com/news/economic-mobility/
              https://medium.com/the-healthy-city/keep-austin-divided-a-foundation-of-segregation-af40e5b35c3f
              https://www.centralaustincdc.org/diversity/diversity.htm
              https://www.preservationaustin.org/news?offset=1614186000898
              https://www.kut.org/austin/2017-01-19/staring-down-development-neighbors-seek-historical-recognition-for-emancipation-park
              https://reclaimingmemoriestx.blog/ritual-recuerdo-resistencia-online-video-art-exhibit/
              https://ahc.access.preservica.com/index.php/SO_6cd456b4-9406-4815-9975-b2931f9847c3/
            </div>
          </section>
        </Container>
      </Layout>
    </>
  );
}

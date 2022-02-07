import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import PostTitle from "../components/post-title.component";

export default function about() {
  return (
    <>
      <Layout>
        <Head>
          <title>Research | {CMS_NAME}</title>
        </Head>
        <Container>
          <section className="grid grid-cols-1 xl:grid-cols-2" id="content">
            <PostTitle title="Research" />
            <div>
              <h3>Austin's history</h3>
              <ul>
                <li>
                  <a
                    href="http://www.austinlibrary.com/ahc/begin/default.htm"
                    target="_blank"
                  >
                    http://www.austinlibrary.com/ahc/begin/default.htm
                  </a>
                </li>
                <li>
                  <a
                    href="https://austinrev.org/east-austin-history/"
                    target="_blank"
                  >
                    https://austinrev.org/east-austin-history/
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.austinlibrary.com/ahc/desegregation/index.cfm?action=year&yr=1953"
                    target="_blank"
                  >
                    http://www.austinlibrary.com/ahc/desegregation/index.cfm?action=year&yr=1953
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.vice.com/en/article/nnqdk7/austin-was-built-to-be-segregated"
                    target="_blank"
                  >
                    https://www.vice.com/en/article/nnqdk7/austin-was-built-to-be-segregated
                  </a>
                </li>
                <li>
                  <a
                    href="https://projects.statesman.com/news/economic-mobility/"
                    target="_blank"
                  >
                    https://projects.statesman.com/news/economic-mobility/
                  </a>
                </li>
                <li>
                  <a
                    href="https://medium.com/the-healthy-city/keep-austin-divided-a-foundation-of-segregation-af40e5b35c3f"
                    target="_blank"
                  >
                    https://medium.com/the-healthy-city/keep-austin-divided-a-foundation-of-segregation-af40e5b35c3f
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.centralaustincdc.org/diversity/diversity.htm"
                    target="_blank"
                  >
                    https://www.centralaustincdc.org/diversity/diversity.htm
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.preservationaustin.org/news?offset=1614186000898"
                    target="_blank"
                  >
                    https://www.preservationaustin.org/news?offset=1614186000898
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.kut.org/austin/2017-01-19/"
                    target="_blank"
                  >
                    https://www.kut.org/austin/2017-01-19/
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.kut.org/austin/2017-01-19/staring-down-development-neighbors-seek-historical-recognition-for-emancipation-park"
                    target="_blank"
                  >
                    https://www.kut.org/austin/2017-01-19/staring-down-development-neighbors-seek-historical-recognition-for-emancipation-park
                  </a>
                </li>
                <li>
                  <a
                    href="https://reclaimingmemoriestx.blog/ritual-recuerdo-resistencia-online-video-art-exhibit/"
                    target="_blank"
                  >
                    https://reclaimingmemoriestx.blog/ritual-recuerdo-resistencia-online-video-art-exhibit/
                  </a>
                </li>
                <li>
                  <a
                    href="https://ahc.access.preservica.com/index.php/SO_6cd456b4-9406-4815-9975-b2931f9847c3/"
                    target="_blank"
                  >
                    https://ahc.access.preservica.com/index.php/SO_6cd456b4-9406-4815-9975-b2931f9847c3/
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </Container>
      </Layout>
    </>
  );
}

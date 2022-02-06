import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import PostTitle from "../components/post-title.component";

export default function MapsAndTools() {
  return (
    <>
      <Layout>
        <Head>
          <title>Maps, software &amp; online tools | {CMS_NAME}</title>
        </Head>
        <Container>
          <section className="grid grid-cols-1 xl:grid-cols-2">
            <PostTitle title="Maps, software &amp; online tools" />
            <div>
              <ul>
                <li className="mb-8">
                  <h3 className="text-black text-xl mb-0">
                    City of Austin Property Profile web map
                  </h3>
                  <a
                    href="https://www.austintexas.gov/GIS/PropertyProfile/"
                    target="_blank"
                  >
                    https://www.austintexas.gov/GIS/PropertyProfile/
                  </a>
                </li>
                <li className="mb-8">
                  <h3 className="text-black text-xl mb-0">Moon Tower Locations map</h3>
                  <a
                    href="https://www.google.com/maps/d/viewer?mid=1ggPjV58m4g1NAKatjuqvERHVMW0&usp=sharing"
                    target="_blank"
                  >
                    {" "}
                    https://www.google.com/maps/d/viewer?mid=1ggPjV58m4g1NAKatjuqvERHVMW0&usp=sharing
                  </a>
                </li>
                <li className="mb-8">
                  <h3 className="text-black text-xl mb-0">
                    Historical, and primary source materials from or about
                    Texas.
                  </h3>
                  <a href="https://texashistory.unt.edu/" target="_blank">
                    https://texashistory.unt.edu/
                  </a>
                </li>
                <li className="mb-8">
                  <h3 className="text-black text-xl mb-0">
                    USGS Historical Topographic Map Explorer
                  </h3>
                  <a
                    href="https://livingatlas.arcgis.com/topoexplorer/index.html"
                    target="_blank"
                  >
                    https://livingatlas.arcgis.com/topoexplorer/index.html
                  </a>
                </li>
                <li className="mb-8">
                  <h3 className="text-black text-xl mb-0">
                    Search primary source materials held in archives, libraries,
                    museums and historical societies
                  </h3>
                  <a
                    href="https://researchworks.oclc.org/archivegrid/"
                    target="_blank"
                  >
                    https://researchworks.oclc.org/archivegrid/
                  </a>
                </li>
                <li className="mb-8">
                  <h3 className="text-black text-xl mb-0">
                    Indigenous Peoples Territories Map
                  </h3>
                  <a href="https://native-land.ca/" target="_blank">
                    https://native-land.ca/
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

import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import PostTitle from "../components/post-title";

export default function MapsAndTools() {
  return (
    <>
      <Layout>
        <Head>
          <title>Maps, software & online tools | {CMS_NAME}</title>
        </Head>
        <Container>
          <section className="grid grid-cols-1 xl:grid-cols-2">
            <PostTitle title="Maps, software & online tools" />
            <div>
              City of Austin Property Profile web map
              https://www.austintexas.gov/GIS/PropertyProfile/ Moon Tower
              Locations map
              https://www.google.com/maps/d/viewer?mid=1ggPjV58m4g1NAKatjuqvERHVMW0&usp=sharing
              Historical, and primary source materials from or about Texas.
              https://texashistory.unt.edu/ USGS Historical Topographic Map
              Explorer https://livingatlas.arcgis.com/topoexplorer/index.html
              Search primary source materials held in archives, libraries,
              museums and historical societies
              https://researchworks.oclc.org/archivegrid/ Indigenous Peoples
              Territories Map https://native-land.ca/
            </div>
          </section>
        </Container>
      </Layout>
    </>
  );
}

import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import PostTitle from "../components/post-title.component";
import Image from "next/image";

import cad_logo from "../public/assets/logos/LOGO_CAD_color.png";
import moha_logo from "../public/assets/logos/MoHA_logo-vertical-blue-HIGH_RES.png";

export default function about() {
  return (
    <>
      <Layout>
        <Head>
          <title>About | {CMS_NAME}</title>
        </Head>
        <Container>
          <section>
            <div className="xl:max-w-prose mx-auto">
              <p className="text-center">
                <PostTitle title="About" />
                <Image
                  src={cad_logo}
                  alt="The Museum of Human Achievement"
                  placeholder="blur"
                  quality={100}
                />
                <br />
                This project is supported in part by the Cultural Arts Division
                of the City of Austin Economic Development Department.
              </p>
              <p className="text-center">
                <Image
                  src={moha_logo}
                  alt="The Museum of Human Achievement"
                  placeholder="blur"
                  width={200}
                  height={224}
                  quality={100}
                />
                <br />
                Sponsorship by the Museum of Human Achievement
              </p>
              <h3>About Adrian Aguilera</h3>
              <p>
                A native of Monterrey, México (b. 1981), Adrian Aguilera
                currently lives and works in Austin, Texas. Working with a
                variety of mediums that include sculpture, text-based work,
                mixed and multi-media, video, and installations, Aguilera
                researches the intrinsic essence that resides in objects. With
                an interest in scientific observation, cultural history, and
                social issues, the artist’s work addresses our relationship with
                the physical and cultural spaces in which we (co)exist. He holds
                a Bachelor of Visual Arts (2004) from Universidad Autónoma de
                Nuevo León, México. He has exhibited both nationally and
                internationally at The Contemporary Austin, Artepace San
                Antonio, The Philbrook Museum of Art in Tulsa, Oklahoma; Fusebox
                Festival, Blanton Museum of Art, and George Washington Carver
                Museum in Austin; as well as the Instituto Cultural de México in
                Paris, France. Aguilera is also an active member of the
                Austin-based contemporary arts collaborative platform Black
                Mountain Project.
              </p>
              <p>
                <em>
                  <strong>
                    I hope you enjoy this temporary public art installation.
                  </strong>
                </em>
              </p>

              <h3>Acknowledgment</h3>
              <p>
                Special thank you to the Austin History Center staff who
                provided time, resources and expertise to my research at Austin
                History Center Reading Room.
              </p>
            </div>
          </section>
        </Container>
      </Layout>
    </>
  );
}

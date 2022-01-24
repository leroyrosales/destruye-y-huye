import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import PostTitle from '../components/post-title'
import ContactForm from '../components/contact-form.component'

export default function about() {
    return (
        <>
        <Layout>
          <Head>
            <title>Survey | {CMS_NAME}</title>
          </Head>
          <Container>
            <PostTitle title="Survey"/>

            <div className="max-w-prose mx-auto">
              <ContactForm/>
            </div>
          </Container>
        </Layout>
      </>
    )
}

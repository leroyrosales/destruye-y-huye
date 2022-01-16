import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import PostTitle from '../components/post-title'

export default function about() {
    return (
        <>
        <Layout>
          <Head>
            <title>About {CMS_NAME} | UT Austin</title>
          </Head>
          <Container>
            <PostTitle>About</PostTitle>

            <div className="max-w-prose mx-auto">
            <p className="text-lg mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat ac felis donec et odio pellentesque diam. Quis enim lobortis scelerisque fermentum dui faucibus. Nunc eget lorem dolor sed viverra ipsum. Rhoncus est pellentesque elit ullamcorper dignissim. Integer feugiat scelerisque varius morbi enim nunc faucibus a. Tellus orci ac auctor augue mauris augue neque gravida in. Elementum pulvinar etiam non quam lacus suspendisse faucibus. In hendrerit gravida rutrum quisque non. Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque. Felis eget velit aliquet sagittis id consectetur. Metus dictum at tempor commodo ullamcorper a. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Euismod in pellentesque massa placerat duis ultricies lacus sed turpis. Fusce ut placerat orci nulla pellentesque dignissim enim sit. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Mauris a diam maecenas sed enim ut sem viverra aliquet. Nunc sed augue lacus viverra vitae congue eu consequat. Ac feugiat sed lectus vestibulum mattis ullamcorper velit. Tortor consequat id porta nibh venenatis cras.</p>

            <p className="mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat ac felis donec et odio pellentesque diam. Quis enim lobortis scelerisque fermentum dui faucibus. Nunc eget lorem dolor sed viverra ipsum. Rhoncus est pellentesque elit ullamcorper dignissim. Integer feugiat scelerisque varius morbi enim nunc faucibus a. Tellus orci ac auctor augue mauris augue neque gravida in. Elementum pulvinar etiam non quam lacus suspendisse faucibus. In hendrerit gravida rutrum quisque non. Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque. Felis eget velit aliquet sagittis id consectetur. Metus dictum at tempor commodo ullamcorper a. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Euismod in pellentesque massa placerat duis ultricies lacus sed turpis. Fusce ut placerat orci nulla pellentesque dignissim enim sit. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Mauris a diam maecenas sed enim ut sem viverra aliquet. Nunc sed augue lacus viverra vitae congue eu consequat. Ac feugiat sed lectus vestibulum mattis ullamcorper velit. Tortor consequat id porta nibh venenatis cras.</p>

            <p className="mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat ac felis donec et odio pellentesque diam. Quis enim lobortis scelerisque fermentum dui faucibus. Nunc eget lorem dolor sed viverra ipsum. Rhoncus est pellentesque elit ullamcorper dignissim. Integer feugiat scelerisque varius morbi enim nunc faucibus a. Tellus orci ac auctor augue mauris augue neque gravida in. Elementum pulvinar etiam non quam lacus suspendisse faucibus. In hendrerit gravida rutrum quisque non. Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque. Felis eget velit aliquet sagittis id consectetur. Metus dictum at tempor commodo ullamcorper a. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Euismod in pellentesque massa placerat duis ultricies lacus sed turpis. Fusce ut placerat orci nulla pellentesque dignissim enim sit. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Mauris a diam maecenas sed enim ut sem viverra aliquet. Nunc sed augue lacus viverra vitae congue eu consequat. Ac feugiat sed lectus vestibulum mattis ullamcorper velit. Tortor consequat id porta nibh venenatis cras.</p>
            </div>
          </Container>
        </Layout>
      </>
    )
}

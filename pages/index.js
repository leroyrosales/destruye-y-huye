import Container from '../components/container'
import MoreLocations from '../components/more-locations'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro.component'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'

export default function Index({ allPosts }) {
  // const heroPost = allPosts[0]
  // const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title>{CMS_NAME}</title>
        </Head>
        <Container>
          <Intro/>
          </Container>
          <Container>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        Locations
      </h2>
      </Container>
          <MoreLocations posts={allPosts} />
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'address',
    'slug',
    'author',
    'coverImage',
  ])

  return {
    props: { allPosts },
  }
}

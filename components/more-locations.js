import Container from './container'
import PostPreview from './post-preview'

export default function Morelocations({ posts }) {
  return (
    <section>
      <Container>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        Locations
      </h2>
      </Container>
      <div className="grid grid-cols-2 md:grid-cols-3 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}

import { useState } from "react"
import PostPreview from './post-preview'

export default function Morelocations({ posts }) {
  const [ listPosts, updatePostsList ] = useState("");

  const showAvailablePosts = () => {
    const postJsx = [];
    {posts.map((post, i) => (
      postJsx.push(
        <PostPreview
          key={post.slug}
          title={post.title}
          coverImage={post.coverImage}
          slug={post.slug}
          excerpt={post.excerpt}
        />
      )
    ))}
    updatePostsList(postJsx)
  }
  if( !listPosts && posts.length ){
    showAvailablePosts();
  }

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mb-32">
        {listPosts}
      </div>
    </section>
  )
}

import PostCard from "../../components/PostCard"
import { getPosts } from "../../lib/data"


const BlogPage = async () => {

  const posts = await getPosts();

  return (
    <div className="flex flex-wrap gap-[20px]">

      {posts.map((post) => (

        <div className="w-[30%] mmd:w-[40%] msm:w-[80vw]">
          <PostCard post={post} />

        </div>

      ))}



    </div>
  )

}

export default BlogPage
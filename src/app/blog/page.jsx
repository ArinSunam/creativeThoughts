import PostCard from "../../components/PostCard"
import { getPosts } from "../../lib/data"

export const metadata = {
  title: " Blog page ",
  description: "Blog description",
};

const getData = async () => {
  const res = await fetch("https://creative-thoughts-ashy.vercel.app/api/blog", { next: { revalidate: 3000 } });

  if (!res.ok) {
    throw new Error("something went wrong");
  }
  return res.json();
};

const BlogPage = async () => {

  const posts = await getData();

  // const posts = await getPosts();

  return (
    <div className="flex flex-wrap gap-[20px] mt-[40px]">

      {posts.map((post) => (

        <div key={post.id} className="w-[30%] mmd:w-[40%] msm:w-[80vw]">
          <PostCard post={post} />

        </div>

      ))}



    </div>
  )

}

export default BlogPage
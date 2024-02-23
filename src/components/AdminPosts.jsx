import Image from "next/image"
import { getPosts } from "../lib/data"
import { deletePost } from "../lib/action"


const AdminPosts = async () => {
  const posts = await getPosts();

  return (
    <div>
      <h1 className='text-2xl font-bold text-start'>Posts</h1>
      {posts.map((post) => (
        <div key={post.id} className="my-[20px] mx-0 flex items-center justify-between ">
          <div className="flex  items-center gap-[20px] flex-1 ">
            <Image src={post.img || '/noAvatar.png'} alt="" width={50} height={50} />
            <span>{post.title}</span>
          </div>
          <form action={deletePost} className="flex-shrink-0  mr-[120px] mmd:mr-[250px] msm:mr-[100px]">
            <input type="hidden" name="id" value={post.id} />
            <button className="py-[5px] px-[10px] bg-red-800 text-white rounded-[5px] border-none cursor-pointer">Delete</button>
          </form>
        </div>

      ))}

    </div>
  )
}

export default AdminPosts

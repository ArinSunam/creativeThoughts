import PostCard from "../../components/PostCard"


const BlogPage = () => {

  return (
    <div className="flex flex-wrap gap-[20px]">

      <div className="w-[30%] mmd:w-[40%] msm:w-[80vw]">
        <PostCard />

      </div>
      <div className="w-[30%] mmd:w-[40%] msm:w-[80vw]">
        <PostCard />

      </div>
      <div className="w-[30%] mmd:w-[40%] msm:w-[80vw]">
        <PostCard />

      </div>
      <div className="w-[30%] mmd:w-[40%] msm:w-[80vw]">
        <PostCard />

      </div>


    </div>
  )

}

export default BlogPage
import Image from "next/image"
import Link from "next/link"

const PostCard = ({ post }) => {
  return (
    <div className="flex flex-col gap-[20px]">
      {/* Top */}

      <div className="flex">
        {post.img && <div className="w-[90%] h-[400px] relative object-cover ">
          {/* image */}
          <Image src={post.img} alt="" fill className="object-cover" />
        </div>}
        {/* date */}
        <span className="m-auto text-[12px] transform rotate-[270deg]">{post.createdAt.toString().slice(0, 10)}</span>
      </div>

      {/* Bottom */}
      <div>
        <h1 className="text-[24px] mb-[20px]">{post.title}</h1>
        <p className="mb-[20px] w-[90%] text-[#777] font-light text-ellipsis line-clamp-5 ">{post.desc}</p>
        <Link href={`/blog/${post.slug}`} className="underline">READ MORE</Link>
      </div>

    </div >
  )
}

export default PostCard

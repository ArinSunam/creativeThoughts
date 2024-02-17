import Image from "next/image"
import Link from "next/link"

const PostCard = () => {
  return (
    <div className="flex flex-col gap-[20px]">
      {/* Top */}

      <div className="flex">
        <div className="w-[90%] h-[400px] relative object-cover ">
          {/* image */}
          <Image src="/cat.jpg" alt="" fill className="object-cover" />
        </div>
        {/* date */}
        <span className="m-auto text-[12px] transform rotate-[270deg]">01.01.2024</span>
      </div>

      {/* Bottom */}
      <div>
        <h1 className="text-[24px] mb-[20px]">Titlte</h1>
        <p className="mb-[20px] w-[90%] text-[#777] font-light ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quaerat quidem harum quibusdam nesciunt quam numquam ea tempore laborum ipsam.</p>
        <Link href="/blog/post" className="underline">READ MORE</Link>
      </div>

    </div>
  )
}

export default PostCard

import { getUser } from "../lib/data"
import Image from "next/image";


const PostUser = async ({ userId }) => {

  const user = await getUser(userId);
  console.log(user)

  console.log('user:', user);
  return (
    <div className="flex items-center gap-[20px]">
      <Image src={user.img ? user.img : "/noavatar.png"} alt='' width={50} height={50} className='rounded-[50px]' />

      <div className='flex flex-col gap-[10px]'>
        <span className='text-[#777] font-bold'>Author</span>
        <span className='font-medium'>{user.username}</span>
      </div>


    </div>
  )
}

export default PostUser

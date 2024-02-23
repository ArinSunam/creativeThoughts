import Image from "next/image";
import { deleteUser } from "../lib/action";
import { getUsers } from "../lib/data"


const AdminUsers = async () => {
  const users = await getUsers();
  return (
    <div>
      <h1 className='text-2xl font-bold text-start'>Users</h1>
      {users.map((user) => (
        <div key={user.id} className="my-[20px] mx-0 flex items-center justify-between">
          <div className="flex  items-center gap-[20px]">
            <Image src={user.img || '/noAvatar.png'} alt="" width={50} height={50} />
            <span>{user.username}</span>
          </div>
          <form action={deleteUser} className=" mr-[120px] mmd:mr-[250px] msm:mr-[100px]">
            <input type="hidden" name="id" value={user.id} />
            <button className="py-[5px] px-[10px] bg-red-800 text-white rounded-[5px] border-none cursor-pointer">Delete</button>
          </form>
        </div>

      ))}

    </div>
  )
}

export default AdminUsers

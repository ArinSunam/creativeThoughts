import { auth } from "../../lib/auth"
import Links from "./links/Links"

const Navbar = async () => {
  const session = await auth();
  console.log("sesssion", session);

  return (
    <div className=" h-[100px] w-[92vw] mmd:w-[80vw] flex items-center justify-between">
      <div className="text-[30px] font-bold">Meow</div>
      <div>
        <Links session={session} />
      </div>
    </div>
  )

}

export default Navbar
import Links from "./links/Links"

const Navbar = () => {

  return (
    <div className=" h-[100px] w-[92vw] mmd:w-[80vw] flex items-center justify-between">
      <div className="text-[30px] font-bold">Meow</div>
      <div>
        <Links />
      </div>
    </div>
  )

}

export default Navbar
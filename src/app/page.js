import Image from "next/image"

const Home = () => {

  return (
    <div className="mt-[50px] grid grid-cols-2 gap-[100px] mmd:flex mmd:flex-col mmd:text-center mmd:items-start">
      {/* Character */}

      <div className="col-start-1 col-end-2 flex flex-col  gap-[40px]">
        <h1 className=" text-[55px] mmd:text-[40px] font-bold text-start   w-[30vw] mmd:w-[70vw] mmd:text-center">Creative Thoughts Agency.</h1>
        <p className="text-[15px] msm:text-center msm:w-[70vw]  mmd:w-[85vw]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nulla tenetur fuga quis architecto rem.</p>

        {/* Buttons */}
        <div className="msm:pl-[10px] flex gap-[20px] msm:justify-start 
        mmd:justify-center">
          <button className="py-[15px] min-w-[100px]  bg-blue-500 text-white text-[14px] border-none rounded-[5px] ">Learn More</button>
          <button className="p-[15px] min-w-[100px]  bg-white text-[#0d0c22] border-none rounded-[5px]">Contact</button>
        </div>

        {/* Brands image */}
        <div className="msm:flex msm:justify-start pr-[25px]">
          <Image src="/brands.png" alt="" height="500" width="50" className="h-[50px] w-[500px]" />
        </div>

      </div>



      {/* Hero image */}
      <div className="col-start-2 col-end-3 w-[500px]">
        <Image src="/hero.gif" alt="" width="500" height="300" className="  relative h-[400px] w-[500px] mmd:hidden" />
      </div>


    </div>
  )
}

export default Home
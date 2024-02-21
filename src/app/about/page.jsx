import Image from "next/image"

export const metadata = {
  title: " About page ",
  description: "About description",
};

const AboutPage = () => {

  return (
    <div className="grid grid-cols-2 gap-[220px] mt-[50px] mmd:flex mmd:flex-col mmd:text-center mmd:mr-[150px]">

      {/* Text container */}
      <div className="col-span-1 flex flex-col gap-[40px] ">
        <h2 className="text-blue-500 font-bold">About Agency</h2>
        <h1 className="text-[44px] mmd:text-[30px]  font-bold">We create digital ideas that are bigger, bolder, braver and better.</h1>
        <p className="text-[15px] font-light">We create digital ideas that are bigger, boder, braver and better. We believe in good ideas flexibiity and precission. Our Special Team best consulting & finance solution provider. Wide range of web and software development services.</p>

        {/* Numbers */}

        <div className="flex items-center justify-between mmd:flex-col mmd gap-[50px]">
          <div className=" flex flex-col gap-[3px]">
            <h1 className="text-blue-500 text-[24px] font-semibold">10 K+</h1>
            <p>Year of Experience</p>
          </div>
          <div className=" flex flex-col gap-[3px]">
            <h1 className="text-blue-500 text-[24px] font-semibold">234 K+</h1>
            <p>People reached</p>
          </div>
          <div className=" flex flex-col gap-[3px]">
            <h1 className="text-blue-500 text-[24px] font-semibold">5 K+</h1>
            <p>Services and plugins</p>
          </div>
        </div>
      </div>

      {/* image */}
      <div className="col-span-1">
        <Image src="/about.png" alt="" width="300" height="100" className="w-[400px] h-[450px] mmd:hidden" />
      </div>



    </div>
  )

}

export default AboutPage
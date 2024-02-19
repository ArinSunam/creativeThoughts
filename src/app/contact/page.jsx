import Image from "next/image"


export const metadata = {
  title: " Contact page",
  description: "Contact Description",
};

const ContactPage = () => {

  return (
    <div className="grid grid-cols-2 object-contain mt-[50px] mmd:flex mmd:flex-col">
      {/* image container */}
      <div className="col-span-1 relative mmd:hidden">
        <Image src="/contact.png" alt="" width="500" height="500" />

      </div>


      {/* Form container */}
      <div >
        <form className="col-span-1 flex flex-col gap-[20px]" action="">
          <input className="p-[15px] w-[40vw] mmd:w-[70vw] rounded-[5px] border-none outline-none bg-[#2b2d42]" type="text" placeholder="Name and Surname" />
          <input className="p-[15px] w-[40vw] mmd:w-[70vw]  rounded-[5px] border-none outline-none bg-[#2b2d42]" type="text" placeholder="Email Address" />
          <input className="p-[15px] w-[40vw] mmd:w-[70vw]  rounded-[5px] border-none outline-none bg-[#2b2d42]" type="text" placeholder="Phone Number (Optional)" />
          <textarea className="p-[15px] w-[40vw] mmd:w-[70vw]  rounded-[5px] border-none outline-none bg-[#2b2d42]" name="" id="" cols="30" rows="10"
            placeholder="Message"></textarea>
          <button className="p-[20px] w-[40vw] mmd:w-[70vw]  bg-blue-500 text-white font-bold rounded-[5px]">Send</button>
        </form>

      </div>
    </div>
  )

}

export default ContactPage
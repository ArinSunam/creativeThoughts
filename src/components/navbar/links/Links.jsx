"use client";
import { useState } from "react";
import NavLink from "./navLink";
import Image from "next/image";
const Links = () => {


  // useState
  const [open, setOpen] = useState(false);

  // links
  const links = [
    {
      title: "Homepage",
      path: "/"
    },
    {
      title: "About",
      path: "/about"
    },
    {
      title: "Contact",
      path: "/contact"
    },
    {
      title: "Blog",
      path: "/blog"
    },

  ];

  // Admin
  const session = true
  const isAdmin = true

  return (

    <div>
      <div className=" flex items-center gap-[35px] mmd:hidden  ">
        {links.map((link => (
          <NavLink item={link} key={link.title} />
        )))}
        {
          session ? (
            <>
              {
                isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />

              }
              <button className="p-[10px] bg-white text-[#0d0c22] cursor-pointer font-bold">Logout</button>
            </>

          ) : (
            <NavLink item={{ title: "login", path: "/Login" }} />
          )
        }
      </div>

      <Image src="/menu.png" onClick={() => setOpen((prev) => !prev)} alt="" width={30} height={30} className="hidden mmd:block cursor-pointer" />
      {open && (
        <div className="w-[50vh] absolute top-[100px] right-0  flex flex-col items-center justify-center gap-[10px] " style={{ height: 'calc(100vh - 100px)' }}>
          {links.map((link) => (
            <NavLink item={link} key={link.title}></NavLink>
          ))}
        </div>
      )}
    </div>

  )

}

export default Links
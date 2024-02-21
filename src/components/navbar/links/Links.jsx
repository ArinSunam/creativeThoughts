"use client";
import { useState } from "react";
import NavLink from "./navLink";
import Image from "next/image";
import { handleLogout } from "../../../lib/action";
import { auth } from "../../../lib/auth";
const Links = ({ session }) => {


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
                session.user?.isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />

              }

              <form action={handleLogout}>
                <button className="p-[10px] bg-white text-[#0d0c22] cursor-pointer font-bold">Logout</button></form>
            </>

          ) : (
            <NavLink item={{ title: "login", path: "/login" }} />
          )
        }
      </div>

      <Image src="/menu.png" onClick={() => setOpen((prev) => !prev)} alt="" width={30} height={30} className="hidden mmd:block cursor-pointer" />
      {open && (
        <div className="w-[50vh] msm:w-[40vw] absolute top-[100px] right-0    bg-[#0d0c22] space-y-[20px] text-center text-base msm:h-[30px] hidden mmd:block z-50" style={{ height: 'calc(100vh - 100px)' }}>
          {links.map((link) => (
            <NavLink item={link} key={link.title}></NavLink>
          ))}
          {
            session ? (
              <>
                {
                  session.user?.isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />

                }

                <form action={handleLogout}>
                  <button className="p-[10px] bg-white text-[#0d0c22] cursor-pointer font-bold">Logout</button></form>
              </>

            ) : (
              <NavLink item={{ title: "login", path: "/login" }} />
            )
          }
        </div>
      )}
    </div>

  )

}

export default Links
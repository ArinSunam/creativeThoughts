"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"


const NavLink = ({ item }) => {
  const pathName = usePathname();
  return (
    <div >
      <Link className={`px-[12px] py-[8px] min-w-full rounded-[20px] font-medium text-center ${pathName === item.path && "bg-white text-[#0d0c22]"} `} href={item.path}>
        {item.title}</Link>

    </div >
  )
}

export default NavLink

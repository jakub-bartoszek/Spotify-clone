"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { Box } from "../box";
import { SidebarItem } from "./sidebar-item";
import { Library } from "../library";

export const Sidebar = () => {
 const pathname = usePathname();

 const routes = useMemo(
  () => [
   {
    icon: HiHome,
    label: "Home",
    active: pathname !== "/search",
    href: "/"
   },
   {
    icon: BiSearch,
    label: "Search",
    active: pathname === "/search",
    href: "/search"
   }
  ],
  []
 );

 return (
  <div className="hidden md:flex flex-col gap-y-2 h-full w-[300px]">
   <Box>
    <div className="flex flex-col gap-y-4 px-5 py-4">
     {routes.map((item) => (
      <SidebarItem
       key={item.label}
       {...item}
      />
     ))}
    </div>
   </Box>
   <Box className="oferflow-y-auto h-full">
    <Library />
   </Box>
  </div>
 );
};

"use client";

import { Button } from "@/components/atoms/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/molecules/theme-toggle";
import AppSidebarMobile from "@/components/organism/sidebar-mobile";
import { NAVIGATION } from "@/constants";
import { NavLink } from "@/components/atoms/nav-link";

export default function AppSideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex items-center justify-end border-b border-r bg-background px-3 py-3 md:h-full md:w-full md:max-w-[60px] md:flex-col md:justify-center md:overflow-y-auto md:border-b-0 md:px-0 md:py-10">
        <div className="flex items-start md:hidden">
          <ThemeToggle />
          <Button size={"icon"} variant={"ghost"} onClick={toggleNavbar}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Desktop Navbar */}
        {NAVIGATION.map((item, i) => (
          <NavLink key={i} href={item.path} item={item}>
            <item.icon className="h-5 w-5" />
          </NavLink>
        ))}
      </nav>

      <AppSidebarMobile isOpen={isOpen} toggleNavbar={toggleNavbar} />
    </>
  );
}

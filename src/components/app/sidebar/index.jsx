"use client";

import { Button } from "@/components/atoms/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import AppSidebarDesktop from "./sidebar-desktop";
import { ThemeToggle } from "@/components/molecules/theme-toggle";
import AppSidebarMobile from "./sidebar-mobile";

export default function AppSideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex items-center justify-center border-b border-r bg-background px-3 py-3 md:h-full md:w-full md:max-w-[60px] md:flex-col md:overflow-y-auto md:border-b-0 md:px-0 md:py-10">
        <div className="flex items-start md:hidden">
          <ThemeToggle />
          <Button size={"icon"} variant={"ghost"} onClick={toggleNavbar}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        <AppSidebarDesktop />
      </nav>

      <AppSidebarMobile isOpen={isOpen} toggleNavbar={toggleNavbar} />
    </>
  );
}

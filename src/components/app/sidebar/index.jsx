"use client";

import Link from "next/link";
import { Button } from "@/components/atoms/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import AppSidebarDesktop from "./sidebar-desktop";

export default function AppSideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex h-full items-center justify-end border-b border-r bg-background px-5 py-3 md:h-full md:w-full md:max-w-[65px] md:flex-col md:overflow-y-auto md:border-b-0 md:px-0 md:py-10">
        <div className="flex items-center md:hidden">
          <Button size={"icon"} variant={"ghost"} onClick={toggleNavbar}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        <AppSidebarDesktop />
      </nav>
    </>
  );
}

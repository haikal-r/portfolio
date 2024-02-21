"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { NAVIGATION } from "@/constant";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/atoms/tooltip"
import Link from "next/link";

export default function AppSidebarDesktop() {
  const pathname = usePathname();
  const activeBackRef = useRef(null);
  const navItemRef = useRef(null);

  const handleTransition = (index) => {
    const activeBack = activeBackRef.current
    const navItem = navItemRef.current

    if (activeBack && navItem) {
      activeBack.style.transform = `translateY(${
        index * navItem.offsetHeight
      }px)`;
    }
  }

  useEffect(() => {
    if (pathname === "/") { 
      handleTransition(0);
      return
    }

    const index = NAVIGATION.findIndex((item) => 
      item.path.startsWith(`/${pathname.split("/")[1]}`)
    )

    handleTransition(index)
  },[pathname])

  return (
    <div className="relative hidden w-full flex-col md:flex">
      <div
        ref={activeBackRef}
        className="absolute top-0 z-10 h-14 w-full translate-y-0 border-y transition-transform duration-300 ease-in-out"
      />

      {NAVIGATION.map((item, index) => (
        <div
          key={index}
          className="z-20 grid h-14 place-items-center"
          ref={navItemRef}
        >
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href={item.path}>
                  <span className="sr-only">{item.title}</span>
                  <item.icon className="w-5 h-5" />
                </Link>
              </TooltipTrigger>
              <TooltipContent className="text-xs">
                <p>{item.content}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      ))}
    </div>
  );
}

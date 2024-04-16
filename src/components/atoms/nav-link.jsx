"use client";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/atoms/tooltip";

export const NavLink = ({ href, children, item }) => {
  const segment = useSelectedLayoutSegment();
  const isActive =
    segment === href.slice(1) || (segment === null && href === "/");

  return (
    <li className="group relative hidden w-full flex-col md:flex">
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href={href}
              className={cn(
                "block h-full w-full px-5 py-4 transition-colors",
                "group-hover:text-foreground",
                isActive ? "text-foreground" : "text-muted-foreground",
              )}
            >
              {children}
            </Link>
          </TooltipTrigger>
          <TooltipContent className="text-xs">
            <p>{item.content}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <div
        className={cn(
          "absolute left-0 h-full bg-muted-foreground opacity-0 transition-all duration-500",
          "group-hover:w-0.5 group-hover:opacity-100",
          isActive ? "w-0.5 opacity-100" : "w-0",
        )}
      />
    </li>
  );
};

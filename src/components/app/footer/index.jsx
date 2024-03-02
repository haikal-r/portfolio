import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/atoms/tooltip";
import { siteConfig } from "@/constants"; 
import { wakatimeWeeklyCodingActivity } from "@/lib/wakatime";
import {
  AlertCircle,
  AlertTriangle,
  CheckCheck,
  Clock,
  Github,
  RefreshCcw,
  Split,
  XCircle,
} from "lucide-react";
import Link from "next/link";

export default async function AppFooter() {
  const { data } = await wakatimeWeeklyCodingActivity();
  const todayData = data[data.length - 1];

  return (
    <footer className="absolute bottom-0 left-0 z-50 flex w-full items-center justify-between border-t bg-background text-xs">
      <div className="flex items-center divide-x border-r">
        <Link
          target="_blank"
          href={siteConfig.repository}
          className="flex items-center gap-2 bg-blue-900 px-2 py-1 text-white transition-colors"
        >
          <Split size={13} />
          <p>main</p>
        </Link>
        <button
          aria-label="refetch"
          className="group hidden items-center gap-x-2 px-2 py-1 text-muted-foreground transition-colors hover:text-foreground md:flex"
        >
          <RefreshCcw
            size={13}
            className="text-xl transition-transform group-active:rotate-180"
          />
        </button>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="hidden select-none items-center gap-x-1 px-2 py-1 text-muted-foreground md:flex">
                <XCircle size={13} />
                <p>0</p>
                <AlertTriangle size={13} />
                <p>0</p>
                <AlertCircle size={13} />
                <p>0</p>
              </div>
            </TooltipTrigger>
            <TooltipContent className="!border-none">
              No problems
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/activity"
                className="hidden items-center gap-x-1 px-2 py-1 text-muted-foreground md:flex"
              >
                <Clock size={13} className="text-base" />
                <p>{todayData?.grand_total.text}</p>
              </Link>
            </TooltipTrigger>
            <TooltipContent className="!border-none">
              <p>Today coding activity</p>
              <p className="text-sm text-muted-foreground">click for more</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <Link
          href={siteConfig.links.email}
          target='_blank'
          className='items-center gap-x-1.5 px-2 py-1 md:flex hidden text-muted-foreground hover:text-foreground transition-colors'
        >
          <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse' />
          <span>Available for a work!</span>
        </Link>
      </div>
      <div className="divide flex items-center divide-x border-l">
        <div className="hidden items-center gap-x-2 px-2 py-1 text-muted-foreground lg:flex">
          <CheckCheck size={13} />
          <p>Prettier</p>
        </div>
        <Link
          target="_blank"
          href={siteConfig.links.github}
          className="flex items-center gap-x-1 px-2 py-1 text-muted-foreground transition-colors hover:text-foreground"
        >
          <p>{siteConfig.username}</p>
          <Github size={13} />
        </Link>
      </div>
    </footer>
  );
}

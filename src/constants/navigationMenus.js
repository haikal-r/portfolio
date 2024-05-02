import { siteConfig } from "./siteConfig";
import { UserIcon } from "lucide-react";
import { RiHomeSmileLine } from "react-icons/ri";
import { TbAlignBoxBottomCenter } from "react-icons/tb";
import { LuActivitySquare } from "react-icons/lu";
import { LiaTelegram } from "react-icons/lia";
import { FiUser } from "react-icons/fi";


export const NAVIGATION = [
  {
    title: "Home",
    path: "/",
    content: "_Home",
    icon: RiHomeSmileLine,
  },
  {
    title: "About",
    path: "/about/personal.js",
    content: "_About",
    icon: FiUser,
    children: [
      {
        name: "_Personal",
        path: "/about/personal.js",
      },
      {
        name: "_Tech-stack",
        path: "/about/tech-stack.js",
      },
    ],
  },
  {
    title: "Projects",
    path: "/projects",
    content: "_Projects",
    icon: TbAlignBoxBottomCenter,
  },
  {
    title: "Activity",
    path: "/activity",
    content: "_Activity",
    icon: LuActivitySquare,
    children: [
      {
        name: "Languages",
        slug: "languages",
        path: "/activity/languages",
      },
      {
        name: "Weekly Activity",
        slug: "weekly-activity",
        path: "/activity/weekly-activity",
      },
      {
        name: "Code Editor",
        slug: "code-editor",
        path: "/activity/code-editor",
      },
      {
        name: "Operating Systems",
        slug: "operating-systems",
        path: "/activity/operating-systems",
      },
    ],
  },
  {
    title: "Contact",
    path: "/contact",
    content: "_Contact",
    icon: LiaTelegram,
    children: [
      {
        name: "Email",
        path: siteConfig.links.email,
      },
      {
        name: "Github",
        path: siteConfig.links.github,
      },
      {
        name: "Linkedin",
        path: siteConfig.links.linkedin,
      },
      {
        name: "Instagram",
        path: siteConfig.links.instagram,
      },
    ],
  },
];

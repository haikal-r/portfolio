import { siteConfig } from "./siteConfig"; 
import {
  Activity,
  CodeIcon,
  CoffeeIcon,
  HomeIcon,
  PhoneIcon,
  Settings,
  UserIcon,
} from "lucide-react";

export const NAVIGATION = [
  {
    title: "Home",
    path: "/",
    content: "_Home",
    icon: HomeIcon,
  },
  {
    title: "About",
    path: "/about",
    content: "_About",
    icon: UserIcon,
    children: [
      {
        name: "_Personal",
        path: "/about/personal.js",
      },
      {
        name: "_Tech-stack",
        path: "/about/tech-stack.js",
      },
    ]
  },
  {
    title: "Projects",
    path: "/projects",
    content: "_Projects",
    icon: CodeIcon,
  },
  {
    title: "Activity",
    path: "/activity",
    content: "_Activity",
    icon: Activity,
  },
  {
    title: "Contact",
    path: "/contact",
    content: "_Contact",
    icon: PhoneIcon,
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
    ]
  },
]
import { SiGithub, SiGmail, SiInstagram, SiLinkedin } from "react-icons/si";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/atoms/accordion";
import { FadeInStagger, FadeIn } from "@/components/atoms/fade-in";
import { AsideLink } from "@/components/atoms/aside-link";
import { siteConfig } from "@/constants";

export default function ContactLayout({ children }) {
  return (
    <>
      <section className="grid h-full grid-cols-12">
        <aside className="border-lines hidden overflow-y-auto border-r md:col-span-3 md:block lg:col-span-2">
          <Accordion type="single" collapsible defaultValue="contact">
            <AccordionItem value={"contact"} defaultChecked>
              <AccordionTrigger className="border-lines border-b px-5 py-2.5 text-left">
                Contact Me
              </AccordionTrigger>
              <AccordionContent className="mt-5">
                <FadeInStagger faster className="space-y-2">
                  {CONTACTS.map((contact) => (
                    <FadeIn key={contact.name}>
                      <AsideLink href={contact.path} target="_blank">
                        <contact.icon className="h-4 w-4 shrink-0" />
                        {contact.name}
                      </AsideLink>
                    </FadeIn>
                  ))}
                </FadeInStagger>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </aside>
        <section className="relative col-span-12 h-[84dvh] overflow-y-auto md:col-span-9 md:h-auto lg:col-span-10">
          {children}
        </section>
      </section>
    </>
  );
}

const CONTACTS = [
  {
    name: "Email",
    path: siteConfig.links.email,
    icon: SiGmail,
  },
  {
    name: "Github",
    path: siteConfig.links.github,
    icon: SiGithub,
  },
  {
    name: "Linkedin",
    path: siteConfig.links.linkedin,
    icon: SiLinkedin,
  },
  {
    name: "Instagram",
    path: siteConfig.links.instagram,
    icon: SiInstagram,
  },
];

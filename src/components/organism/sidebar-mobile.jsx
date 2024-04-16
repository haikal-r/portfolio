import { AnimatePresence } from "framer-motion";
import { NAVIGATION } from "@/constants";
import { Fragment } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/atoms/accordion";
import { FadeIn } from "@/components/atoms/fade-in";
import Link from "next/link";

export default function AppSidebarMobile({ isOpen, toggleNavbar }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <FadeIn className="absolute left-0 top-[60px] z-50 h-[calc(100%-57px-27px)] w-full overflow-y-auto bg-background p-5">
          {NAVIGATION.map((item, index) => (
            <Fragment key={index}>
              {item.children ? (
                <Accordion type="single" collapsible>
                  <AccordionItem value={item.title}>
                    <AccordionTrigger>{item.content}</AccordionTrigger>
                    <AccordionContent>
                      {item.children.map((child, index) => (
                        <Link 
                          href={child.path} 
                          key={index}
                          className="block py-2 first:pt-0 last:pb-0 border-b last:border-b-0 text-muted-foreground hover:underline"
                          onClick={toggleNavbar}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ) : (
                <Link
                  href={item.path}
                  className="last:pb-0 block py-4 text-lg text-foreground first:pt-0"
                  key={index}
                  onClick={toggleNavbar}
                >
                  {item.content}
                </Link>
              )}
            </Fragment>
          ))}
        </FadeIn>
      )}
    </AnimatePresence>
  );
}

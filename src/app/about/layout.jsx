import { Suspense } from "react";
import { allAbouts } from "contentlayer/generated";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/atoms/accordion";
import { IoLogoJavascript } from "react-icons/io5";
import { FadeInStagger, FadeIn } from "@/components/atoms/fade-in";
import { AsideLink } from "@/components/atoms/aside-link";

export default function AboutLayout({ children }) {
  return (
    <section className="grid h-full grid-cols-12 overflow-hidden">
      <aside className="hidden overflow-y-auto border-r md:col-span-3 md:block lg:col-span-2">
        <Accordion type="single" collapsible defaultValue="about">
          <AccordionItem value={"about"} defaultChecked>
            <AccordionTrigger className="border-lines border-b px-5 py-2.5 text-left">
              About Me
            </AccordionTrigger>
            <AccordionContent className="mt-5 space-y-1">
              {allAbouts.map(({ title }) => (
                <FadeIn key={title} >
                  <Suspense fallback={<>Loading...</>}>
                    <AsideLink href={title} key={title} title={title}>
                    <IoLogoJavascript className="h-[17px] w-[17px] shrink-0" />
                    {title}
                    </AsideLink>
                  </Suspense>
                </FadeIn>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </aside>
      <section className="md:col-span-9 lg:col-span-10 col-span-12 overflow-y-auto relative h-[84dvh] md:h-auto">
        {children}
      </section>
    </section>
  );
}

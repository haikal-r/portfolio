import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
  AccordionItem,
} from "@/components/atoms/accordion";

export default function AboutLayout() {
  return (
    <section className="grid h-full grid-cols-12 overflow-hidden">
      <aside className="hidden overflow-y-auto border-r md:col-span-3 md:block lg:col-span-2">
        <Accordion type="single" collapsible defaultValue="about">
          <AccordionItem value={"about"} defaultChecked>
            <AccordionTrigger className="border-lines border-b px-5 py-2.5 text-left">
              About Me
            </AccordionTrigger>
            <AccordionContent className="mt-5 space-y-1">
              {/* {allAbouts.map(({ title }) => (
                  <FadeIn key={title}>
                    <Suspense fallback={<>Loading...</>}>
                      <AsideLink href={title} key={title} title={title}>
                        <IoLogoJavascript className="w-4 h-4 shrink-0" />
                        {title}
                      </AsideLink>
                    </Suspense>
                  </FadeIn>
                ))} */}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </aside>
    </section>
  );
}

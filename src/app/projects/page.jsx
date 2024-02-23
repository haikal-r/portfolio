import {
  AnimatePresence,
  FadeIn,
  FadeInStagger,
} from "@/components/atoms/fade-in";
import ProjectCard from "@/components/molecules/project-card";

export default function ProjectsPage() {
  return (
    <section className="overflow-y-auto relative h-full p-5">
    {/* <h3 className="text-lg mb-3">PROJECTS</h3> */}

    <FadeInStagger
      className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
      faster
    >
      <AnimatePresence mode="wait">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </AnimatePresence>
    </FadeInStagger>

    <br />
  </section>
  );
}

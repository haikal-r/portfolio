import {
  AnimatePresence,
  FadeIn,
  FadeInStagger,
} from "@/components/atoms/fade-in";
import ProjectCard from "@/components/molecules/project-card";
import { allProjects } from "contentlayer/generated";

export default function ProjectsPage() {
  return (
    <section className="relative h-full overflow-y-auto p-5">
      {/* <h3 className="text-lg mb-3">PROJECTS</h3> */}

      <FadeInStagger
        className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        faster
      >
        <AnimatePresence mode="wait">
          {allProjects.map(project => (
            <FadeIn
              layout
              key={project.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard data={project} />
            </FadeIn>
          ))}
        </AnimatePresence>
      </FadeInStagger>

      <br />
    </section>
  );
}

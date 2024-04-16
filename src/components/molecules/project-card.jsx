import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/atoms/dialog";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/atoms/button";
import { Badge } from "@/components/atoms/badge";

export default function ProjectCard({ data }) {
  return (
    <Dialog>
      <DialogTrigger>
        <article className="group overflow-hidden rounded-md border transition-shadow duration-500 hover:shadow-2xl hover:shadow-secondary">
          <figure className="relative aspect-video overflow-hidden">
            <Image
              src={data.image}
              alt={data.title}
              blurDataURL={data.image}
              placeholder="blur"
              quality={10}
              fill
              sizes="100%"
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              priority
            />
            <div className="absolute z-30 flex h-full w-full items-center justify-center overflow-hidden rounded-t bg-background/80 backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-0">
              <p className="text-3xl font-semibold uppercase italic">
                {data.title}
              </p>
            </div>
          </figure>

          <div className="p-3">
            <p className="text-off-white line-clamp-5 text-left text-sm text-muted-foreground">
              {data.summary}
            </p>
          </div>
        </article>
      </DialogTrigger>
      <DialogContent className="max-w-2xl shadow-2xl shadow-secondary">
        <DialogHeader>
          <DialogTitle className="mb-2">{data.title}</DialogTitle>
          <DialogDescription>
            <figure className="relative mb-5 aspect-video overflow-hidden rounded-md">
              <Image
                src={data.image}
                alt={data.title}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </figure>
            <h1 className="text-foreground">Description</h1>
            <p className="mt-2 whitespace-pre-line">{data.summary}</p>
            <div className="mt-3 flex flex-col gap-2">
              <div className="flex w-full flex-col md:flex-row">
                <h1 className="me-2 text-foreground">Source Code:</h1>
                <Link
                  href={data.source}
                  className="hover:text-foreground hover:underline"
                >
                  {data.source}
                </Link>
              </div>
              <div className="flex w-full flex-col md:flex-row">
                <h1 className="me-2 text-foreground">Live Demo:</h1>
                <Link
                  href={data.demo}
                  className="hover:text-foreground hover:underline"
                >
                  {data.demo}
                </Link>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <ul className="flex w-full items-center justify-start gap-x-2 border-t py-2">
            {data.tag && (
              <li className="space-x-1">
                {data.tag.map((tech, i) => (
                  <Badge key={i} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </li>
            )}
          </ul>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export const ProjectCardSkeleton = ({ delay }) => {
  return (
    <div className="h-full w-full overflow-hidden rounded border bg-muted/20">
      <div
        className="aspect-video animate-pulse bg-muted/30"
        style={{ animationDelay: `${delay * 0.1}s` }}
      />
      <div className="space-y-2.5 p-3">
        {[...Array(4)].map((_, i) => (
          <div
            className="h-4 w-full animate-pulse rounded bg-muted/30"
            key={i}
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>
    </div>
  );
};

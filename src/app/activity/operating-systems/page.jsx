import { FadeIn } from "@/components/atoms/fade-in";
import { wakatimeWeeklyOperatingSystem } from "@/lib/wakatime";

export default async function OperatingSystems() {
  const { data } = await wakatimeWeeklyOperatingSystem();

  return (
    <FadeIn>
       <article>
        <div className="mb-2.5 border-b pb-2.5 md:space-y-2">
          <h1 className="text-xl font-semibold">Coding Langueges</h1>
        </div>
        {data.map((item) => (
          <pre className="flex items-center justify-between" key={item.name}>
            <code className="flex w-40 shrink-0 items-center gap-x-2 truncate !text-sm text-muted-foreground">
              <div
                className="h-1 w-1 rounded-full"
                style={{ backgroundColor: item.color }}
              />
                {item.name}
            </code>
            <div className="hidden h-1 w-full rounded bg-muted md:block">
              <div
                className="h-1 w-full rounded bg-foreground"
                style={{
                  width: `${item.percent}%`,
                }}
              />
            </div>
            <code className="w-24 text-end text-muted-foreground shrink-0 !text-sm">
              {item.percent}%
            </code>
          </pre>
        ))}
      </article>
    </FadeIn>
  )
}
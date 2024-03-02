import { wakatimeWeeklyCodingActivity } from "@/lib/wakatime";
import { FadeIn } from "@/components/atoms/fade-in";

export default async function WeeklyActivity() {
  const { data } = await wakatimeWeeklyCodingActivity();
  const maxTotalSeconds = Math.max(
    ...data.map((entry) => entry.grand_total.total_seconds),
  );
  const minTotalSeconds = Math.min(
    ...data.map((entry) => entry.grand_total.total_seconds),
  );

  return (
    <FadeIn>
      <article>
        <div className="mb-2.5 border-b pb-2.5 md:space-y-2">
          <h1 className="text-xl font-semibold">Coding Langueges</h1>
        </div>
        {data.reverse().map((item) => (
          <pre
            className="flex items-center justify-between"
            key={item.range.date}
          >
            <code className="w-40 shrink-0 truncate !text-sm text-muted-foreground">
              {item.range.text}
            </code>
            <div className="hidden h-1 w-full rounded bg-muted md:block">
              <div
                className="h-1 rounded bg-foreground"
                style={{
                  width: `${
                    ((item.grand_total.total_seconds - minTotalSeconds) /
                      (maxTotalSeconds - minTotalSeconds)) *
                    100
                  }%`,
                }}
              />
            </div>
            <code className="ml-4 w-32 shrink-0 text-end !text-sm text-muted-foreground md:ml-0">
              {item.grand_total.text}
            </code>
          </pre>
        ))}
      </article>
    </FadeIn>
  );
}

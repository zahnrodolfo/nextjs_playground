import type { Experience } from "../../data/cv";

export default function ExperienceItem({ item }: { item: Experience }) {
  return (
    <div className="rounded-lg border p-4">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <h3 className="font-medium text-lg leading-tight">
            {item.role} · {item.company}
          </h3>
          {item.location && (
            <p className="text-sm text-zinc-600 dark:text-zinc-400">{item.location}</p>
          )}
        </div>
        <span className="text-sm text-zinc-600 dark:text-zinc-400">
          {item.start} – {item.end}
        </span>
      </div>
      <ul className="mt-3 list-disc pl-5 space-y-1 text-sm">
        {item.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
      {item.tech && item.tech.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {item.tech.map((t) => (
            <span key={t} className="inline-block rounded-full bg-black/5 px-2 py-0.5 text-xs dark:bg-white/10">
              {t}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

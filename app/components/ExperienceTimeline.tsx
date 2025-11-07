"use client";
import type { Experience } from "../../data/cv";

export default function ExperienceTimeline({ items }: { items: Experience[] }) {
  if (!items || items.length === 0) return null;
  return (
    <ol className="relative border-s ms-3" style={{ borderColor: "var(--card-border)" }}>
      {items.map((item, idx) => (
        <li key={`${item.company}-${item.role}-${idx}`} className="mb-10 ms-4">
          <div className="rounded-lg border p-4 bg-white/5 backdrop-blur" style={{ borderColor: "var(--card-border)" }}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold text-white">{item.role} - {item.company}</h3>
              <span className="text-sm text-white">{item.start} - {item.end}</span>
            </div>
            {item.location && <p className="text-sm text-white">{item.location}</p>}
            {item.bullets?.length ? (
              <ul className="mt-3 list-disc pl-5 space-y-1 text-sm text-white">
                {item.bullets.map((b, i) => (<li key={i}>{b}</li>))}
              </ul>
            ) : null}
            {item.tech?.length ? (
              <div className="mt-3 flex flex-wrap gap-2">
                {item.tech.map((t) => (<span key={t} className="inline-block rounded-full bg-white/10 px-2 py-0.5 text-xs text-white">{t}</span>))}
              </div>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}

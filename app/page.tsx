import cv from "../data/cv";
import Section from "./components/Section";
import ExperienceTimeline from "./components/ExperienceTimeline";
import TechArsenal from "./components/TechArsenal";

export default function Home() {
  const skillItems = cv.skills ? cv.skills.flatMap((g) => g.items) : [];
  const experienceItems = cv.experience ? cv.experience.flatMap((e) => e.tech ?? []) : [];
  const arsenalItems = Array.from(new Set([
    ...skillItems,
    ...experienceItems,
  ]));
  return (
    <div className="space-y-12">
      {Array.isArray(cv.summary) && cv.summary.length > 0 && (
        <Section title="Summary">
          <div className="space-y-3 rounded-xl border p-4 bg-white/5 backdrop-blur" style={{ borderColor: "var(--card-border)" }}>
            {cv.summary.map((para, idx) => (
              <p key={idx} className="text-white leading-7">
                {para}
              </p>
            ))}
          </div>
        </Section>
      )}

      {cv.experience && cv.experience.length > 0 && (
        <Section id="experience" title="Experience">
          <ExperienceTimeline items={cv.experience} />
        </Section>
      )}

      {cv.education && cv.education.length > 0 && (
        <Section id="education" title="Education">
          <div className="space-y-4">
            {cv.education.map((e) => (
              <div key={`${e.institution}-${e.degree}`} className="rounded-lg border p-4 bg-white/5 backdrop-blur" style={{ borderColor: "var(--card-border)" }}>
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-medium">{e.degree} - {e.institution}</h3>
                  <span className="text-sm text-white">{[e.start, e.end].filter(Boolean).join(" - ")}</span>
                </div>
                {e.details && e.details.length > 0 && (
                  <ul className="mt-2 list-disc pl-5 space-y-1 text-sm">
                    {e.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </Section>
      )}

      {arsenalItems.length > 0 && (
        <Section id="tech-arsenal" title="Tech Arsenal">
          <div className="rounded-lg border p-4 bg-white/5 backdrop-blur" style={{ borderColor: "var(--card-border)" }}>
            <TechArsenal items={arsenalItems} />
          </div>
        </Section>
      )}
      
      
    </div>
  );
}

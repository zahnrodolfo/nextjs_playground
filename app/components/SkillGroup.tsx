export default function SkillGroup({
  category,
  items,
}: {
  category: string;
  items: string[];
}) {
  return (
    <div className="rounded-lg border p-4 bg-white/5 backdrop-blur" style={{ borderColor: "var(--card-border)" }}>
      <h3 className="text-sm font-medium mb-2 tracking-wide uppercase text-white">
        {category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((skill) => (
          <span key={skill} className="inline-block rounded-full bg-white/10 px-2 py-0.5 text-xs text-white">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

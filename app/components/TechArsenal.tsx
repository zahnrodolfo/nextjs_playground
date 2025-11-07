import Image from "next/image";

type Tech = {
  key: string;
  label: string;
  icon?: string;
  color?: string;
};

const TECH_MAP: Record<string, Tech> = {
  typescript: { key: "typescript", label: "TypeScript", icon: "/tech/typescript.svg" },
  javascript: { key: "javascript", label: "JavaScript", icon: "/tech/javascript.svg" },
  python: { key: "python", label: "Python", icon: "/tech/python.svg" },
  php: { key: "php", label: "PHP", icon: "/tech/php.svg" },
  angular: { key: "angular", label: "Angular", icon: "/tech/angular.svg" },
  html: { key: "html", label: "HTML5", icon: "/tech/html.svg" },
  css: { key: "scss", label: "SCSS", icon: "/tech/scss.svg" },
  tailwindcss: { key: "tailwindcss", label: "Tailwind CSS", icon: "/tech/tailwind.svg" },
  nodejs: { key: "nodejs", label: "Node.js", icon: "/tech/nodejs.svg" },
  nestjs: { key: "nestjs", label: "NestJS", icon: "/tech/nestjs.svg" },
  graphql: { key: "graphql", label: "GraphQL", icon: "/tech/graphql.svg" },
  jest: { key: "jest", label: "Jest", icon: "/tech/jest.svg" },
  cypress: { key: "cypress", label: "Cypress", icon: "/tech/cypress.svg" },
  docker: { key: "docker", label: "Docker", icon: "/tech/docker.svg" },
  mongodb: { key: "mongodb", label: "MongoDB", icon: "/tech/mongodb.svg" },
  postgresql: { key: "postgresql", label: "PostgreSQL", icon: "/tech/postgresql.svg" },
  mysql: { key: "mysql", label: "MySQL", icon: "/tech/mysql.svg" },
  storybook: { key: "storybook", label: "Storybook", icon: "/tech/storybook.svg" },
  abtesting: { key: "abtesting", label: "A/B Testing", icon: "/tech/ab-testing.svg" },
  googletagmanager: { key: "googletagmanager", label: "Google Tag Manager", icon: "/tech/google-tag-manager.svg" },
  d3js: { key: "d3js", label: "D3.js", icon: "/tech/d3js.svg" },
};

function normalize(name: string) {
  return name.toLowerCase().replace(/\./g, "").replace(/\s|-/g, "").replace(/\//g, "");
}

export default function TechArsenal({ items }: { items: string[] }) {
  const keys = Array.from(
    new Set(
      items
        .map((s) => normalize(s))
        .map((k) => (k === "nodejs" || k === "node" ? "nodejs" : k))
        .map((k) => (k === "nestjs" || k === "nest" ? "nestjs" : k))
        .map((k) => (k === "cicd" || k.includes("cicd") ? "cicd" : k))
        .map((k) => (k === "d3" ? "d3js" : k))
    )
  );

  const techs: Tech[] = keys
    .map((k) => TECH_MAP[k])
    .filter((t): t is Tech => Boolean(t));

  if (techs.length === 0) return null;

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
      {techs.map((t) => (
        <div
          key={t.key}
          className="group flex flex-col items-center"
          aria-label={t.label}
          title={t.label}
        >
          <div
            className="flex h-28 w-28 flex-col items-center justify-center rounded-md border bg-white/5 p-3.5"
            style={{ borderColor: "var(--card-border)" }}
          >
            {t.icon && (
              <Image
                src={t.icon}
                alt={t.label}
                width={44}
                height={44}
                className="object-contain"
              />
            )}
            <span className="mt-1 px-2 w-full text-center text-[12px] leading-tight text-white/90 group-hover:text-white font-medium">
              {t.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

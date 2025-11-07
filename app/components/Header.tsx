import cv from "../../data/cv";
import Link from "next/link";
import { LinkedInIcon, GitHubIcon, MailIcon } from "./icons";

export default function Header() {
  const resumeHref = "/resume.pdf";
  const emailHref = cv.email ? `mailto:${cv.email}` : undefined;

  const link = (label: string) => cv.links.find((l) => l.label.toLowerCase() === label.toLowerCase());
  const linkedin = link("LinkedIn");
  const github = link("GitHub");

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-black/50" style={{ borderColor: "var(--card-border)" }}>
      <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-xl font-semibold tracking-tight">{cv.name}</span>
          <span className="text-sm text-white">
            {cv.title}
          </span>
          <span className="text-sm text-white">
            {cv.location}
          </span>
        </div>
        <nav className="flex items-center gap-3 text-sm">
          <div className="hidden md:flex items-center gap-3">
            {linkedin && (
              <Link href={linkedin.href} target="_blank" aria-label="LinkedIn" title="LinkedIn" className="text-white hover:opacity-80">
                <LinkedInIcon />
              </Link>
            )}
            {github && (
              <Link href={github.href} target="_blank" aria-label="GitHub" title="GitHub" className="text-white hover:opacity-80">
                <GitHubIcon />
              </Link>
            )}
            {emailHref && (
              <a href={emailHref} aria-label="Email" title="Email" className="text-white hover:opacity-80">
                <MailIcon />
              </a>
            )}
          </div>
          <Link href={resumeHref} className="rounded-full border px-3 py-1 hover:bg-white/10 whitespace-nowrap" style={{ borderColor: "var(--card-border)" }}>
            Download CV
          </Link>
        </nav>
      </div>
    </header>
  );
}

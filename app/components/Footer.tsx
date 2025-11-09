import cv from "../../data/cv";
import Link from "next/link";
import { LinkedInIcon, GitHubIcon } from "./icons";

export default function Footer() {
  const year = new Date().getFullYear();
  const email = cv.email;
  const link = (label: string) => cv.links.find((l) => l.label.toLowerCase() === label.toLowerCase());
  const linkedin = link("LinkedIn");
  const github = link("GitHub");

  return (
    <footer className="border-t py-8" style={{ borderColor: "var(--card-border)" }}>
      <div className="mx-auto max-w-5xl px-4 text-sm text-white flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center justify-between md:justify-start gap-3">
          <span>© {year} Rodolfo Zahn.</span>
          <span>All rights reserved.</span>          
        </div>
        <nav className="flex items-center gap-3">
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
          {email && (
            <span className="text-white" title="Email">
              {email}
            </span>
          )}
        </nav>
      </div>
    </footer>
  );
}

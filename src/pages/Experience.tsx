import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import PageTransition from "../components/PageTransition";
import ExpandableText from "../components/ExpandableText";
import { experiences } from "../data/experiences";
import { leadership } from "../data/leadership";
import type { LeadershipItem } from "../types";

const rise = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.85, ease: [0.19, 1, 0.22, 1] },
};

// ── Reusable atoms ─────────────────────────────────────
function DateStamp({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="italic-serif text-[14px] tracking-[0.02em]"
      style={{ color: "var(--text-3)" }}
    >
      {children}
    </p>
  );
}

function Wordmark({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-white font-semibold"
      style={{
        fontSize: "clamp(30px, 4vw, 46px)",
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        lineHeight: 1,
      }}
    >
      {children}
    </h2>
  );
}

function LogoPlate({
  src,
  alt,
  ratio = "4/3",
  contain = 0.62,
  variant = "plate",
}: {
  src: string;
  alt: string;
  ratio?: string;
  contain?: number;
  variant?: "plate" | "full";
}) {
  // `full` — the logo IS the tile, edge to edge, no white background.
  if (variant === "full") {
    return (
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: ratio, borderRadius: 4 }}
      >
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      </div>
    );
  }

  // `plate` — a mark that needs a light background to read.
  return (
    <div
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        aspectRatio: ratio,
        background: "#F4F4F5",
        borderRadius: 4,
      }}
    >
      <img
        src={src}
        alt={alt}
        className="object-contain"
        style={{ width: `${contain * 100}%`, height: `${contain * 100}%` }}
      />
    </div>
  );
}

function VerticalRule() {
  return (
    <div
      aria-hidden
      className="hidden md:block absolute inset-y-0 left-1/2 -translate-x-px"
      style={{ width: 1, background: "var(--hairline)" }}
    />
  );
}

// ══════════════════════════════════════════════════════
//  One uniform entry — every role renders identically.
//  Left: date + wordmark + logo plate.  Right: role + copy + stack.
// ══════════════════════════════════════════════════════
function ExperienceEntry({
  id,
  wordmark,
  logo = "full",
  reverse = false,
}: {
  id: string;
  wordmark: string;
  logo?: "plate" | "full";
  reverse?: boolean;
}) {
  const exp = experiences.find((e) => e.id === id)!;

  return (
    <motion.section
      {...rise}
      className="mb-28"
      style={{ borderTop: "1px solid var(--hairline)", paddingTop: 88 }}
    >
      <div className="relative grid gap-16 md:grid-cols-2 items-start">
        <VerticalRule />

        {/* date + wordmark + logo — alternates side as you scroll */}
        <div
          className={reverse ? "md:order-2 md:pl-14" : "md:order-1 md:pr-14"}
        >
          <div className="text-center mb-6">
            <DateStamp>{exp.period}</DateStamp>
          </div>
          <div className="text-center mb-12">
            <Wordmark>{wordmark}</Wordmark>
          </div>
          <LogoPlate
            src={exp.logoSrc}
            alt={exp.company}
            ratio="4/3"
            contain={0.62}
            variant={logo}
          />
        </div>

        {/* role + team/location + description + stack */}
        <div
          className={`md:pt-2 ${
            reverse ? "md:order-1 md:pr-14" : "md:order-2 md:pl-14"
          }`}
        >
          <p className="text-center md:text-left text-[16px] font-semibold text-white tracking-tight mb-2">
            {exp.role}
          </p>
          <p
            className="text-center md:text-left text-[13px] mb-9"
            style={{ color: "var(--text-3)" }}
          >
            {exp.team} · {exp.location}
          </p>

          <div className="mb-10">
            <ExpandableText
              text={exp.description}
              clampLines={6}
              className="text-[17px] leading-[1.8]"
            />
          </div>

          <p className="eyebrow mb-4">The Stack</p>
          <div className="flex flex-wrap gap-1.5">
            {exp.tech.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

// The render order + the short wordmark + how the logo fills its tile.
// `full` = edge-to-edge solid logo, no white; `plate` = mark on a light plate.
const ENTRIES = [
  { id: "fiserv", wordmark: "Fiserv", logo: "full" as const },
  { id: "arkra", wordmark: "Arkra", logo: "plate" as const },
  { id: "njit-research", wordmark: "NJIT YWCC", logo: "full" as const },
  { id: "seo", wordmark: "SEO", logo: "plate" as const },
  { id: "njit-mentor", wordmark: "NJIT", logo: "full" as const },
];

// ══════════════════════════════════════════════════════
//  Editorial logo grid — Programs & Leadership
// ══════════════════════════════════════════════════════
function EditorialLogoTile({
  item,
  index,
}: {
  item: LeadershipItem;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.05,
        ease: [0.19, 1, 0.22, 1],
      }}
      className="group"
    >
      <div className="mb-5">
        <LogoPlate
          src={item.logoSrc}
          alt={item.organization}
          ratio="4/3"
          contain={0.6}
        />
      </div>
      <p
        className="text-[11.5px] mb-2"
        style={{
          color: "var(--text-4)",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
        }}
      >
        {item.period}
      </p>
      <p className="text-white font-semibold text-[15.5px] tracking-tight leading-snug group-hover:text-blue-300 transition-colors">
        {item.organization}
      </p>
      <p className="text-[13px] mt-1 mb-3" style={{ color: "var(--text-3)" }}>
        {item.title}
      </p>
      <ExpandableText
        text={item.description}
        clampLines={3}
        className="text-[13.5px] leading-[1.6]"
      />
    </motion.article>
  );
}

function ProgramsGrid() {
  const programs = leadership.filter((l) => l.category === "programs");
  return (
    <motion.section
      {...rise}
      className="mb-32"
      style={{ borderTop: "1px solid var(--hairline)", paddingTop: 96 }}
    >
      <div className="text-center mb-16 max-w-[640px] mx-auto">
        <p className="eyebrow mb-5">Programs & Fellowships</p>
        <h2
          className="text-white font-semibold"
          style={{
            fontSize: "clamp(30px, 4vw, 48px)",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
          }}
        >
          Where I&apos;ve been trained.
        </h2>
      </div>

      <div className="grid gap-x-8 gap-y-16 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {programs.map((item, i) => (
          <EditorialLogoTile key={item.id} item={item} index={i} />
        ))}
      </div>
    </motion.section>
  );
}

function LeadershipGrid() {
  const leadRoles = leadership.filter((l) => l.category === "leadership");
  return (
    <motion.section
      {...rise}
      className="mb-24"
      style={{ borderTop: "1px solid var(--hairline)", paddingTop: 96 }}
    >
      <div className="text-center mb-16 max-w-[640px] mx-auto">
        <p className="eyebrow mb-5">Leadership</p>
        <h2
          className="text-white font-semibold"
          style={{
            fontSize: "clamp(30px, 4vw, 48px)",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
          }}
        >
          Communities I&apos;m part of.
        </h2>
      </div>

      <div className="grid gap-x-8 gap-y-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {leadRoles.map((item, i) => (
          <EditorialLogoTile key={item.id} item={item} index={i} />
        ))}
      </div>
    </motion.section>
  );
}

// ══════════════════════════════════════════════════════
//  PAGE
// ══════════════════════════════════════════════════════
export default function Experience() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-[1200px] px-6 pt-28 pb-24">
        {/* Editorial masthead */}
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
          className="text-center mb-20"
        >
          <p
            className="italic-serif text-[15px] mb-6"
            style={{ color: "var(--text-3)" }}
          >
            a personal record so far
          </p>
          <h1
            className="display text-white"
            style={{ fontSize: "clamp(64px, 10vw, 152px)" }}
          >
            Experience
          </h1>
          <p
            className="mx-auto mt-10 max-w-[560px] text-[17px] leading-[1.7]"
            style={{ color: "var(--text-2)" }}
          >
            Roles across fintech, AI research, teaching, and the programs that
            got me here. Each one a chapter in how I&apos;ve learned to build.
          </p>
        </motion.header>

        {ENTRIES.map((e, i) => (
          <ExperienceEntry
            key={e.id}
            id={e.id}
            wordmark={e.wordmark}
            logo={e.logo}
            reverse={i % 2 === 1}
          />
        ))}

        <ProgramsGrid />
        <LeadershipGrid />

        {/* Footer */}
        <motion.div
          {...rise}
          className="mt-24 pt-10 flex flex-col md:flex-row md:items-center justify-between gap-6"
          style={{ borderTop: "1px solid var(--hairline)" }}
        >
          <p
            className="italic-serif text-[17px]"
            style={{ color: "var(--text-3)" }}
          >
            end of experience.
          </p>
          <a
            href="/projects"
            className="inline-flex items-center gap-1.5 text-[13.5px] font-medium transition-colors"
            style={{ color: "var(--text)" }}
          >
            Continue to selected work
            <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </PageTransition>
  );
}

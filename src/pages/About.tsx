import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import PageTransition from "../components/PageTransition";
import { skillGroups } from "../data/skills";
import { SKILL_META, FALLBACK_META } from "../data/skillIcons";
import {
  logos,
  interestLogos,
  interestPhotos,
  profilePhotoFallback,
  boatPhoto,
  fiservHeadshot,
} from "../data/assets";

// A single tech chip: brand icon (in colour) + label, on charcoal.
function SkillChip({ name }: { name: string }) {
  const { Icon, color } = SKILL_META[name] ?? FALLBACK_META;
  return (
    <div
      className="group/skill flex items-center gap-2.5 rounded-lg px-3 py-2 transition-all duration-200"
      style={{
        background: "var(--surface)",
        border: "1px solid var(--hairline)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--hairline-3)";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--hairline)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <Icon size={17} style={{ color }} className="shrink-0" />
      <span
        className="text-[13.5px] font-medium"
        style={{ color: "var(--text)" }}
      >
        {name}
      </span>
    </div>
  );
}

const rise = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.19, 1, 0.22, 1] },
};

const fanInterests = [
  {
    name: "New York Knicks",
    category: "Basketball",
    note: "My basketball team, always.",
    logo: interestLogos.knicks,
    accent: "#f58426",
    logoClass: "h-24 sm:h-28",
  },
  {
    name: "UFC",
    category: "Mixed martial arts",
    note: "I never miss a big fight card.",
    logo: interestLogos.ufc,
    accent: "#d20a0a",
    logoClass: "h-16 sm:h-20",
  },
  {
    name: "Real Madrid",
    category: "Soccer",
    note: "The club I follow all season.",
    logo: interestLogos.realMadrid,
    accent: "#3e31fa",
    logoClass: "h-24 sm:h-28",
  },
  {
    name: "New York Giants",
    category: "Football",
    note: "Big Blue through every season.",
    logo: interestLogos.giants,
    accent: "#4f86d9",
    logoClass: "h-20 sm:h-24",
  },
];

const activeInterests = [
  {
    name: "Hiking",
    category: "Fresh air",
    note: "I love hiking for the quiet, the challenge, and views like this one.",
    image: interestPhotos.hiking,
    alt: "A hiking trail overlooking a river and wooded mountains",
  },
  {
    name: "Volunteering",
    category: "Youth Camp",
    note: "This photo is from the 2026 Youth Camp. I love it so much because I used to be a camper, and now I get to return as a counselor.",
    image: interestPhotos.volunteering,
    alt: "Ameer and fellow counselors at the 2026 Youth Camp",
  },
  {
    name: "Pickleball",
    category: "On the court",
    note: "I started playing for fun, but I get competitive as soon as a game begins.",
    image: interestPhotos.pickleball,
    alt: "A pickleball game in progress",
  },
  {
    name: "Spikeball",
    category: "At the park",
    note: "A good afternoon for me is being at the park with friends and playing a competitive game of Spikeball.",
    image: interestPhotos.spikeball,
    alt: "Friends playing a roundnet game in a park",
  },
];

export default function About() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-[1200px] px-6 pt-28 pb-24">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="eyebrow mb-6">About</p>
          <h1
            className="display text-ink mb-8"
            style={{ fontSize: "clamp(56px, 9vw, 128px)" }}
          >
            Who I am,
            <br />
            <span
              className="italic-serif"
              style={{ fontWeight: 500, color: "var(--text-2)" }}
            >
              in short.
            </span>
          </h1>
        </motion.header>

        {/* Portrait + Essay */}
        <div className="grid gap-16 lg:grid-cols-[340px_1fr] items-start mb-24">
          {/* Portrait */}
          <motion.aside {...rise} className="lg:sticky lg:top-24">
            {/* Flip card — Fiserv headshot on the front, Boat on the back (hover to flip) */}
            <div className="group mb-5" style={{ perspective: "1400px" }}>
              <div
                className="relative w-full [transform-style:preserve-3d] transition-transform duration-700 ease-out group-hover:[transform:rotateY(180deg)]"
                style={{ aspectRatio: "4/5" }}
              >
                {/* front — Fiserv headshot */}
                <div
                  className="absolute inset-0 overflow-hidden [backface-visibility:hidden]"
                  style={{ borderRadius: 4, border: "1px solid var(--hairline-2)" }}
                >
                  <img
                    src={fiservHeadshot}
                    alt="Ameer — Fiserv headshot"
                    className="h-full w-full object-cover object-center"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = profilePhotoFallback;
                    }}
                  />
                </div>
                {/* back — Boat */}
                <div
                  className="absolute inset-0 overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)]"
                  style={{ borderRadius: 4, border: "1px solid var(--hairline-2)" }}
                >
                  <img
                    src={boatPhoto}
                    alt="Ameer by the lake"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>

            <p
              className="italic-serif text-[15px]"
              style={{ color: "var(--text-2)" }}
            >
              Ameer Hassan
            </p>
            <p
              className="text-[12.5px] mt-0.5"
              style={{ color: "var(--text-4)" }}
            >
              b. 2006 · New York Metro Area
            </p>

            {/* Facts */}
            <dl className="mt-8 space-y-3 text-[13.5px]">
              {[
                ["Studying at", "NJIT"],
                ["Working at", "Fiserv"],
                ["From", "New York Metro"],
                ["Graduating", "Dec 2028"],
                ["Also into", "Cloud engineering"],
                ["Off the clock", "Knicks · UFC · Real Madrid · Giants"],
              ].map(([k, v]) => (
                <div key={k} className="flex items-baseline gap-3">
                  <dt className="shrink-0" style={{ color: "var(--text-4)" }}>
                    {k}
                  </dt>
                  <span className="flex-1 rule translate-y-[-3px]" />
                  <dd style={{ color: "var(--text)" }}>{v}</dd>
                </div>
              ))}
            </dl>
          </motion.aside>

          {/* Essay */}
          <motion.article {...rise} className="max-w-2xl">
            <p
              className="text-[22px] leading-[1.55] font-medium tracking-tight text-ink mb-8"
              style={{ letterSpacing: "-0.01em" }}
            >
              I&apos;m Ameer, a Computer Science student in NJIT&apos;s Honors
              College with a minor in Applied Mathematics. Before switching to
              Computer Science, I was a Financial Technology major, and that
              experience gave me a deep appreciation for how technology can
              shape the future of finance. FinTech is still one of the fields
              I&apos;m most excited about, and I hope to build a career where I
              can combine software engineering, AI, cloud engineering, and
              finance to create products that make a real impact.
            </p>

            <p
              className="text-[17px] leading-[1.75] mb-6"
              style={{ color: "var(--text-2)" }}
            >
              I&apos;m naturally curious, and that&apos;s probably the biggest
              thing about me. If I come across an interesting idea, I&apos;ll
              spend hours trying to understand how it works, even if it has
              nothing to do with school or work. I enjoy building things simply
              because I like learning, and some of my favorite projects started
              as random questions that turned into late night experiments.
              Recently, I&apos;ve been spending more time exploring cloud
              engineering because I&apos;m fascinated by what it takes to build
              systems that are reliable, scalable, and used by millions of
              people.
            </p>

            <p
              className="text-[17px] leading-[1.75] mb-6"
              style={{ color: "var(--text-2)" }}
            >
              When I&apos;m away from my computer, you&apos;ll probably find me
              watching UFC, following MMA, or keeping up with the Knicks. I&apos;m
              a huge Knicks fan, and basketball is one of the sports I enjoy
              most. I also love football and follow Real Madrid throughout the
              season. On a free day, I&apos;m usually hiking, playing pickleball or
              Spikeball, or volunteering at my local mosque and its youth camp.
              Giving back has taught me the importance of staying connected to
              my community and being part of something bigger than myself.
            </p>

            <p
              className="text-[17px] leading-[1.75] mb-6"
              style={{ color: "var(--text-2)" }}
            >
              One thing that&apos;s become important to me over the past few
              years is helping other people grow. I&apos;ve been lucky enough to
              learn from mentors who invested their time in me, so I try to do
              the same by mentoring first year students and encouraging younger
              students to explore STEM. There&apos;s always more to learn, and I
              think the best communities are the ones where people genuinely
              want to see each other succeed.
            </p>

            <p
              className="text-[17px] leading-[1.75] mb-14"
              style={{ color: "var(--text-2)" }}
            >
              At the end of the day, I just enjoy learning, building, and
              meeting interesting people. Whether it&apos;s trying out a new
              technology, competing at a hackathon, debating a UFC fight card
              with friends, or chasing another random idea that popped into my
              head, I&apos;m always looking for what&apos;s next.
            </p>

            {/* Interests */}
            <motion.section {...rise} className="mb-16 pt-4">
              <div className="mb-7">
                <p className="eyebrow mb-3">Beyond the code</p>
                <h2 className="text-ink text-[30px] font-semibold tracking-[-0.035em]">
                  The things that feel like me.
                </h2>
                <p
                  className="mt-3 max-w-xl text-[15px] leading-relaxed"
                  style={{ color: "var(--text-3)" }}
                >
                  I love building things, but I&apos;m at my best when life has a
                  little competition, a lot of fresh air, and good people around.
                </p>
              </div>

              <div className="mb-5 flex items-center gap-4">
                <p className="eyebrow shrink-0">Sports I really like</p>
                <span className="rule flex-1" />
              </div>

              <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                {fanInterests.map((interest) => (
                  <motion.div
                    key={interest.name}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="group relative overflow-hidden rounded-xl p-4"
                    style={{
                      background: `linear-gradient(145deg, color-mix(in srgb, ${interest.accent} 12%, var(--surface)), var(--surface))`,
                      border: "1px solid var(--hairline-2)",
                    }}
                  >
                    <div
                      aria-hidden
                      className="absolute -right-10 -top-12 h-36 w-36 rounded-full opacity-20 blur-3xl transition-opacity duration-300 group-hover:opacity-35"
                      style={{ background: interest.accent }}
                    />
                    <div className="relative flex h-32 items-center justify-center px-2">
                      <img
                        src={interest.logo}
                        alt={`${interest.name} logo`}
                        className={`${interest.logoClass} w-full object-contain drop-shadow-lg transition-transform duration-500 group-hover:scale-[1.04]`}
                      />
                    </div>
                    <div
                      className="relative mt-2 pt-4"
                      style={{ borderTop: "1px solid var(--hairline)" }}
                    >
                      <p
                        className="mb-1 text-[10.5px] font-semibold uppercase tracking-[0.14em]"
                        style={{ color: interest.accent }}
                      >
                        {interest.category}
                      </p>
                      <h3 className="text-ink text-[15px] font-semibold tracking-tight">
                        {interest.name}
                      </h3>
                      <p className="mt-1 text-[12px] leading-relaxed" style={{ color: "var(--text-3)" }}>
                        {interest.note}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mb-5 mt-12 flex items-center gap-4">
                <p className="eyebrow shrink-0">How I reset</p>
                <span className="rule flex-1" />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {activeInterests.map((interest) => (
                  <motion.article
                    key={interest.name}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="group overflow-hidden rounded-xl"
                    style={{
                      background: "var(--surface)",
                      border: "1px solid var(--hairline-2)",
                    }}
                  >
                    <div className="relative aspect-[3/2] overflow-hidden">
                      <img
                        src={interest.image}
                        alt={interest.alt}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                        loading="lazy"
                      />
                      <div
                        aria-hidden
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(180deg, transparent 55%, rgba(9, 9, 11, 0.35))",
                        }}
                      />
                    </div>
                    <div className="p-5">
                      <p className="eyebrow mb-2">{interest.category}</p>
                      <h3 className="text-ink text-[18px] font-semibold tracking-tight">
                        {interest.name}
                      </h3>
                      <p
                        className="mt-2 text-[13px] leading-relaxed"
                        style={{ color: "var(--text-3)" }}
                      >
                        {interest.note}
                      </p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.section>

            {/* Pull-quote */}
            <blockquote
              className="mb-14 pl-6 py-1"
              style={{ borderLeft: "2px solid var(--blue-2)" }}
            >
              <p
                className="text-[22px] leading-[1.45] font-medium text-ink"
                style={{ letterSpacing: "-0.01em" }}
              >
                &ldquo;Build things that are actually useful, and stay curious
                enough to keep asking{" "}
                <span style={{ color: "var(--blue-2)" }}>why</span>.&rdquo;
              </p>
              <p
                className="mt-4 text-[12.5px]"
                style={{ color: "var(--text-3)" }}
              >
                how I try to work
              </p>
            </blockquote>

            {/* Education */}
            <div className="mb-14">
              <p className="eyebrow mb-6">Education</p>
              <div className="flex items-center gap-5">
                <div
                  className="h-16 w-16 shrink-0 rounded-md overflow-hidden flex items-center justify-center"
                  style={{ background: "var(--plate)" }}
                >
                  <img
                    src={logos.njit}
                    alt="NJIT"
                    className="h-full w-full object-contain p-1.5"
                  />
                </div>
                <div>
                  <p className="text-ink font-semibold text-[17px] tracking-tight">
                    New Jersey Institute of Technology
                  </p>
                  <p
                    className="text-[13.5px] mt-0.5"
                    style={{ color: "var(--text-2)" }}
                  >
                    B.S. Computer Science · Minor in Applied Mathematics
                  </p>
                  <p
                    className="text-[12.5px] mt-1"
                    style={{ color: "var(--text-3)" }}
                  >
                    Albert Dorman Honors College · Class of 2028 · Expected Dec
                    2028
                  </p>
                </div>
              </div>
            </div>

            {/* Skills — brand-icon chips */}
            <div>
              <p className="eyebrow mb-6">Toolbox</p>
              {skillGroups.map((group) => (
                <div key={group.category} className="mb-8">
                  <p
                    className="text-[12.5px] mb-3"
                    style={{ color: "var(--text-3)" }}
                  >
                    {group.category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((s) => (
                      <SkillChip key={s} name={s} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.article>
        </div>

        {/* Footer */}
        <motion.div
          {...rise}
          className="mt-16 pt-10 flex flex-col md:flex-row md:items-center justify-between gap-6"
          style={{ borderTop: "1px solid var(--hairline)" }}
        >
          <p
            className="italic-serif text-[17px]"
            style={{ color: "var(--text-3)" }}
          >
            that&apos;s me.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-1.5 text-[13.5px] font-medium transition-colors"
            style={{ color: "var(--text)" }}
          >
            Get in touch
            <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </PageTransition>
  );
}

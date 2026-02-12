import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";

const skills = [
  "Python",
  "Jupyter",
  "Pandas",
  "NumPy",
  "scikit-learn",
  "Matplotlib",
  "SQL",
  "Linux",
  "Networking",
  "Cybersecurity",
  "Threat Modeling",
  "OWASP",
  "SIEM",
  "Docker",
];

const highlights = [
  {
    title: "Minimal UI, maximal clarity",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    chips: ["Design", "UX", "Bento"],
  },
  {
    title: "Production-minded frontend",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    chips: ["DX", "QA", "Maintainable"],
  },
  {
    title: "Polished motion, never loud",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    chips: ["Framer", "Micro-interactions", "Delight"],
  },
  {
    title: "Interview-ready stories",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
    chips: ["STAR", "Impact", "Metrics"],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function GlassCard({ title, body, chips }) {
  return (
    <motion.div
      variants={item}
      className="glass rounded-2xl p-5 hover:bg-white/5 transition"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold tracking-tight text-white">
          {title}
        </h3>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-slate-300">{body}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {chips.map((c) => (
          <span key={c} className="chip">
            {c}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-10"
    >
      <motion.section variants={item} className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300/80" />
            Open to internships & projects
          </div>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Ashish Shah — Cybersecurity & Data Science Learner.
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
            Nulla quis sem at nibh elementum imperdiet.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a className="btn-primary" href="/resume.pdf" download>
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <Link className="btn-ghost" to="/projects">
              View Projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="glass rounded-2xl p-4">
              <p className="text-xs text-slate-400">Focus</p>
              <p className="mt-1 text-sm font-medium text-slate-100">
                Cybersecurity • Data Science • Python
              </p>
            </div>
            <div className="glass rounded-2xl p-4">
              <p className="text-xs text-slate-400">Strength</p>
              <p className="mt-1 text-sm font-medium text-slate-100">
                Analytical, security-minded, proactive
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="glass rounded-2xl p-5 mb-5">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-sm font-semibold tracking-tight text-white">
                Profile
              </h2>
              <span className="text-xs text-slate-400">Add your photo</span>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4">
              <div className="col-span-1">
                <div className="relative mx-auto aspect-square w-full max-w-[200px] sm:max-w-[220px] md:max-w-[240px] overflow-hidden rounded-2xl border border-slate-200/10 bg-gradient-to-br from-white/10 to-white/0 ring-1 ring-slate-200/10">
                  <img
                    src="/ashish_image.jpeg"
                    alt="Ashish Shah"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="col-span-2">
                <p className="text-sm font-medium text-slate-100">Ashish Shah</p>
                <p className="mt-1 text-sm text-slate-300">
                  Cybersecurity • Data Science Learner
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="chip">Python</span>
                  <span className="chip">Linux</span>
                  <span className="chip">Networking</span>
                </div>
              </div>
            </div>
          </div>
          <div className="glass rounded-2xl p-5">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-sm font-semibold tracking-tight text-white">
                Featured Skills
              </h2>
              <span className="text-xs text-slate-400">Mobile-first</span>
            </div>

            <div className="mt-4 overflow-hidden rounded-xl border border-slate-200/10 bg-white/5">
              <div className="flex w-max gap-2 px-3 py-3 whitespace-nowrap animate-marquee-slow">
                {[...skills, ...skills].map((s, idx) => (
                  <span key={`${s}-${idx}`} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-slate-200/10 bg-white/5 p-4">
                <p className="text-xs text-slate-400">Now building</p>
                <p className="mt-1 text-sm font-medium text-slate-100">
                  Minimal portfolio system
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200/10 bg-white/5 p-4">
                <p className="text-xs text-slate-400">Preferred stack</p>
                <p className="mt-1 text-sm font-medium text-slate-100">
                  React + Tailwind
                </p>
              </div>
              <div className="col-span-2 rounded-2xl border border-slate-200/10 bg-white/5 p-4">
                <p className="text-xs text-slate-400">Pitch</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-200">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  posuere consectetur est at lobortis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <section>
        <motion.div variants={item} className="flex items-end justify-between">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-white">
              What you get
            </h2>
            <p className="mt-1 text-sm text-slate-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <Link className="btn-ghost hidden sm:inline-flex" to="/about">
            More about me <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-5 grid gap-3 md:grid-cols-2"
        >
          {highlights.map((h) => (
            <GlassCard
              key={h.title}
              title={h.title}
              body={h.body}
              chips={h.chips}
            />
          ))}
        </motion.div>
      </section>

      <motion.section variants={item} className="glass rounded-2xl p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold tracking-tight text-white">
              Ready for placements and interviews
            </h2>
            <p className="mt-1 text-sm text-slate-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              eu leo quam.
            </p>
          </div>
          <div className="flex gap-3">
            <Link className="btn-primary" to="/projects">
              See work <ArrowRight className="h-4 w-4" />
            </Link>
            <a className="btn-ghost" href="mailto:you@example.com">
              Contact
            </a>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}

import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="glass rounded-2xl p-6">
        <h1 className="text-3xl font-semibold tracking-tight text-white">
          About
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
          quis sem at nibh elementum imperdiet.
        </p>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <div className="glass rounded-2xl p-6">
          <h2 className="text-sm font-semibold tracking-tight text-white">
            Timeline
          </h2>
          <div className="mt-4 space-y-3">
            <div className="rounded-2xl border border-slate-200/10 bg-white/5 p-4">
              <p className="text-xs text-slate-400">202X — 202Y</p>
              <p className="mt-1 text-sm font-medium text-slate-100">
                Lorem ipsum role / program
              </p>
              <p className="mt-1 text-sm text-slate-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200/10 bg-white/5 p-4">
              <p className="text-xs text-slate-400">202X</p>
              <p className="mt-1 text-sm font-medium text-slate-100">
                Lorem ipsum internship / project
              </p>
              <p className="mt-1 text-sm text-slate-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>

        <div className="glass rounded-2xl p-6">
          <h2 className="text-sm font-semibold tracking-tight text-white">
            Technical Stack
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "Python",
              "Jupyter",
              "Pandas",
              "NumPy",
              "scikit-learn",
              "SQL",
              "Linux",
              "Networking",
              "Cybersecurity",
              "Threat Modeling",
              "OWASP",
              "SIEM",
            ].map((t) => (
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

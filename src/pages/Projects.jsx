import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Lorem Ipsum Dashboard",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere consectetur est at lobortis.",
    tags: ["React", "Tailwind", "API"],
    codeUrl: "https://github.com/",
    liveUrl: "https://example.com/",
  },
  {
    title: "Dolor Sit Analytics",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    tags: ["TypeScript", "Charts", "Testing"],
    codeUrl: "https://github.com/",
    liveUrl: "https://example.com/",
  },
  {
    title: "Amet UI Kit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna.",
    tags: ["Design System", "Accessibility", "Storybook"],
    codeUrl: "https://github.com/",
    liveUrl: "https://example.com/",
  },
  {
    title: "Bento Portfolio",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum.",
    tags: ["Framer Motion", "Responsive", "Glass UI"],
    codeUrl: "https://github.com/",
    liveUrl: "https://example.com/",
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

function ProjectCard({ project }) {
  return (
    <motion.article
      variants={item}
      className="glass rounded-2xl p-6 hover:bg-white/5 transition"
    >
      <h3 className="text-base font-semibold tracking-tight text-white">
        {project.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-300">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span key={t} className="chip">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-5 flex flex-col gap-2 sm:flex-row">
        <a
          className="btn-ghost flex-1"
          href={project.codeUrl}
          target="_blank"
          rel="noreferrer"
        >
          <Github className="h-4 w-4" /> View Code
        </a>
        <a
          className="btn-primary flex-1"
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
        >
          <ExternalLink className="h-4 w-4" /> Live Demo
        </a>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section className="space-y-6">
      <div className="glass rounded-2xl p-6">
        <h1 className="text-3xl font-semibold tracking-tight text-white">
          Projects
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed
          odio dui. Aenean lacinia bibendum nulla sed consectetur.
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-3 md:grid-cols-2"
      >
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </motion.div>
    </section>
  );
}

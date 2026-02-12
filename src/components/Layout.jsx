import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
];

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [
          "rounded-xl px-3 py-2 text-sm transition",
          isActive
            ? "bg-white/10 text-white"
            : "text-slate-200 hover:bg-white/5 hover:text-white",
        ].join(" ")
      }
      end={to === "/"}
    >
      {children}
    </NavLink>
  );
}

export default function Layout() {
  return (
    <div className="min-h-dvh bg-[radial-gradient(70%_55%_at_50%_0%,rgba(56,189,248,0.18),rgba(2,6,23,0)_60%),linear-gradient(to_bottom,rgba(2,6,23,1),rgba(2,6,23,1),rgba(15,23,42,1))]">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:font-medium focus:text-slate-950"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40">
        <div className="mx-auto max-w-6xl px-4 pt-4">
          <nav className="glass flex items-center justify-between rounded-2xl px-4 py-3">
            <div className="flex items-center gap-3">
              <NavLink
                to="/"
                className="flex items-center gap-2 rounded-xl px-2 py-1 font-semibold tracking-tight hover:bg-white/5"
              >
                <span className="grid h-8 w-8 place-items-center rounded-xl bg-white/5 ring-1 ring-slate-200/10">
                  <span className="text-sm">AS</span>
                </span>
                <span className="hidden sm:inline">Ashish Shah</span>
              </NavLink>

              <div className="hidden md:flex items-center gap-1">
                {navItems.map((item) => (
                  <NavItem key={item.to} to={item.to}>
                    {item.label}
                  </NavItem>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                className="btn-ghost hidden sm:inline-flex"
                href="/resume.pdf"
                download
              >
                Download Resume <ArrowUpRight className="h-4 w-4" />
              </a>

              <a
                className="btn-ghost inline-flex"
                href="mailto:you@example.com"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                className="btn-ghost inline-flex"
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                className="btn-ghost inline-flex"
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </nav>

          <div className="glass mt-3 flex md:hidden items-center justify-between rounded-2xl px-3 py-2">
            {navItems.map((item) => (
              <NavItem key={item.to} to={item.to}>
                {item.label}
              </NavItem>
            ))}
          </div>
        </div>
      </header>

      <main id="content" className="mx-auto max-w-6xl px-4 py-10">
        <Outlet />
      </main>

      <footer className="mx-auto max-w-6xl px-4 pb-10">
        <div className="glass flex flex-col gap-3 rounded-2xl px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-300">
            © {new Date().getFullYear()} Ashish Shah. Built with React + Tailwind.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <span className="chip">Open to roles</span>
            <span className="chip">Cybersecurity • Data Science</span>
            <span className="chip">Remote/Onsite</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

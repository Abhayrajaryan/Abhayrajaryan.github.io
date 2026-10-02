import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Briefcase,
  Code2,
  Download,
  Menu,
  Sparkles,
  X,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);

const resumeUrl =
  "https://drive.google.com/file/d/1D9-qbcu7i0PSvtOzNcQg0Fi0pch5Y_3t/view?usp=drive_link";
const githubUrl = "https://github.com/Abhayrajaryan";
const linkedInUrl = "https://www.linkedin.com/in/abhay-raj-80108b21b";
const leetcodeUrl = "https://leetcode.com/u/AbhayRajAryan/";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Learning", href: "#learning" },
  { label: "Contact", href: "#contact" },
];

const experience = [
  {
    period: "Nov 2024 — May 2026",
    company: "Trilasoft Solutions Pvt. Ltd.",
    role: "Jr. Software Engineer",
    summary:
      "Worked across enterprise Spring Boot applications with secure API workflows, HTTP-only cookie based authentication, OpenFeign and RestTemplate usage, production debugging, and migration work spanning MySQL and Hibernate upgrades.",
    tags: [
      "Spring Boot",
      "REST APIs",
      "OpenFeign",
      "MySQL",
      "Hibernate",
      "Git",
    ],
  },
  {
    period: "May 2026 — Present",
    company: "NorthernGeek.in",
    role: "Contract Software Engineer",
    summary:
      "Contributed to HPM EIS with attendance, leave, employee, holiday, and shift policy workflows, RBAC, scheduled synchronization, Redis usage, and production debugging across Linux and Nginx-based deployment environments.",
    tags: [
      "Java",
      "Spring Boot",
      "Redis",
      "Eureka",
      "Spring Cloud Gateway",
      "MySQL",
      "Linux",
    ],
  },
];

const projects = [
  {
    name: "HPM EIS",
    kind: "Enterprise employee system",
    summary:
      "A production-grade employee information platform covering attendance, leave, employee management, holiday rules, shift policies, and RBAC-driven access control for live operational workflows.",
    bulletPoints: [
      "Attendance and leave management",
      "Employee lifecycle and access rules",
      "Shift and holiday configuration",
      "Biometric attendance integration",
      "Scheduled synchronization and production debugging",
    ],
    tags: ["Java", "Spring Boot", "MySQL", "Redis", "Eureka", "Gateway"],
  },
  {
    name: "Project Anupam",
    kind: "E-commerce platform",
    projectUrl: "https://projectanupam.in/index.html",
    summary:
      "A backend-driven commerce platform focused on creator workflows, product handling, cart flow, and order processing with an emphasis on smooth product operations and application reliability.",
    bulletPoints: [
      "Creator and product workflows",
      "Cart and order progression",
      "Builder mindset for operational flow",
      "Reliable backend architecture",
    ],
    tags: ["Java", "Spring Boot", "REST APIs", "MySQL"],
  },
  {
    name: "MySQL MCP Server",
    kind: "Self-hosted AI database gateway",
    summary:
      "A self-hosted gateway that lets AI assistants interact with MySQL through API key authentication, dynamic database registration, permission-based access, query timeouts, row limits, and read-only default behavior.",
    bulletPoints: [
      "API key authentication",
      "Dynamic database registration",
      "Permission-based access control",
      "Audit logging and query limits",
      "MCP compatibility",
    ],
    tags: ["Java", "Spring Boot", "MySQL", "MCP"],
  },
];

const skillGroups = [
  {
    title: "Backend",
    items: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "JDBC",
      "OpenFeign",
      "RestTemplate",
      "Spring Security",
      "JWT",
    ],
  },
  {
    title: "Data",
    items: [
      "MySQL",
      "Spring Data JPA",
      "Hibernate",
      "Redis",
      "Database Design",
      "SQL Optimization",
    ],
  },
  {
    title: "Architecture",
    items: [
      "Microservices",
      "Distributed Systems",
      "Eureka",
      "Spring Cloud Gateway",
      "Event-Driven Design",
    ],
  },
  {
    title: "Security & auth",
    items: [
      "Authentication",
      "Authorization",
      "RBAC",
      "HTTP-only cookies",
      "Session Management",
    ],
  },
  {
    title: "Fundamentals",
    items: [
      "OOP",
      "DSA",
      "System Design",
      "Low-Level Design",
      "Design Patterns",
    ],
  },
  {
    title: "Tools",
    items: [
      "Git",
      "Postman",
      "IntelliJ IDEA",
      "VS Code",
      "Linux",
      "Nginx",
      "Docker",
    ],
  },
];

const learning = [
  "Advanced DSA",
  "Low-Level Design",
  "System Design",
  "Distributed Systems",
  "MongoDB",
  "React Native",
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const ctx = gsap.context(() => {
      if (reducedMotion) {
        gsap.set(".reveal", { opacity: 1, y: 0 });
        return;
      }

      const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
      heroTl
        .from(".nav-shell", { y: -18, opacity: 0, duration: 0.55 })
        .from(".eyebrow", { y: 18, opacity: 0, duration: 0.5 }, 0.08)
        .from(".hero-name", { y: 28, opacity: 0, duration: 0.8 }, 0.18)
        .from(".lead", { y: 18, opacity: 0, duration: 0.55 }, 0.42)
        .from(
          ".cta-row > *",
          { y: 18, opacity: 0, duration: 0.45, stagger: 0.08 },
          0.6,
        )
        .from(
          ".hero-meta > *",
          { y: 12, opacity: 0, duration: 0.4, stagger: 0.08 },
          0.72,
        );

      gsap.utils.toArray(".reveal").forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 82%",
            },
          },
        );
      });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className="page-shell">
      <header className="topbar">
        <nav className="nav-shell" aria-label="Main navigation">
          <a href="#top" className="brand" aria-label="Abhay Raj home">
            AR
          </a>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>

          <a className="nav-cta" href="#contact">
            Let&rsquo;s build
          </a>

          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((state) => !state)}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="hero-inner reveal">
            <p className="eyebrow">Backend Software Engineer</p>
            <h1 className="hero-name">ABHAY RAJ</h1>
            <p className="lead">
              I build backend systems, APIs and production software — and I
              enjoy figuring out how things work under the hood.
            </p>

            <div className="cta-row">
              <a href="#work" className="primary-btn">
                View work <ArrowUpRight size={18} />
              </a>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="secondary-btn"
              >
                Download resume <Download size={18} />
              </a>
            </div>

            <div className="hero-meta" aria-label="Core stack">
              <span>Java</span>
              <span>Spring Boot</span>
              <span>REST APIs</span>
              <span>MySQL</span>
            </div>
          </div>
        </section>

        <section id="work" className="section about-section">
          <div className="section-heading reveal">
            <p className="section-label">Currently</p>
            <h2>Backend systems, built with a product mindset.</h2>
          </div>

          <div className="about-grid reveal">
            <div className="about-panel">
              <p>
                I work across Java, Spring Boot, REST APIs, databases, and
                real-world systems that need to stay reliable when the load is
                on.
              </p>
            </div>
            <div className="about-panel">
              <p>
                I like turning complex problems into clear backend architecture,
                debugging live issues, and building software that feels
                dependable from the first request to the last deployment.
              </p>
            </div>
          </div>
        </section>

        <section className="section experience-section">
          <div className="section-heading reveal">
            <p className="section-label">Experience</p>
            <h2>Real work, real systems, real responsibility.</h2>
          </div>

          <div className="timeline">
            {experience.map((item) => (
              <article key={item.company} className="timeline-item reveal">
                <div className="timeline-marker">
                  <span />
                </div>
                <div className="timeline-body">
                  <div className="timeline-meta">
                    <span>{item.period}</span>
                    <Briefcase size={16} />
                  </div>
                  <h3>{item.company}</h3>
                  <p className="role-line">{item.role}</p>
                  <p className="summary">{item.summary}</p>
                  <div className="chip-row">
                    {item.tags.map((tag) => (
                      <span key={tag} className="chip">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-heading reveal">
            <p className="section-label">Projects</p>
            <h2>Building systems that support real workflows.</h2>
          </div>

          {projects.map((project, index) => (
            <article key={project.name} className="project reveal">
              <div className="project-copy">
                <div className="project-topline">
                  <span className="project-index">0{index + 1}</span>
                  <span className="project-kind">{project.kind}</span>
                </div>
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
                <ul>
                  {project.bulletPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="chip-row">
                  {project.tags.map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>

                {project.projectUrl && (
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    Visit project <ArrowUpRight size={18} />
                  </a>
                )}
              </div>

              <div
                className="project-panel"
                aria-label={project.name + " workflow overview"}
              >
                <div className="mini-card header">{project.name}</div>
                {project.bulletPoints.map((point, pointIndex) => (
                  <div
                    key={point}
                    className={`mini-card card-${pointIndex + 1}`}
                  >
                    {point}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </section>

        <section id="stack" className="section stack-section">
          <div className="section-heading reveal">
            <p className="section-label">Stack</p>
            <h2>A practical toolkit shaped by backend work.</h2>
          </div>

          <div className="stack-grid reveal">
            {skillGroups.map((group) => (
              <div key={group.title} className="stack-group">
                <h3>{group.title}</h3>
                <div className="stack-items">
                  {group.items.map((item) => (
                    <span key={item} className="stack-item">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="learning" className="section learning-section">
          <div className="section-heading reveal">
            <p className="section-label">Currently learning</p>
            <h2>Still building, still learning, still curious.</h2>
          </div>

          <div className="learning-grid reveal">
            {learning.map((item) => (
              <div key={item} className="learning-card">
                <Sparkles size={16} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section problem-section">
          <div className="problem-box reveal">
            <div>
              <p className="section-label">Problem solving</p>
              <h2>
                I regularly practice DSA to sharpen problem-solving and
                engineering judgment.
              </h2>
            </div>
            <a
              href={leetcodeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-link"
            >
              View LeetCode <ArrowUpRight size={18} />
            </a>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-card reveal">
            <p className="section-label">Contact</p>
            <h2>Let&rsquo;s build something thoughtful.</h2>
            <div className="contact-links">
              <a href={githubUrl} target="_blank" rel="noreferrer">
                GitHub <ArrowUpRight size={18} />
              </a>
              <a href={linkedInUrl} target="_blank" rel="noreferrer">
                LinkedIn <ArrowUpRight size={18} />
              </a>
              <a href={resumeUrl} target="_blank" rel="noreferrer">
                Resume <Download size={18} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>ABHAY RAJ</span>
      </footer>
    </div>
  );
}

export default App;

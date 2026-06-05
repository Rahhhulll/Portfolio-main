/* eslint-disable react/prop-types */
import { ReactLenis } from "lenis/react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import {
  Bot,
  CalendarDays,
  CheckCircle2,
  CircleDollarSign,
  ExternalLink,
  FileText,
  Github,
  GraduationCap,
  Mic2,
  ShieldCheck,
  Sparkles,
  UploadCloud,
  Users,
} from "lucide-react";

const featuredProject = {
  title: "AI Interview Platform",
  category: "Featured AI Product",
  metric: "AI Feedback Engine",
  description:
    "An AI-powered interview preparation platform that allows users to attend mock interviews, receive AI-generated feedback, analyze strengths and weaknesses, and track improvement.",
  techStack: ["Angular", "Node.js", "Express.js", "MongoDB", "OpenAI API"],
  features: [
    "AI Mock Interviews",
    "Voice-based Questions",
    "AI Feedback",
    "Performance Analytics",
    "Dashboard Reports",
  ],
  visual: "interview",
  githubLink: "https://github.com/your-username/ai-interview-platform",
  liveLink: "https://ai-interview-platform.example.com",
};

const projects = [
  {
    title: "CRM Management System",
    category: "Sales Operations",
    description:
      "A CRM platform for managing leads, customer pipelines, team activity, and sales performance with role-aware access.",
    techStack: ["Angular", "Node.js", "MongoDB"],
    features: ["Lead Management", "Customer Tracking", "Sales Dashboard", "Role Based Access"],
    visual: "crm",
    githubLink: "https://github.com/your-username/crm-management-system",
    liveLink: "https://crm-management.example.com",
  },
  {
    title: "Attendance Management System",
    category: "Workforce Automation",
    description:
      "A workforce attendance solution for employee check-ins, leave workflows, admin reviews, and reporting.",
    techStack: ["Angular", "Express", "MongoDB"],
    features: ["Employee Attendance", "Leave Requests", "Reports", "Admin Dashboard"],
    visual: "attendance",
    githubLink: "https://github.com/your-username/attendance-management-system",
    liveLink: "https://attendance-management.example.com",
  },
  {
    title: "HRMS Portal",
    category: "People Systems",
    description:
      "A human resources portal for employee lifecycle operations, payroll visibility, recruitment, and performance tracking.",
    techStack: ["Angular", "Node.js", "PostgreSQL"],
    features: ["Employee Management", "Payroll", "Recruitment", "Performance Tracking"],
    visual: "hrms",
    githubLink: "https://github.com/your-username/hrms-portal",
    liveLink: "https://hrms-portal.example.com",
  },
  {
    title: "AI Resume Analyzer",
    category: "AI Analytics",
    description:
      "An AI resume intelligence tool that evaluates ATS readiness, highlights missing keywords, and generates focused suggestions.",
    techStack: ["React", "Node.js", "OpenAI"],
    features: ["Resume Upload", "ATS Score", "Keyword Analysis", "Resume Suggestions"],
    visual: "resume",
    githubLink: "https://github.com/your-username/ai-resume-analyzer",
    liveLink: "https://ai-resume-analyzer.example.com",
  },
  {
    title: "School ERP System",
    category: "Education ERP",
    description:
      "A school ERP dashboard for student records, fee workflows, attendance tracking, and result management.",
    techStack: ["Angular", "Node.js", "MongoDB"],
    features: ["Student Management", "Fees Management", "Attendance", "Result Management"],
    visual: "school",
    githubLink: "https://github.com/your-username/school-erp-system",
    liveLink: "https://school-erp-system.example.com",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0 },
};

const cardContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function Projects() {
  return (
    <ReactLenis root>
      <main className="min-h-screen overflow-hidden bg-[#04081A] text-white">
        <section className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(59,130,246,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.08)_1px,transparent_1px)] bg-[size:38px_38px]" />
          <div className="absolute left-1/2 top-0 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute bottom-20 right-0 -z-10 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="mb-10 flex flex-col gap-5 lg:mb-14 lg:flex-row lg:items-end lg:justify-between"
          >
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-cyan-200 shadow-[0_0_32px_rgba(34,211,238,0.12)]">
                <Sparkles className="h-4 w-4" />
                Enterprise Project Showcase
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Production-minded systems with polished product dashboards.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                A senior full stack portfolio section focused on AI workflows, SaaS dashboards,
                access-controlled platforms, analytics, and scalable business operations.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 rounded-[28px] border border-white/10 bg-white/[0.04] p-3 shadow-[0_24px_80px_rgba(14,165,233,0.12)] backdrop-blur-xl sm:min-w-[360px]">
              {[
                ["3.6+", "Years"],
                ["6", "Projects"],
                ["MERN", "Full Stack"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-cyan-400/10 bg-slate-950/60 p-4 text-center">
                  <p className="text-xl font-bold text-cyan-200">{value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-500">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <FeaturedProjectCard project={featuredProject} />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            variants={cardContainer}
            className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </motion.div>
        </section>
      </main>
    </ReactLenis>
  );
}

function FeaturedProjectCard({ project }) {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={fadeUp}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="group relative overflow-hidden rounded-[32px] bg-gradient-to-br from-cyan-400/60 via-blue-500/25 to-slate-800/80 p-px shadow-[0_32px_120px_rgba(14,165,233,0.20)]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.22),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.18),transparent_36%)] opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative grid gap-8 rounded-[31px] border border-white/10 bg-slate-950/88 p-5 backdrop-blur-xl lg:grid-cols-[1.08fr_0.92fr] lg:p-8">
        <DashboardPreview name={project.visual} featured />

        <div className="flex flex-col justify-between gap-7">
          <div>
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100">
                <ShieldCheck className="h-4 w-4" />
                {project.category}
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-300">
                {project.metric}
              </span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {project.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">{project.description}</p>
          </div>

          <TechBadges techStack={project.techStack} />

          <div className="grid gap-3 sm:grid-cols-2">
            {project.features.map((feature) => (
              <FeatureItem key={feature} feature={feature} />
            ))}
          </div>

          <ProjectActions githubLink={project.githubLink} liveLink={project.liveLink} featured />
        </div>
      </div>
    </motion.article>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.article
      variants={fadeUp}
      transition={{ duration: 0.65, ease: "easeOut", delay: index * 0.03 }}
      whileHover={{ y: -10, scale: 1.015 }}
      className="group relative overflow-hidden rounded-[28px] bg-gradient-to-br from-white/18 via-cyan-400/18 to-blue-500/10 p-px shadow-[0_20px_70px_rgba(14,165,233,0.10)]"
    >
      <div className="absolute inset-0 bg-cyan-400/0 blur-2xl transition duration-500 group-hover:bg-cyan-400/10" />
      <div className="relative flex h-full flex-col overflow-hidden rounded-[27px] border border-white/10 bg-slate-950/86 backdrop-blur-xl">
        <DashboardPreview name={project.visual} />

        <div className="flex flex-1 flex-col p-6">
          <div className="mb-4 flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300/80">
                {project.category}
              </p>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-white">{project.title}</h3>
            </div>
            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-100">
              0{index + 2}
            </span>
          </div>

          <p className="text-sm leading-7 text-slate-300">{project.description}</p>

          <div className="mt-5">
            <TechBadges techStack={project.techStack} compact />
          </div>

          <ul className="mt-6 grid gap-3 text-sm text-slate-300">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-center gap-3">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-300" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-6">
            <ProjectActions githubLink={project.githubLink} liveLink={project.liveLink} />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function DashboardPreview({ name, featured = false }) {
  const previews = {
    interview: <InterviewPreview featured={featured} />,
    crm: <CrmPreview />,
    attendance: <AttendancePreview />,
    hrms: <HrmsPreview />,
    resume: <ResumePreview />,
    school: <SchoolPreview />,
  };

  return (
    <div
      className={`relative overflow-hidden border border-white/10 bg-slate-900/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] ${
        featured
          ? "min-h-[360px] rounded-[26px] p-4 sm:p-5"
          : "min-h-[250px] rounded-t-[27px] p-4"
      }`}
      aria-label={`${name} application dashboard screenshot preview`}
      role="img"
    >
      {previews[name]}
    </div>
  );
}

function PreviewShell({ children, title, badge, className = "" }) {
  return (
    <div
      className={`relative flex h-full min-h-[220px] flex-col overflow-hidden rounded-[22px] border border-white/10 bg-[#071426]/92 p-4 ${className}`}
    >
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-200">
            {title}
          </p>
          <div className="mt-2 h-1.5 w-28 rounded-full bg-slate-600/70" />
        </div>
        <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-200">
          {badge}
        </span>
      </div>
      {children}
    </div>
  );
}

function InterviewPreview({ featured }) {
  return (
    <PreviewShell title="AI Interview Studio" badge="Live Session" className="bg-[#061526]">
      <div className={`grid flex-1 gap-4 ${featured ? "lg:grid-cols-[1.08fr_0.92fr]" : "grid-cols-1"}`}>
        <div className="flex flex-col gap-3 rounded-2xl border border-cyan-300/10 bg-slate-950/45 p-3">
          <div className="flex items-center gap-3 rounded-xl bg-cyan-400/10 p-3">
            <Bot className="h-6 w-6 text-cyan-200" />
            <div>
              <p className="text-xs font-semibold text-white">AI Interviewer</p>
              <p className="text-[11px] text-slate-400">Explain your Node.js API architecture.</p>
            </div>
          </div>
          <div className="ml-auto max-w-[82%] rounded-xl bg-blue-500/15 p-3 text-[11px] leading-5 text-blue-100">
            I used JWT authentication, layered services, and MongoDB indexes for faster lookup.
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
            <div className="mb-2 flex items-center gap-2 text-xs font-semibold text-cyan-100">
              <Mic2 className="h-4 w-4" />
              Voice response
            </div>
            <div className="flex h-12 items-center gap-1.5">
              {[16, 28, 20, 38, 44, 24, 34, 18, 42, 30, 22, 36].map((height, index) => (
                <span
                  key={`${height}-${index}`}
                  className="w-full rounded-full bg-gradient-to-t from-cyan-500 to-blue-300"
                  style={{ height }}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="grid gap-3">
          <div className="rounded-2xl border border-cyan-300/10 bg-white/[0.04] p-4">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-xs text-slate-400">Interview Score</p>
                <p className="mt-1 text-3xl font-bold text-white">92%</p>
              </div>
              <div className="grid h-20 w-20 place-items-center rounded-full border-8 border-cyan-300/80 text-sm font-bold text-cyan-100">
                A
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {["Clarity", "System Design", "Backend", "Confidence"].map((item, index) => (
              <div key={item} className="rounded-xl border border-white/10 bg-slate-950/45 p-3">
                <p className="text-[11px] text-slate-400">{item}</p>
                <div className="mt-2 h-1.5 rounded-full bg-slate-700">
                  <div className={`h-full rounded-full bg-cyan-300 ${index === 1 ? "w-3/4" : "w-5/6"}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PreviewShell>
  );
}

function CrmPreview() {
  return (
    <PreviewShell title="Sales CRM" badge="Q4 Pipeline" className="bg-[#07172c]">
      <div className="grid flex-1 grid-cols-[0.9fr_1.1fr] gap-3">
        <div className="space-y-3">
          {[
            ["Revenue", "$84.2k", "from-cyan-400 to-blue-500"],
            ["Won Deals", "36", "from-emerald-300 to-cyan-400"],
            ["Lead Score", "78%", "from-violet-300 to-blue-400"],
          ].map(([label, value, gradient]) => (
            <div key={label} className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
              <p className="text-[11px] text-slate-400">{label}</p>
              <p className="mt-1 text-lg font-bold text-white">{value}</p>
              <div className="mt-2 h-1.5 rounded-full bg-slate-700">
                <div className={`h-full w-4/5 rounded-full bg-gradient-to-r ${gradient}`} />
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          <div className="rounded-xl border border-white/10 bg-slate-950/45 p-3">
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold text-cyan-100">
              <CircleDollarSign className="h-4 w-4" />
              Revenue Trend
            </div>
            <div className="flex h-20 items-end gap-2">
              {[45, 62, 54, 78, 70, 92, 84].map((height) => (
                <span
                  key={height}
                  className="flex-1 rounded-t-lg bg-gradient-to-t from-blue-600 to-cyan-300"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
          <div className="grid flex-1 grid-cols-3 gap-2">
            {["New", "Qualified", "Closed"].map((stage, index) => (
              <div key={stage} className="rounded-xl border border-white/10 bg-white/[0.04] p-2">
                <p className="text-[10px] font-semibold text-slate-300">{stage}</p>
                {[0, 1, 2].map((card) => (
                  <div
                    key={card}
                    className={`mt-2 h-8 rounded-lg ${index === 2 ? "bg-emerald-400/20" : "bg-cyan-400/12"}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </PreviewShell>
  );
}

function AttendancePreview() {
  return (
    <PreviewShell title="Attendance Ops" badge="June" className="bg-[#061a24]">
      <div className="grid flex-1 grid-cols-[1fr_0.9fr] gap-3">
        <div className="rounded-2xl border border-white/10 bg-slate-950/45 p-3">
          <div className="mb-3 flex items-center gap-2 text-xs font-semibold text-cyan-100">
            <CalendarDays className="h-4 w-4" />
            Team Calendar
          </div>
          <div className="grid grid-cols-7 gap-1.5">
            {Array.from({ length: 28 }).map((_, index) => (
              <span
                key={index}
                className={`aspect-square rounded-md ${
                  [2, 9, 17, 22].includes(index)
                    ? "bg-amber-300/70"
                    : [5, 13, 21].includes(index)
                      ? "bg-rose-400/70"
                      : "bg-cyan-300/35"
                }`}
              />
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
            <p className="text-[11px] text-slate-400">Present Today</p>
            <p className="mt-1 text-2xl font-bold text-white">148 / 156</p>
          </div>
          {["Sick Leave", "Remote", "Late Check-in"].map((label, index) => (
            <div key={label} className="rounded-xl border border-white/10 bg-slate-950/45 p-3">
              <div className="flex items-center justify-between text-[11px] text-slate-300">
                <span>{label}</span>
                <span>{[6, 18, 4][index]}</span>
              </div>
              <div className="mt-2 h-1.5 rounded-full bg-slate-700">
                <div className={`h-full rounded-full bg-cyan-300 ${index === 1 ? "w-4/5" : "w-2/5"}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </PreviewShell>
  );
}

function HrmsPreview() {
  return (
    <PreviewShell title="HRMS Command Center" badge="People" className="bg-[#08152b]">
      <div className="grid flex-1 grid-cols-[0.92fr_1.08fr] gap-3">
        <div className="space-y-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold text-cyan-100">
              <Users className="h-4 w-4" />
              Employees
            </div>
            {[0, 1, 2].map((item) => (
              <div key={item} className="mt-2 flex items-center gap-2 rounded-lg bg-slate-950/45 p-2">
                <span className="h-7 w-7 rounded-full bg-gradient-to-br from-cyan-300 to-blue-500" />
                <div className="flex-1">
                  <div className="h-2 w-2/3 rounded-full bg-slate-400/80" />
                  <div className="mt-1.5 h-1.5 w-1/2 rounded-full bg-slate-700" />
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-xl border border-emerald-300/20 bg-emerald-300/10 p-3">
            <p className="text-[11px] text-emerald-100">Payroll Processed</p>
            <p className="mt-1 text-xl font-bold text-white">$62.8k</p>
          </div>
        </div>
        <div className="grid gap-3">
          <div className="grid grid-cols-3 gap-2">
            {["Applied", "Screen", "Offer"].map((stage, index) => (
              <div key={stage} className="rounded-xl border border-white/10 bg-slate-950/45 p-2">
                <p className="text-[10px] text-slate-400">{stage}</p>
                <p className="mt-1 text-lg font-bold text-white">{[48, 16, 5][index]}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
            <p className="mb-3 text-xs font-semibold text-cyan-100">Recruitment Pipeline</p>
            <div className="flex h-24 items-end gap-2">
              {[95, 72, 58, 42, 28].map((height, index) => (
                <span
                  key={height}
                  className={`flex-1 rounded-t-xl ${
                    index < 2 ? "bg-cyan-300" : index === 2 ? "bg-blue-400" : "bg-violet-400"
                  }`}
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </PreviewShell>
  );
}

function ResumePreview() {
  return (
    <PreviewShell title="Resume Intelligence" badge="ATS" className="bg-[#0b1326]">
      <div className="grid flex-1 grid-cols-[0.92fr_1.08fr] gap-3">
        <div className="rounded-2xl border border-dashed border-cyan-300/30 bg-cyan-300/[0.08] p-4">
          <UploadCloud className="h-7 w-7 text-cyan-200" />
          <p className="mt-3 text-sm font-semibold text-white">Upload Resume</p>
          <p className="mt-1 text-[11px] text-slate-400">PDF, DOCX, LinkedIn export</p>
          <div className="mt-4 space-y-2">
            <div className="h-2 rounded-full bg-cyan-300/80" />
            <div className="h-2 w-3/4 rounded-full bg-slate-600/80" />
            <div className="h-2 w-5/6 rounded-full bg-slate-700/80" />
          </div>
        </div>
        <div className="space-y-3">
          <div className="grid grid-cols-[84px_1fr] gap-3">
            <div className="grid h-20 w-20 place-items-center rounded-full border-[10px] border-violet-400 text-xl font-bold text-white">
              86
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
              <p className="text-xs font-semibold text-cyan-100">ATS Score</p>
              <p className="mt-1 text-[11px] leading-5 text-slate-400">Strong backend keywords and clear impact metrics.</p>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/45 p-3">
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold text-cyan-100">
              <FileText className="h-4 w-4" />
              Keyword Analysis
            </div>
            <div className="flex flex-wrap gap-2">
              {["REST API", "MongoDB", "Angular", "OpenAI", "CI/CD"].map((keyword) => (
                <span key={keyword} className="rounded-full bg-violet-400/15 px-2.5 py-1 text-[10px] text-violet-100">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PreviewShell>
  );
}

function SchoolPreview() {
  return (
    <PreviewShell title="School ERP" badge="Campus" className="bg-[#06162b]">
      <div className="grid flex-1 grid-cols-[1.05fr_0.95fr] gap-3">
        <div className="space-y-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-400/20">
                <GraduationCap className="h-5 w-5 text-blue-100" />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">Student Dashboard</p>
                <p className="text-[11px] text-slate-400">1,240 active students</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {[
              ["Fees", "82%", "bg-emerald-300"],
              ["Attendance", "94%", "bg-cyan-300"],
              ["Results", "A+", "bg-blue-300"],
              ["Classes", "42", "bg-violet-300"],
            ].map(([label, value, color]) => (
              <div key={label} className="rounded-xl border border-white/10 bg-slate-950/45 p-3">
                <p className="text-[11px] text-slate-400">{label}</p>
                <p className="mt-1 text-lg font-bold text-white">{value}</p>
                <span className={`mt-2 block h-1.5 w-3/4 rounded-full ${color}`} />
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-slate-950/45 p-3">
          <p className="mb-3 text-xs font-semibold text-cyan-100">Result Trends</p>
          <div className="space-y-3">
            {["Grade 10", "Grade 9", "Grade 8", "Grade 7"].map((grade, index) => (
              <div key={grade}>
                <div className="flex justify-between text-[11px] text-slate-300">
                  <span>{grade}</span>
                  <span>{[91, 88, 84, 79][index]}%</span>
                </div>
                <div className="mt-1.5 h-2 rounded-full bg-slate-700">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-400 to-cyan-300"
                    style={{ width: `${[91, 88, 84, 79][index]}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PreviewShell>
  );
}

function TechBadges({ techStack, compact = false }) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {techStack.map((tech) => (
        <span
          key={tech}
          className={`rounded-full border border-cyan-400/20 bg-cyan-400/10 font-semibold text-cyan-100 shadow-[0_0_20px_rgba(34,211,238,0.08)] ${
            compact ? "px-3 py-1.5 text-[11px]" : "px-4 py-2 text-xs"
          }`}
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

function FeatureItem({ feature }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-200">
      <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-300" />
      <span>{feature}</span>
    </div>
  );
}

function ProjectActions({ githubLink, liveLink, featured = false }) {
  return (
    <div className={`flex flex-col gap-3 ${featured ? "sm:flex-row" : "sm:flex-row"}`}>
      <a
        href={githubLink}
        target="_blank"
        rel="noreferrer"
        className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-cyan-300/10"
      >
        <Github className="h-4 w-4" />
        GitHub
      </a>
      <a
        href={liveLink}
        target="_blank"
        rel="noreferrer"
        className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 px-5 py-3 text-sm font-bold text-slate-950 shadow-[0_14px_36px_rgba(14,165,233,0.26)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_48px_rgba(14,165,233,0.36)]"
      >
        Live Demo
        <ExternalLink className="h-4 w-4" />
      </a>
    </div>
  );
}

const projectShape = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  visual: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
};

FeaturedProjectCard.propTypes = {
  project: PropTypes.shape({
    ...projectShape,
    metric: PropTypes.string.isRequired,
  }).isRequired,
};

ProjectCard.propTypes = {
  index: PropTypes.number.isRequired,
  project: PropTypes.shape(projectShape).isRequired,
};

DashboardPreview.propTypes = {
  name: PropTypes.string.isRequired,
  featured: PropTypes.bool,
};

TechBadges.propTypes = {
  techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
  compact: PropTypes.bool,
};

FeatureItem.propTypes = {
  feature: PropTypes.string.isRequired,
};

ProjectActions.propTypes = {
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
  featured: PropTypes.bool,
};

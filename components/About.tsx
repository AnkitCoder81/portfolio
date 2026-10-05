import { Section } from "./Card"; import Reveal from "./Reveal"; import { stats } from "@/lib/data";
export default function About() {
  return (
    <Section id="about" title="Engineering software. Building intelligent systems.">
      <div className="grid gap-12 lg:grid-cols-2">
        <Reveal><p className="leading-relaxed text-mute">I&apos;m a B.Tech Computer Science student with a strong foundation in Data Structures, Algorithms, and Object-Oriented Programming. I build full-stack, agentic AI platforms with Python, Node.js, React, LangChain, LangGraph, FastAPI, and Docker. I designed and shipped CortexAI, a production-style multi-agent SaaS platform with microservices, billing, and cloud storage on AWS. I&apos;m looking for Software Engineer and AI Engineer internship and fresher roles where I can apply agentic system design and full-stack development.</p></Reveal>
        <Reveal delay={.1}><dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line">
          {stats.map(([v,l])=><div key={l} className="bg-panel p-6"><dd className="text-3xl font-semibold tracking-tight">{v}</dd><dt className="mt-1 text-sm text-mute">{l}</dt></div>)}
        </dl></Reveal>
      </div>
    </Section>
  );
}

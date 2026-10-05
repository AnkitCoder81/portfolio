import { Github } from "lucide-react";
import Card, { Badge, Section } from "./Card"; import Reveal from "./Reveal"; import { projects } from "@/lib/data";
export default function Projects() {
  return (
    <Section id="more-projects" title="More projects">
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map(p=>(
          <Reveal key={p.name}><Card className="h-full p-6">
            <p className="text-sm text-accent">{p.type}</p>
            <h3 className="mt-1 text-2xl font-semibold tracking-tight">{p.name}</h3>
            <p className="mt-2 text-mute">{p.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">{p.tech.map(t=><Badge key={t}>{t}</Badge>)}</div>
            <ul className="mt-5 space-y-1.5 text-sm text-mute">{p.concepts.map(c=><li key={c}>– {c}</li>)}</ul>
            <a href={p.repo} className="mt-6 inline-flex items-center gap-2 rounded-lg border border-line px-3.5 py-2 text-sm hover:border-accent/50"><Github size={15}/>GitHub</a>
          </Card></Reveal>))}
      </div>
    </Section>
  );
}

import { Github } from "lucide-react";
import Card, { Badge } from "./Card"; import Reveal from "./Reveal"; import { Architecture, AgentSystem } from "./Architecture";
import { features, repos } from "@/lib/data";
export default function FeaturedProject() {
  return (
    <section id="projects" className="border-y border-line bg-panel/40">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
        <Reveal>
          <p className="text-sm text-accent">Featured project</p>
          <h2 className="mt-2 text-4xl font-semibold tracking-tight sm:text-6xl">CortexAI</h2>
          <p className="mt-2 text-xl text-mute">Multi-Agent AI SaaS Platform</p>
          <p className="mt-6 max-w-2xl leading-relaxed text-mute">A full-stack multi-agent AI SaaS platform built on a microservices architecture: independent gateway, agent, auth, billing, and chat services, each containerized with Docker and deployed on AWS EC2 behind an Application Load Balancer for traffic distribution across services.</p>
          <div className="mt-5 flex flex-wrap gap-2">{["Node.js","React","LangGraph","Docker","Firebase","Razorpay","AWS S3","MongoDB"].map(t=><Badge key={t}>{t}</Badge>)}</div>
          <a href={repos.cortexai} className="mt-6 inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2.5 text-sm hover:border-accent/50"><Github size={16}/>View on GitHub</a>
        </Reveal>
        <h3 className="mb-6 mt-16 text-xl font-medium">System architecture</h3>
        <Card className="p-6 sm:p-8"><Architecture/></Card>
        <div className="mt-16 grid items-center gap-10 lg:grid-cols-2">
          <div><h3 className="text-xl font-medium">Agent system</h3>
            <p className="mt-3 leading-relaxed text-mute">A LangGraph-based orchestration engine with dynamic routing and state management across 8 specialized agents, integrating multiple LLM providers, vector databases, and Tavily search for retrieval-augmented, context-aware responses.</p></div>
          <AgentSystem/>
        </div>
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(([t,d],i)=><Reveal key={t} delay={(i%4)*.05}><Card className="h-full p-5"><h4 className="font-medium">{t}</h4><p className="mt-2 text-sm leading-relaxed text-mute">{d}</p></Card></Reveal>)}
        </div>
      </div>
    </section>
  );
}

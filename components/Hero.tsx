import { ArrowDown, Download, Github } from "lucide-react";
import { links } from "@/lib/data";
export default function Hero() {
  const btn = "inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors";
  return (
    <section id="home" className="drift relative overflow-hidden pt-14">
      <div className="mx-auto grid min-h-[92vh] max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-panel px-3 py-1 text-xs text-mute"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400"/>Open to Software Engineering &amp; AI Engineering Opportunities</p>
          <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">Ankit Mishra</h1>
          <p className="mt-3 text-xl text-accent">Software Engineer | AI Engineer</p>
          <p className="mt-6 max-w-xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl">Building production-ready software and intelligent AI systems.</p>
          <p className="mt-5 max-w-xl leading-relaxed text-mute">B.Tech Computer Science student building full-stack applications, multi-agent AI systems, and scalable backend infrastructure with modern software engineering and GenAI technologies.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className={`${btn} bg-ink text-bg hover:bg-white`}><ArrowDown size={16}/>View Projects</a>
            <a href={links.github} className={`${btn} border border-line hover:border-accent/50`}><Github size={16}/>GitHub</a>
            <a href={links.resume} download className={`${btn} text-mute hover:text-ink`}><Download size={16}/>Download Resume</a>
          </div>
        </div>
        <div aria-hidden className="rounded-xl border border-line bg-panel/80 font-mono text-xs shadow-2xl shadow-black/40">
          <div className="flex gap-1.5 border-b border-line px-4 py-3"><i className="h-2.5 w-2.5 rounded-full bg-line"/><i className="h-2.5 w-2.5 rounded-full bg-line"/><i className="h-2.5 w-2.5 rounded-full bg-line"/><span className="ml-3 text-mute">orchestrator.py</span></div>
          <pre className="overflow-x-auto p-5 leading-6 text-mute"><code>{`graph = StateGraph(AgentState)
graph.add_node("router", route)
for agent in AGENTS:  # 8 specialized
    graph.add_node(agent, AGENTS[agent])
graph.add_conditional_edges(
    "router", pick_agent)
# gateway -> auth -> agent service
# docker -> ec2 -> alb
app = graph.compile()`}</code></pre>
        </div>
      </div>
    </section>
  );
}

import { Mail, MapPin } from "lucide-react";
import Reveal from "./Reveal"; import { links } from "@/lib/data";
export default function Contact() {
  const b = "inline-flex rounded-lg px-4 py-2.5 text-sm font-medium transition-colors";
  const socials = [["LinkedIn",links.linkedin],["GitHub",links.github],["LeetCode",links.leetcode],["GeeksforGeeks",links.gfg]];
  return (
    <>
      <section className="border-y border-line bg-panel/40"><div className="mx-auto max-w-6xl px-5 py-16 text-center">
        <Reveal><h2 className="text-3xl font-semibold tracking-tight">Interested in what I build?</h2>
          <p className="mx-auto mt-4 max-w-xl text-mute">Explore my resume for a detailed look at my engineering background, projects, technical skills, and achievements.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3"><a href={links.resume} target="_blank" className={`${b} bg-ink text-bg hover:bg-white`}>View Resume</a><a href={links.resume} download className={`${b} border border-line hover:border-accent/50`}>Download Resume</a></div></Reveal>
      </div></section>
      <section id="contact" className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
        <Reveal><h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">Let&apos;s Build Something Great.</h2>
          <p className="mt-5 max-w-xl text-mute">Open to conversations around software engineering, AI systems, agentic applications, and innovative technical projects.</p>
          <div className="mt-8 space-y-3">
            <a href={`mailto:${links.email}`} className="flex items-center gap-3 hover:text-accent"><Mail size={18}/>{links.email}</a>
            <p className="flex items-center gap-3 text-mute"><MapPin size={18}/>Ghaziabad, Uttar Pradesh</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 text-sm">{socials.map(([n,h])=><a key={n} href={h} className="rounded-lg border border-line px-3.5 py-2 hover:border-accent/50">{n}</a>)}</div>
        </Reveal>
      </section>
    </>
  );
}

import Card, { Badge, Section } from "./Card"; import Reveal from "./Reveal"; import { achievements, dsaTopics } from "@/lib/data";
export default function Achievements() {
  return (
    <Section id="achievements" title="Strong Fundamentals. Serious Engineering.">
      <Reveal className="mb-12"><Card className="p-6"><h3 className="mb-4 font-medium">DSA topics I practice</h3><div className="flex flex-wrap gap-2">{dsaTopics.map(t=><Badge key={t}>{t}</Badge>)}</div></Card></Reveal>
      <ol className="space-y-4 border-l border-line pl-6">
        {achievements.map(([t,d],i)=>(
          <li key={t} className="relative"><span className="absolute -left-[29px] top-6 h-2.5 w-2.5 rounded-full border border-accent bg-bg"/>
            <Reveal delay={i*.03}><Card className="p-5"><h3 className="font-medium">{t}</h3><p className="mt-1 text-sm text-mute">{d}</p></Card></Reveal></li>))}
      </ol>
    </Section>
  );
}

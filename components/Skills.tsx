import Card, { Badge, Section } from "./Card"; import Reveal from "./Reveal"; import { skills } from "@/lib/data";
export default function Skills() {
  return (
    <Section id="skills" title="Technical skills">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skills).map(([cat,items],i)=>(
          <Reveal key={cat} delay={i*.04}><Card className="h-full p-5"><h3 className="mb-4 font-medium">{cat}</h3><div className="flex flex-wrap gap-2">{items.map(s=><Badge key={s}>{s}</Badge>)}</div></Card></Reveal>
        ))}
      </div>
    </Section>
  );
}

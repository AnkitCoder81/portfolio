import Card, { Section } from "./Card"; import Reveal from "./Reveal";
export default function Education() {
  return (
    <Section id="education" title="Education">
      <Reveal><Card className="p-6 sm:p-8"><div className="flex flex-wrap items-start justify-between gap-4">
        <div><h3 className="text-xl font-semibold">Raj Kumar Goel Institute of Technology</h3><p className="mt-1 text-mute">Ghaziabad, Uttar Pradesh</p>
          <p className="mt-4">Bachelor of Technology — Computer Science &amp; Engineering</p></div>
        <dl className="sm:text-right"><dd className="text-3xl font-semibold">7.86 / 10</dd><dt className="text-sm text-mute">CGPA</dt><dd className="mt-3">2027</dd><dt className="text-sm text-mute">Expected graduation</dt></dl>
      </div></Card></Reveal>
    </Section>
  );
}

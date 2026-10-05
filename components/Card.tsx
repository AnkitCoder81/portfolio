"use client";
export default function Card({ children, className="" }:{ children:React.ReactNode; className?:string }) {
  return (
    <div className={`group relative overflow-hidden rounded-xl border border-line bg-panel transition-colors hover:border-accent/40 ${className}`}
      onMouseMove={(e)=>{ const r=e.currentTarget.getBoundingClientRect(); e.currentTarget.style.setProperty("--x",`${e.clientX-r.left}px`); e.currentTarget.style.setProperty("--y",`${e.clientY-r.top}px`); }}>
      <div className="spot pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="relative">{children}</div>
    </div>
  );
}
export const Badge = ({ children }:{ children:React.ReactNode }) => <span className="inline-block rounded-md border border-line bg-bg px-2 py-0.5 font-mono text-xs text-mute transition-transform group-hover:-translate-y-0.5">{children}</span>;
export const Section = ({ id, title, children }:{ id:string; title:string; children:React.ReactNode }) => (
  <section id={id} className="mx-auto max-w-6xl px-5 py-20 sm:py-28"><h2 className="mb-10 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>{children}</section>
);

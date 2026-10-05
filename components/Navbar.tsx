"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Github, Linkedin, FileText, Menu, X } from "lucide-react";
import { links, nav } from "@/lib/data";
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false); const [open, setOpen] = useState(false);
  useEffect(() => { const f=()=>setScrolled(window.scrollY>12); f(); window.addEventListener("scroll",f,{passive:true}); return ()=>window.removeEventListener("scroll",f); }, []);
  const href = (n:string)=> n==="Home" ? "#home" : `#${n.toLowerCase()}`;
  const ic = "rounded-md p-2 text-mute transition-colors hover:text-ink";
  const mobile: string[][] = [...nav.map(n=>[n,href(n)]),["GitHub",links.github],["LinkedIn",links.linkedin],["Resume",links.resume]];
  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all ${scrolled||open ? "border-line bg-bg/70 backdrop-blur-xl" : "border-transparent"}`}>
      <nav aria-label="Primary" className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5">
        <a href="#home" className="font-semibold tracking-tight">Ankit Mishra</a>
        <ul className="hidden gap-6 text-sm text-mute lg:flex">{nav.map(n=><li key={n}><a className="transition-colors hover:text-ink" href={href(n)}>{n}</a></li>)}</ul>
        <div className="hidden items-center gap-1 lg:flex">
          <a className={ic} href={links.github} aria-label="GitHub"><Github size={18}/></a>
          <a className={ic} href={links.linkedin} aria-label="LinkedIn"><Linkedin size={18}/></a>
          <a className="ml-1 inline-flex items-center gap-1.5 rounded-md border border-line px-3 py-1.5 text-sm hover:border-accent/50" href={links.resume} target="_blank"><FileText size={14}/>Resume</a>
        </div>
        <button className="p-2 lg:hidden" aria-label="Toggle menu" aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
      </nav>
      <AnimatePresence>{open && (
        <motion.div initial={{ height:0, opacity:0 }} animate={{ height:"auto", opacity:1 }} exit={{ height:0, opacity:0 }} className="overflow-hidden lg:hidden">
          <ul className="space-y-1 px-5 pb-5">{mobile.map(([n,h])=><li key={n}><a onClick={()=>setOpen(false)} className="block rounded-md px-2 py-2.5 text-lg text-mute hover:text-ink" href={h}>{n}</a></li>)}</ul>
        </motion.div>)}</AnimatePresence>
    </header>
  );
}

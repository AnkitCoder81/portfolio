"use client";
import { motion, useReducedMotion } from "framer-motion";
import { agents, services } from "@/lib/data";
const Node = ({ children, accent }:{ children:React.ReactNode; accent?:boolean }) => <div className={`rounded-lg border px-3 py-2 text-center text-sm ${accent?"border-accent/50 bg-accent/10":"border-line bg-bg"}`}>{children}</div>;
const Arrow = () => <svg width="12" height="28" className="mx-auto" aria-hidden><line x1="6" y1="0" x2="6" y2="28" stroke="#7c9cff" strokeOpacity=".7" className="flow"/></svg>;
export function Architecture() {
  const reduce = useReducedMotion();
  const seq = ["User","API Gateway","Authentication","Agent Service","Specialized AI Agents"];
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div>{seq.map((s,i)=>(
        <motion.div key={s} initial={reduce?false:{ opacity:0, y:8 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*.18 }}>
          <Node accent={i===3}>{s}</Node>{i<seq.length-1 && <Arrow/>}
        </motion.div>))}</div>
      <div className="flex flex-col justify-center">
        <p className="mb-2 text-xs text-mute">Independent services</p>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">{services.map(s=><Node key={s}>{s}</Node>)}</div>
        <Arrow/><Node>Docker Containers</Node><Arrow/><Node>AWS EC2</Node><Arrow/><Node accent>Application Load Balancer</Node>
      </div>
    </div>
  );
}
export function AgentSystem() {
  const cx=200, cy=200, r=145;
  return (
    <svg viewBox="0 0 400 400" className="mx-auto w-full max-w-md" role="img" aria-label="LangGraph orchestrator routing to eight specialized agents">
      {agents.map((a,i)=>{ const t=(i/8)*2*Math.PI-Math.PI/2, x=cx+r*Math.cos(t), y=cy+r*Math.sin(t);
        return <g key={a}><line x1={cx} y1={cy} x2={x} y2={y} stroke="#7c9cff" strokeOpacity=".5" className="flow" style={{ animationDelay:`${i*.15}s` }}/>
          <rect x={x-34} y={y-15} width="68" height="30" rx="8" fill="#101013" stroke="#26262b"/>
          <text x={x} y={y+4} textAnchor="middle" fontSize="11" fill="#ededf0">{a}</text></g>; })}
      <rect x={cx-58} y={cy-26} width="116" height="52" rx="12" fill="#7c9cff1a" stroke="#7c9cff"/>
      <text x={cx} y={cy-3} textAnchor="middle" fontSize="11" fill="#ededf0">LangGraph</text>
      <text x={cx} y={cy+13} textAnchor="middle" fontSize="11" fill="#ededf0">Orchestrator</text>
    </svg>
  );
}

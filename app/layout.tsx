import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
const sans = Inter({ subsets:["latin"], variable:"--font-sans" });
const mono = JetBrains_Mono({ subsets:["latin"], variable:"--font-mono" });
const title = "Ankit Mishra | Software Engineer & AI Engineer";
const description = "Ankit Mishra is a Software Engineer and AI Engineer building full-stack applications, multi-agent AI systems, and scalable software using modern cloud, backend, and GenAI technologies.";
export const metadata: Metadata = {
  title, description, robots:{ index:true, follow:true },
  icons:{ icon:"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='8' fill='%237c9cff'/><text x='16' y='22' font-size='16' text-anchor='middle' fill='%2309090b' font-family='sans-serif' font-weight='700'>AM</text></svg>" },
  openGraph:{ title, description, type:"website" },
  twitter:{ card:"summary_large_image", title, description },
};
export default function Root({ children }:{ children:React.ReactNode }) {
  return <html lang="en"><body className={`${sans.variable} ${mono.variable} font-sans`}>{children}</body></html>;
}

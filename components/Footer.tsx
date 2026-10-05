import { links } from "@/lib/data";
export default function Footer() {
  const socials = [["GitHub",links.github],["LinkedIn",links.linkedin],["LeetCode",links.leetcode],["GeeksforGeeks",links.gfg]];
  return (
    <footer className="border-t border-line"><div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 text-sm text-mute sm:flex-row sm:items-center sm:justify-between">
      <div><p className="font-medium text-ink">Ankit Mishra</p><p>Software Engineer | AI Engineer</p></div>
      <nav aria-label="Social" className="flex flex-wrap gap-4">{socials.map(([n,h])=><a key={n} href={h} className="hover:text-ink">{n}</a>)}</nav>
      <p>© 2026 Ankit Mishra</p>
    </div></footer>
  );
}

import fs from "node:fs";
import path from "node:path";

const root = path.resolve("src");

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (entry.name.endsWith(".tsx")) out.push(full);
  }
  return out;
}

const replacements = [
  [
    "text-transparent bg-clip-text bg-gradient-to-r from-[#1fa97a] via-[#e0b04a] to-[#f4f1ea]",
    "text-primary",
  ],
  [
    "text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-amber-300 to-amber-200",
    "text-bear",
  ],
  [
    "bg-gradient-to-r from-[#1fa97a] to-emerald-400 hover:from-emerald-400 hover:to-[#1fa97a] text-[#0e1b2e]",
    "bg-primary hover:bg-primary/90 text-primary-foreground",
  ],
  [
    "bg-gradient-to-tr from-[#1fa97a] to-emerald-300",
    "bg-primary",
  ],
  [
    "bg-gradient-to-t from-[#1fa97a] via-emerald-400 to-[#e0b04a]",
    "bg-primary",
  ],
  [
    "bg-gradient-to-t from-[#1fa97a] to-emerald-400",
    "bg-primary",
  ],
  [
    "bg-gradient-to-t from-[#1fa97a]/80 to-[#1fa97a]",
    "bg-primary/80",
  ],
  ["from-[#1fa97a] to-emerald-300", "from-primary to-primary"],
  ["from-[#1fa97a] to-emerald-400", "from-primary to-primary"],
  ["from-[#e0b04a] to-amber-300", "from-paper to-paper"],
  ["shadow-[0_0_40px_rgba(31,169,122,0.6)]", ""],
  ["shadow-[0_0_40px_rgba(31,169,122,0.4)]", ""],
  ["shadow-[0_20px_50px_rgba(0,0,0,0.5)]", ""],
  ["shadow-[0_30px_70px_rgba(0,0,0,0.8),inset_0_0_12px_rgba(255,255,255,0.08)]", "shadow-2xl"],
  [
    "w-[1920px] h-[1080px] relative bg-[#0e1b2e] overflow-hidden select-none",
    "w-[1920px] h-[1080px] relative bg-background text-foreground overflow-hidden select-none grid-floor",
  ],
  ["bg-[#132238]/85 hover:bg-[#16294a]/90 backdrop-blur-xl", "bg-card hover:bg-muted"],
  ["bg-[#132238]/80 hover:bg-[#16294a]/90 backdrop-blur-xl", "bg-card hover:bg-muted"],
  ["bg-[#132238]/85 backdrop-blur-xl", "bg-card"],
  ["bg-[#132238]/80 backdrop-blur-xl", "bg-card"],
  ["hover:bg-[#16294a]/90", "hover:bg-muted"],
  ["bg-[#16294a]/30", "bg-card"],
  ["bg-[#16294a]", "bg-card"],
  ["border-[#16294a]/80", "border-border"],
  ["inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full", "inline-flex items-center gap-2.5 px-3 py-1 rounded-md label-mono"],
  ["px-5 py-2 rounded-full", "px-3 py-1.5 rounded-md"],
  ["rounded-3xl", "rounded-lg"],
  ["rounded-2xl", "rounded-md"],
  ["backdrop-blur-xl", ""],
  ["backdrop-blur-md", ""],
  ["text-[#f4f1ea]/90", "text-foreground"],
  ["text-[#f4f1ea]/85", "text-foreground/90"],
  ["text-[#f4f1ea]/80", "text-foreground/85"],
  ["text-[#f4f1ea]/75", "text-muted-foreground"],
  ["text-[#f4f1ea]/70", "text-muted-foreground"],
  ["text-[#f4f1ea]", "text-foreground"],
  ["bg-[#f4f1ea]", "bg-foreground"],
  ["text-[#0e1b2e]", "text-primary-foreground"],
  ["bg-[#0e1b2e]/95", "bg-card/95"],
  ["bg-[#0e1b2e]/90", "bg-card/95"],
  ["hover:bg-[#0e1b2e]", "hover:bg-card"],
  ["bg-[#0e1b2e]", "bg-background"],
  ["bg-[#0c121d]", "bg-background"],
  ["bg-[#05080f]", "bg-background"],
  ["border-[#223554]", "border-border"],
  ["hover:border-[#1fa97a]/50", "hover:border-primary/50"],
  ["hover:border-[#e0b04a]/50", "hover:border-paper/50"],
  ["hover:border-[#1fa97a]", "hover:border-primary"],
  ["border-[#1fa97a]/50", "border-primary/50"],
  ["border-[#1fa97a]/40", "border-primary/40"],
  ["border-[#1fa97a]/30", "border-primary/30"],
  ["border-[#1fa97a]", "border-primary"],
  ["bg-[#1fa97a]/20", "bg-primary/15"],
  ["bg-[#1fa97a]/15", "bg-primary/10"],
  ["bg-[#1fa97a]/25", "bg-primary/15"],
  ["text-[#1fa97a]", "text-primary"],
  ["bg-[#1fa97a]", "bg-primary"],
  ["from-[#1fa97a]", "from-primary"],
  ["to-[#1fa97a]", "to-primary"],
  ["via-[#1fa97a]", "via-primary"],
  ["border-[#e0b04a]/50", "border-paper/50"],
  ["border-[#e0b04a]/40", "border-paper/40"],
  ["border-[#e0b04a]/30", "border-paper/30"],
  ["border-[#e0b04a]", "border-paper"],
  ["bg-[#e0b04a]/20", "bg-paper/15"],
  ["bg-[#e0b04a]/15", "bg-paper/10"],
  ["bg-[#e0b04a]/12", "bg-paper/10"],
  ["text-[#e0b04a]", "text-paper"],
  ["bg-[#e0b04a]", "bg-paper"],
  ["from-[#e0b04a]", "from-paper"],
  ["to-[#e0b04a]", "to-paper"],
  ["via-[#e0b04a]", "via-paper"],
  ["to-[#f4f1ea]", "to-foreground"],
  ["text-rose-400/90", "text-bear"],
  ["text-rose-400", "text-bear"],
  ["text-rose-300", "text-bear"],
  ["text-red-400", "text-bear"],
  ["bg-rose-500/20", "bg-bear/15"],
  ["bg-rose-500/15", "bg-bear/10"],
  ["bg-rose-500/10", "bg-bear/10"],
  ["bg-red-500/10", "bg-bear/10"],
  ["border-rose-500/40", "border-bear/40"],
  ["border-rose-500/30", "border-bear/30"],
  ["border-rose-500/20", "border-bear/20"],
  ["border-red-500/20", "border-bear/20"],
  ["from-rose-500/20", "from-bear/20"],
  ["text-amber-400", "text-paper"],
  ["text-amber-300", "text-paper"],
  ["text-amber-200", "text-paper"],
  ["bg-amber-500/20", "bg-paper/15"],
  ["bg-amber-500/15", "bg-paper/10"],
  ["bg-amber-500/10", "bg-paper/10"],
  ["bg-amber-500/5", "bg-paper/5"],
  ["border-amber-500/40", "border-paper/40"],
  ["border-amber-500/30", "border-paper/30"],
  ["border-amber-500/20", "border-paper/20"],
  ["from-amber-500/30", "from-paper/25"],
  ["from-amber-500/20", "from-paper/20"],
  ["to-amber-300", "to-paper"],
  ["text-emerald-400", "text-primary"],
  ["text-emerald-300", "text-primary"],
  ["bg-emerald-500/20", "bg-primary/15"],
  ["bg-emerald-500/10", "bg-primary/10"],
  ["border-emerald-500/40", "border-primary/40"],
  ["border-emerald-500/30", "border-primary/30"],
  ["from-emerald-500/30", "from-primary/25"],
  ["from-emerald-500/20", "from-primary/20"],
  ["to-emerald-400", "to-primary"],
  ["to-emerald-300", "to-primary"],
  ["via-emerald-400", "via-primary"],
  ["text-cyan-400", "text-primary"],
  ["text-cyan-300", "text-primary"],
  ["bg-cyan-500/20", "bg-primary/10"],
  ["border-cyan-500/40", "border-primary/40"],
  ["border-cyan-500/30", "border-primary/30"],
  ["from-cyan-500/30", "from-primary/20"],
  ["from-cyan-500/20", "from-primary/15"],
  ["text-indigo-400", "text-muted-foreground"],
  ["text-indigo-300", "text-muted-foreground"],
  ["text-indigo-200", "text-foreground/80"],
  ["bg-indigo-500/15", "bg-muted/50"],
  ["bg-indigo-950/40", "bg-background"],
  ["border-indigo-500/40", "border-border"],
  ["border-indigo-500/20", "border-border"],
  ["from-indigo-500/20", "from-primary/15"],
  ["border-white/30", "border-border"],
  ["hover:border-white/40", "hover:border-primary/40"],
  ["hover:border-white/30", "hover:border-primary/40"],
  ["border-white/20", "border-border"],
  ["border-white/15", "border-border"],
  ["border-white/10", "border-border"],
  ["border-white/5", "border-border/70"],
  ["bg-white/15", "bg-muted"],
  ["hover:bg-white/20", "hover:bg-muted"],
  ["hover:bg-white/10", "hover:bg-muted"],
  ["hover:bg-white/[0.08]", "hover:bg-muted"],
  ["hover:bg-white/[0.02]", "hover:bg-muted/40"],
  ["bg-white/10", "bg-muted/70"],
  ["bg-white/5", "bg-muted/40"],
  ["bg-black/80", "bg-background/80"],
  ["bg-black/50", "bg-background"],
  ["bg-black/40", "bg-background"],
  ["bg-black", "bg-background"],
  ["text-white/90", "text-foreground"],
  ["text-white/85", "text-foreground/90"],
  ["text-white/80", "text-foreground/80"],
  ["text-white/70", "text-muted-foreground"],
  ["text-white/60", "text-muted-foreground"],
  ["text-white/50", "text-muted-foreground"],
  ["text-white/40", "text-muted-foreground"],
  ["hover:text-white", "hover:text-foreground"],
  ["text-white", "text-foreground"],
  ["group-hover:text-white", "group-hover:text-foreground"],
  ['colors: ["#1fa97a", "#e0b04a", "#38bdf8", "#ffffff"]', 'colors: ["#D4FF5A", "#F3F0E8", "#F2F5F0", "#FF7A59"]'],
  ['colors: ["#1fa97a", "#e0b04a"]', 'colors: ["#D4FF5A", "#F3F0E8"]'],
];

for (const file of walk(root)) {
  let content = fs.readFileSync(file, "utf8");
  const original = content;
  content = content.replace(
    /\r?\n[ \t]*\{\/\*[^*]*\*(?:\/|\*\/)\}\r?\n(?=[ \t]*<div className="absolute[^"]*blur-)/g,
    "\n",
  );
  content = content.replace(
    /\r?\n[ \t]*<div className="absolute[^"]*blur-\[[^\]]+\][^"]*" \/>/g,
    "",
  );
  for (const [from, to] of replacements) {
    content = content.split(from).join(to);
  }
  content = content.replace(/[ \t]{2,}/g, (match, offset, str) => {
    const lineStart = str.lastIndexOf("\n", offset) + 1;
    const line = str.slice(lineStart, offset);
    if (line.trim().startsWith("className=") || line.includes("className=")) {
      return " ";
    }
    return match;
  });
  content = content.replace(/className="([^"]*)"/g, (_, classes) => {
    const cleaned = classes.replace(/\s+/g, " ").trim();
    return `className="${cleaned}"`;
  });
  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log("updated", path.relative(process.cwd(), file));
  }
}

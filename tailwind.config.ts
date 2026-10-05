import type { Config } from "tailwindcss";
export default { content: ["./app/**/*.tsx","./components/**/*.tsx"], theme: { extend: { colors: { bg:"#09090b", panel:"#101013", line:"#26262b", ink:"#ededf0", mute:"#8b8b95", accent:"#7c9cff" }, fontFamily: { sans:["var(--font-sans)","system-ui","sans-serif"], mono:["var(--font-mono)","ui-monospace","monospace"] } } }, plugins: [] } satisfies Config;

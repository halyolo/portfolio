"use client";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiSupabase,
  SiGo,
  SiRust,
} from "react-icons/si";
import { TbBrandVercel } from "react-icons/tb"; // Vercelアイコン
import { Card, CardContent } from "@/components/ui/card";

const techs = [
  { icon: SiNextdotjs, name: "Next.js", url: "https://nextjs.org/" },
  {
    icon: SiTypescript,
    name: "TypeScript",
    url: "https://www.typescriptlang.org/",
  },
  {
    icon: SiTailwindcss,
    name: "Tailwind CSS",
    url: "https://tailwindcss.com/",
  },
  { icon: SiSupabase, name: "Supabase", url: "https://supabase.com/" },
  { icon: SiGo, name: "Go", url: "https://golang.org/" },
  { icon: TbBrandVercel, name: "Vercel", url: "https://vercel.com/" },
  { icon: SiRust, name: "Rust", url: "https://www.rust-lang.org/" },
];

export default function TechStack() {
  return (
    <section className="w-full max-w-5xl mx-auto text-center text-gray-100 mb-10">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 tracking-wide neon-glow">
        学習中の技術
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4">
        {techs.map(({ icon: Icon, name, url }) => (
          <Card
            key={name}
            className="p-4 border border-gray-700 bg-gray-900 hover:border-neon transition duration-300"
          >
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
            >
              <CardContent className="flex items-center justify-center">
                <Icon className="w-8 h-8 md:w-10 md:h-10 text-gray-100" />
              </CardContent>
            </a>
          </Card>
        ))}
      </div>
    </section>
  );
}

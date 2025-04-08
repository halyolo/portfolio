"use client";

import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function SocialLinks() {
  return (
    <section className="text-center mt-12">
      <p className="mb-2 text-sm text-gray-400">GitHub</p>
      <Button
        asChild
        variant="outline"
        className="p-4 border border-gray-600 hover:border-neon text-gray-100 transition duration-300"
      >
        <a
          href="https://github.com/halyolo"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub className="w-10 h-10 sm:w-12 sm:h-12" />
        </a>
      </Button>
    </section>
  );
}

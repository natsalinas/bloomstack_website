import Link from "next/link";
import { Sprout } from "lucide-react";
import { navigationLinks } from "@/config/navigation";

export function Footer() {
  return (
    <footer className="border-t border-border bg-[#f0f2e9]">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-7 px-6 py-10 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-2 font-serif text-2xl text-primary">
          <Sprout /> BloomStack
        </Link>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-6">
          {navigationLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm hover:text-primary">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="mx-auto max-w-7xl border-t border-border px-6 py-5 text-sm text-muted-foreground lg:px-8">
        © {new Date().getFullYear()} BloomStack
      </div>
    </footer>
  );
}

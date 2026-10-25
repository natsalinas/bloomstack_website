import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Hero } from "@/components/sections/Hero";

export default function HomePage() {
  return (
    <main>
      <Hero />

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="eyebrow">ABOUT BLOOMSTACK</p>
          <h2 className="section-title mt-4">Better together.</h2>
        </div>
        <div className="self-center">
          <p className="text-lg leading-9 text-muted-foreground">
            We bring together people who love technology, learning, and creating.
            Through shared projects and open conversations, we help each other grow.
          </p>
          <Link href="/about" className="mt-6 inline-flex items-center gap-2 font-semibold text-primary">
            Get to know us <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      <section className="bg-[#eaf0e8] px-6 py-20 text-center">
        <div className="mx-auto max-w-2xl">
          <p className="eyebrow">GROW WITH US</p>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl">Come create with us.</h2>
          <p className="mt-5 leading-8 text-muted-foreground">
            Interested in our projects or joining a meeting? We'd love to connect.
          </p>
          <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground">
            Get in touch <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[580px] items-center overflow-hidden bg-[#193d32] text-[#f6f4ec] sm:min-h-[650px]">
      <img
        src="/images/bloomstack-orchids.jpg"
        alt="Blooming orchids and lush green plants growing along a wooden garden trellis"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#112a22]/95 via-[#193d32]/80 to-[#193d32]/25" />
      <div className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[.28em] text-[#e6d2a7]">WELCOME TO BLOOMSTACK</p>
          <h1 className="mt-6 font-serif text-5xl leading-[1.12] text-white sm:text-7xl">
            Let&apos;s build something meaningful.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-[#f2f5ed]">
            A collaborative software team where people come together to learn, create, and grow.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/about" className="inline-flex items-center gap-2 rounded-full bg-[#c6ae83] px-7 py-3.5 font-semibold text-[#193d32] transition hover:bg-[#e2cba4]">
              Meet BloomStack <ArrowUpRight size={18} />
            </Link>
            <Link href="/contact" className="rounded-full border border-white/70 px-7 py-3.5 font-semibold text-white transition hover:bg-white/15">
              Join a meeting
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

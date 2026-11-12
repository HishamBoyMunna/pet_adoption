import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PetCard } from "@/components/pet-card";
import { ArrowRight, PawPrint, Sparkle } from "@/components/icons";
import { pets } from "@/data/pets";

export const metadata: Metadata = {
  description:
    "Every adoptable cat, dog, rabbit and bird currently looking for a home.",
};

const front = pets[0];
const back = pets[1];

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="relative overflow-hidden">
          <PawPrint className="pointer-events-none absolute -left-6 top-24 hidden size-24 -rotate-12 text-ink/[0.06] lg:block" />
          <PawPrint className="pointer-events-none absolute right-10 top-8 hidden size-12 rotate-12 text-coral/20 lg:block" />
          <Sparkle className="pointer-events-none absolute left-1/2 top-10 hidden size-6 text-honey lg:block" />

          <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-24 lg:pt-20">
            <div>
              <p className="font-hand text-2xl text-coral-deep sm:text-3xl">
                straight from shelters around New York
              </p>
              <h1 className="mt-2 font-display text-[2.9rem] font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
                Good pets.
                <br />
                Great company.
                <br />
                <span className="relative inline-block">
                  Zero small talk.
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 220 14"
                    preserveAspectRatio="none"
                    className="absolute -bottom-1.5 left-0 h-3.5 w-full text-coral"
                  >
                    <path
                      d="M3 10c30-7 58 2 88-2s58-5 87 1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>

              <p className="mt-7 max-w-md text-lg leading-relaxed text-ink-soft">
                Browse the wall like a noticeboard outside a corner shop, or
                flick through the feed one friend at a time. Every animal here
                is waiting at a partner shelter or rescue.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link href="/feed" className="btn-sticker btn-sticker--coral">
                  Swipe the feed
                  <ArrowRight className="size-4" />
                </Link>
                <Link href="#wall" className="btn-sticker">
                  Meet the wall
                </Link>
              </div>

              <p className="mt-5 font-hand text-xl text-ink-soft">
                No account, no algorithm — just {pets.length} animals.
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-[420px] pb-6 pl-2 pr-6 lg:max-w-[440px]">
              <div
                aria-hidden="true"
                className="absolute right-0 top-4 w-[76%] rotate-[5deg] rounded-[16px] border-2 border-ink bg-honey/40 p-2.5 shadow-sticker-sm"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-lg border-2 border-ink/60">
                  {/* eslint-disable-next-line @next/next/no-img-element -- local decorative SVG illustration */}
                  <img
                    src={back.image}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="relative w-[86%] -rotate-2 rounded-[16px] border-2 border-ink bg-cream p-3 shadow-sticker">
                <span className="tape" aria-hidden="true" />
                <div className="overflow-hidden rounded-[10px] border-2 border-ink bg-paper-deep">
                  {/* eslint-disable-next-line @next/next/no-img-element -- local decorative SVG illustration; next/image requires images.dangerouslyAllowSVG */}
                  <img
                    src={front.image}
                    alt={front.imageAlt}
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
                <div className="flex items-baseline justify-between gap-3 px-1 pt-3">
                  <p className="font-display text-2xl font-black leading-none">
                    {front.name}
                  </p>
                  <p className="font-hand text-lg leading-none text-ink-soft">
                    professional sunbeam
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-1 right-0 grid size-[4.75rem] rotate-[8deg] place-items-center rounded-full border-2 border-ink bg-coral text-cream shadow-sticker-sm">
                <span className="text-center leading-none">
                  <span className="block font-display text-2xl font-black">
                    {pets.length}
                  </span>
                  <span className="mt-0.5 block text-[9px] font-extrabold uppercase tracking-[0.12em]">
                    friends
                  </span>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section
          id="wall"
          aria-labelledby="wall-title"
          className="mx-auto w-full max-w-6xl scroll-mt-24 px-4 pb-20 sm:px-6"
        >
          <div className="flex flex-wrap items-end justify-between gap-3 border-b-2 border-ink/15 pb-3">
            <h2
              id="wall-title"
              className="font-display text-3xl font-black tracking-tight sm:text-4xl"
            >
              The wall
            </h2>
            <p className="font-hand text-xl text-ink-soft">
              everybody here is adoptable
            </p>
          </div>

          <ul className="mt-8 columns-1 gap-6 sm:columns-2 lg:columns-3">
            {pets.map((pet, index) => (
              <PetCard key={pet.id} pet={pet} index={index} />
            ))}
          </ul>
        </section>

        <section className="relative overflow-hidden border-y-2 border-ink bg-sage text-cream">
          <PawPrint className="pointer-events-none absolute -bottom-8 -left-4 size-40 rotate-12 text-cream/10" />
          <PawPrint className="pointer-events-none absolute -right-4 top-4 size-28 -rotate-12 text-cream/10" />
          <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-12 sm:px-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-hand text-2xl text-cream/85">
                one friend per screen, swipe when you&apos;re ready
              </p>
              <h2 className="mt-1 font-display text-3xl font-black tracking-tight sm:text-4xl">
                Or flick through them like a feed.
              </h2>
            </div>
            <Link href="/feed" className="btn-sticker btn-sticker--coral">
              Open the feed
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

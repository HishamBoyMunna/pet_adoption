"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  formatAge,
  getSpeciesLabel,
  type Pet,
} from "@/data/pets";
import {
  ArrowLeft,
  ArrowRight,
  Heart,
  PawPrint,
  Share,
} from "@/components/icons";
import { SpeciesTag } from "@/components/species-tag";

function scrollBehavior(): ScrollBehavior {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? "auto"
    : "smooth";
}

export function PetFeed({ pets }: { pets: Pet[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<Array<HTMLElement | null>>([]);
  const copiedTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [active, setActive] = useState(0);
  const [liked, setLiked] = useState<Record<string, boolean>>({});
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const index = Number((entry.target as HTMLElement).dataset.index);
          if (!Number.isNaN(index)) setActive(index);
        }
      },
      { root: scroller, threshold: 0.6 },
    );

    for (const slide of slideRefs.current) {
      if (slide) observer.observe(slide);
    }
    return () => observer.disconnect();
  }, [pets.length]);

  useEffect(() => {
    return () => {
      if (copiedTimer.current) clearTimeout(copiedTimer.current);
    };
  }, []);

  const goTo = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(pets.length - 1, index));
      slideRefs.current[clamped]?.scrollIntoView({
        behavior: scrollBehavior(),
        block: "start",
      });
    },
    [pets.length],
  );

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowDown" || event.key === "PageDown") {
        event.preventDefault();
        goTo(active + 1);
      } else if (event.key === "ArrowUp" || event.key === "PageUp") {
        event.preventDefault();
        goTo(active - 1);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active, goTo]);

  function toggleBoop(id: string) {
    setLiked((current) => ({ ...current, [id]: !current[id] }));
  }

  async function copyLink(pet: Pet) {
    const url = `${window.location.origin}/pets/${pet.id}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(pet.id);
      if (copiedTimer.current) clearTimeout(copiedTimer.current);
      copiedTimer.current = setTimeout(() => setCopied(null), 2000);
    } catch {
      window.prompt("Copy this link", url);
    }
  }

  return (
    <main className="relative h-dvh overflow-hidden bg-paper">
      <h1 className="sr-only">The feed</h1>
      <div className="pointer-events-none absolute inset-x-0 top-0 z-30 bg-gradient-to-b from-paper via-paper/95 to-transparent pb-10 pt-3">
        <div className="pointer-events-auto mx-auto max-w-[560px] px-4">
          <div className="flex items-center justify-between gap-3">
            <Link href="/" className="group flex items-center gap-2">
              <span className="grid size-8 place-items-center rounded-[9px] border-2 border-ink bg-coral text-cream shadow-sticker-sm transition-transform group-hover:-rotate-6">
                <PawPrint className="size-4" />
              </span>
              <span className="font-display text-lg font-black tracking-tight">
                The feed
              </span>
            </Link>

            <Link
              href="/"
              className="btn-sticker btn-sticker--sm"
              aria-label="Leave the feed and go back to the wall"
            >
              <ArrowLeft className="size-3.5" />
              Wall
            </Link>
          </div>

          <div className="mt-3 flex items-center gap-1" role="group" aria-label="Jump to a pet">
            {pets.map((pet, index) => (
              <button
                key={pet.id}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Go to ${pet.name}`}
                aria-current={index === active ? "true" : undefined}
                className="group flex-1 py-2"
              >
                <span
                  className={`block h-1.5 border border-ink/30 transition-colors ${
                    index === active ? "bg-coral" : "bg-cream group-hover:bg-honey/60"
                  }`}
                />
              </button>
            ))}
          </div>
          <p className="mt-1 text-right font-hand text-lg leading-none text-ink-soft">
            {active + 1} of {pets.length}
          </p>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="hide-scrollbar h-full snap-y snap-mandatory overflow-y-auto overscroll-y-contain"
      >
        {pets.map((pet, index) => {
          const booped = Boolean(liked[pet.id]);

          return (
            <section
              key={pet.id}
              ref={(element) => {
                slideRefs.current[index] = element;
              }}
              data-index={index}
              aria-label={`${pet.name}, ${getSpeciesLabel(pet.species)}`}
              className="flex h-dvh snap-start snap-always flex-col items-center justify-center px-3 pb-4 pt-28 sm:px-6"
            >
              <article className="w-full max-w-[540px] overflow-hidden rounded-[18px] border-2 border-ink bg-cream shadow-sticker">
                <div className="flex items-center gap-3 px-4 py-3">
                  <span className="relative size-11 shrink-0 overflow-hidden rounded-full border-2 border-ink bg-paper-deep">
                    {/* eslint-disable-next-line @next/next/no-img-element -- local decorative SVG illustration */}
                    <img
                      src={pet.image}
                      alt=""
                      className="h-full w-full scale-[1.55] object-cover"
                    />
                  </span>

                  <div className="min-w-0 flex-1">
                    <Link
                      href={`/pets/${pet.id}`}
                      className="block truncate font-display text-lg font-black leading-tight hover:text-coral-deep"
                    >
                      {pet.name}
                    </Link>
                    <p className="truncate text-[11px] font-extrabold uppercase tracking-[0.12em] text-ink-soft">
                      {pet.breed} · {formatAge(pet.ageMonths)}
                    </p>
                  </div>

                  <span className="shrink-0 font-hand text-lg leading-none text-ink-soft">
                    {pet.location.split(",")[0]}
                  </span>
                </div>

                <div className="relative border-y-2 border-ink bg-paper-deep">
                  {/* eslint-disable-next-line @next/next/no-img-element -- local decorative SVG illustration; next/image requires images.dangerouslyAllowSVG */}
                  <img
                    src={pet.image}
                    alt={pet.imageAlt}
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <SpeciesTag
                    species={pet.species}
                    size={pet.size}
                    className="absolute left-3 top-3 -rotate-1"
                  />
                </div>

                <div className="flex items-center gap-1 px-2 pt-2">
                  <button
                    type="button"
                    onClick={() => toggleBoop(pet.id)}
                    aria-pressed={booped}
                    aria-label={booped ? `Take back the boop for ${pet.name}` : `Boop ${pet.name}`}
                    className={`flex items-center gap-1.5 rounded-lg px-2 py-2 text-sm font-extrabold transition-colors hover:bg-paper ${
                      booped ? "text-coral-deep" : "text-ink"
                    }`}
                  >
                    <Heart
                      filled={booped}
                      className={`size-6 transition-transform duration-150 ${
                        booped ? "scale-110 text-coral" : ""
                      }`}
                    />
                    {booped ? "Booped" : "Boop"}
                  </button>

                  <button
                    type="button"
                    onClick={() => void copyLink(pet)}
                    aria-label={`Copy a link to ${pet.name}'s profile`}
                    className="flex items-center gap-1.5 rounded-lg px-2 py-2 text-sm font-extrabold text-ink transition-colors hover:bg-paper"
                  >
                    <Share className="size-5" />
                    {copied === pet.id ? "Copied!" : "Share"}
                  </button>

                  <Link
                    href={`/pets/${pet.id}`}
                    className="ml-auto flex items-center gap-1.5 rounded-lg px-2 py-2 text-sm font-extrabold text-ink transition-colors hover:bg-paper hover:text-coral-deep"
                  >
                    Full profile
                    <ArrowRight className="size-4" />
                  </Link>
                </div>

                <div className="px-4 pb-4 pt-1">
                  <p className="text-sm leading-relaxed text-ink-soft">
                    <span className="font-extrabold text-ink">
                      @{pet.name.toLowerCase()}
                    </span>{" "}
                    {pet.summary}
                  </p>
                  <p className="mt-2 font-hand text-lg leading-none text-ink-soft">
                    {pet.shelter} · {pet.location}
                  </p>
                </div>
              </article>

              <p
                className="mt-3 text-center font-hand text-lg leading-none text-ink-soft"
              >
                {index === 0
                  ? "swipe up for the next friend"
                  : index === pets.length - 1
                    ? "that's everyone — for now"
                    : `${index + 1} of ${pets.length}`}
              </p>
            </section>
          );
        })}
      </div>

      <span role="status" className="sr-only">
        {copied ? "Profile link copied to your clipboard" : ""}
      </span>
    </main>
  );
}

import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PawPrint } from "@/components/icons";
import { SpeciesTag } from "@/components/species-tag";
import {
  formatAge,
  getAgeBand,
  getPet,
  getPetIds,
  getSpeciesLabel,
} from "@/data/pets";

// All pets are known at build time, so every detail page is prerendered.
export function generateStaticParams() {
  return getPetIds().map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: PageProps<"/pets/[id]">): Promise<Metadata> {
  const { id } = await params;
  const pet = getPet(id);
  if (!pet) return { title: "Pet not found" };

  return {
    title: pet.name,
    description: pet.summary,
    openGraph: {
      title: `${pet.name} — ${getSpeciesLabel(pet.species)} available for adoption`,
      description: pet.summary,
      type: "article",
    },
  };
}

export default async function PetDetailPage({ params }: PageProps<"/pets/[id]">) {
  const { id } = await params;
  const pet = getPet(id);
  if (!pet) notFound();

  const facts: Array<[string, string]> = [
    ["Species", getSpeciesLabel(pet.species)],
    ["Breed", pet.breed],
    ["Age", `${formatAge(pet.ageMonths)} (${getAgeBand(pet.ageMonths)})`],
    ["Sex", pet.sex === "male" ? "Male" : "Female"],
    ["Shelter", pet.shelter],
    ["Location", pet.location],
  ];

  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-20 sm:px-6">
        <nav className="flex flex-wrap items-center justify-between gap-2 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-extrabold text-ink/80 underline decoration-coral decoration-2 underline-offset-4 hover:text-ink"
          >
            <span aria-hidden="true">&larr;</span> back to the wall
          </Link>
          <Link
            href="/feed"
            className="font-hand text-xl leading-none text-ink-soft underline decoration-honey decoration-2 underline-offset-4 hover:text-ink"
          >
            or meet them one at a time in the feed
          </Link>
        </nav>

        <article className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
          <div>
            <div className="relative -rotate-1 rounded-[16px] border-2 border-ink bg-cream p-3 shadow-sticker">
              <span className="tape" aria-hidden="true" />
              <div className="overflow-hidden rounded-[10px] border-2 border-ink bg-paper-deep">
                {/* eslint-disable-next-line @next/next/no-img-element -- local decorative SVG illustration; next/image requires images.dangerouslyAllowSVG */}
                <img
                  src={pet.image}
                  alt={pet.imageAlt}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="flex items-baseline justify-between gap-3 px-1 pt-3">
                <p className="font-display text-xl font-black">{pet.name}</p>
                <p className="font-hand text-lg leading-none text-ink-soft">
                  {pet.traits[0]?.toLowerCase()}
                </p>
              </div>
            </div>

            <p className="mt-4 text-center font-hand text-xl leading-snug text-ink-soft">
              currently at {pet.shelter} &middot; asks nicely for{" "}
              {pet.goodWith[0]?.toLowerCase()}
            </p>
          </div>

          <div>
            <SpeciesTag
              species={pet.species}
              size={pet.size}
              className="-rotate-1"
            />
            <h1 className="mt-3 font-display text-5xl font-black leading-none tracking-tight sm:text-6xl">
              {pet.name}
            </h1>
            <p className="mt-3 text-[11px] font-extrabold uppercase tracking-[0.13em] text-ink-soft">
              {pet.breed} &middot; {formatAge(pet.ageMonths)} &middot;{" "}
              {pet.sex === "male" ? "Male" : "Female"}
            </p>
            <p className="mt-1 font-hand text-xl text-ink-soft">{pet.location}</p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {pet.traits.map((trait, index) => (
                <li
                  key={trait}
                  className={`border-2 border-ink bg-cream px-2.5 py-1 text-xs font-extrabold ${
                    index % 2 === 0 ? "-rotate-1" : "rotate-1"
                  }`}
                >
                  {trait}
                </li>
              ))}
            </ul>

            <p className="mt-6 leading-relaxed text-ink/90">{pet.description}</p>

            <h2 className="mt-8 font-display text-2xl font-black">
              Gets along with
            </h2>
            <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
              {pet.goodWith.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm font-bold text-ink-soft"
                >
                  <PawPrint className="size-3.5 shrink-0 text-coral" />
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="mt-8 font-display text-2xl font-black">The details</h2>
            <dl className="mt-3 divide-y-2 divide-dotted divide-ink/15 border-y-2 border-ink/15">
              {facts.map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-baseline justify-between gap-4 px-1 py-2.5 text-sm"
                >
                  <dt className="text-ink-soft">{label}</dt>
                  <dd className="text-right font-extrabold">{value}</dd>
                </div>
              ))}
              <div className="flex items-baseline justify-between gap-4 px-1 py-2.5 text-sm">
                <dt className="text-ink-soft">Medical</dt>
                <dd className="text-right font-extrabold">
                  {[
                    pet.vaccinated ? "Vaccinated" : null,
                    pet.neutered ? "Spayed/neutered" : null,
                  ]
                    .filter(Boolean)
                    .join(" · ") || "See shelter"}
                </dd>
              </div>
            </dl>

            <a
              href={`mailto:${pet.shelter.toLowerCase().replaceAll(" ", ".")}@example.org?subject=Adoption%20enquiry%20for%20${encodeURIComponent(pet.name)}`}
              className="btn-sticker btn-sticker--coral mt-8 w-full"
            >
              Ask about {pet.name}
            </a>
            <p className="mt-2 text-center font-hand text-lg text-ink-soft">
              opens your email app &middot; the address is sample data
            </p>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}

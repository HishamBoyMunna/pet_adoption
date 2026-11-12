import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import {
  formatAge,
  getAgeBand,
  getPet,
  getPetIds,
  getSizeLabel,
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
    ["Size", getSizeLabel(pet.size)],
    ["Shelter", pet.shelter],
    ["Location", pet.location],
  ];

  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 pb-20">
        <nav className="py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-stone-600 hover:text-emerald-700 dark:text-stone-300 dark:hover:text-emerald-400"
          >
            <span aria-hidden="true">&larr;</span> All pets
          </Link>
        </nav>

        <article className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
          <div className="overflow-hidden rounded-2xl border border-stone-200 bg-stone-100 dark:border-stone-800 dark:bg-stone-800">
            {/* eslint-disable-next-line @next/next/no-img-element -- local decorative SVG illustration; next/image requires images.dangerouslyAllowSVG */}
            <img
              src={pet.image}
              alt={pet.imageAlt}
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
              {getSpeciesLabel(pet.species)} &middot; {getSizeLabel(pet.size)}
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
              {pet.name}
            </h1>
            <p className="mt-1 text-stone-500 dark:text-stone-400">
              {pet.breed} &middot; {formatAge(pet.ageMonths)} &middot; {pet.shelter}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {pet.traits.map((trait) => (
                <span
                  key={trait}
                  className="rounded-full bg-stone-100 px-3 py-1 text-sm text-stone-700 dark:bg-stone-800 dark:text-stone-200"
                >
                  {trait}
                </span>
              ))}
            </div>

            <p className="mt-6 leading-relaxed text-stone-700 dark:text-stone-200">
              {pet.description}
            </p>

            <h2 className="mt-8 text-sm font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
              Gets along with
            </h2>
            <ul className="mt-2 flex flex-wrap gap-2">
              {pet.goodWith.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-stone-200 px-3 py-1 text-sm text-stone-600 dark:border-stone-700 dark:text-stone-300"
                >
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="mt-8 text-sm font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
              Details
            </h2>
            <dl className="mt-2 divide-y divide-stone-200 rounded-xl border border-stone-200 dark:divide-stone-800 dark:border-stone-800">
              {facts.map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-baseline justify-between gap-4 px-4 py-2.5 text-sm"
                >
                  <dt className="text-stone-500 dark:text-stone-400">{label}</dt>
                  <dd className="text-right font-medium text-stone-800 dark:text-stone-100">
                    {value}
                  </dd>
                </div>
              ))}
              <div className="flex items-baseline justify-between gap-4 px-4 py-2.5 text-sm">
                <dt className="text-stone-500 dark:text-stone-400">Medical</dt>
                <dd className="text-right font-medium text-stone-800 dark:text-stone-100">
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
              className="mt-8 block rounded-xl bg-emerald-700 px-6 py-3 text-center font-semibold text-white transition hover:bg-emerald-800"
            >
              Contact {pet.shelter}
            </a>
            <p className="mt-2 text-center text-xs text-stone-500 dark:text-stone-400">
              Opens your email app. Address is sample data.
            </p>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
import Link from "next/link";
import { formatAge, type Pet } from "@/data/pets";
import { ArrowRight } from "@/components/icons";
import { SpeciesTag } from "@/components/species-tag";

const TILTS = ["-rotate-[0.8deg]", "rotate-[0.7deg]", "-rotate-[0.5deg]"];

export function PetCard({ pet, index = 0 }: { pet: Pet; index?: number }) {
  const tilt = TILTS[index % TILTS.length];

  return (
    <li className="mb-6 break-inside-avoid">
      <article
        className={`wall-card relative rounded-[16px] border-2 border-ink bg-cream p-3 shadow-sticker ${tilt}`}
      >
        <span className="tape" aria-hidden="true" />
        <Link
          href={`/pets/${pet.id}`}
          className="group block rounded-[10px]"
        >
          <div className="relative overflow-hidden rounded-[10px] border-2 border-ink bg-paper-deep">
            {/* eslint-disable-next-line @next/next/no-img-element -- local decorative SVG illustration; next/image requires images.dangerouslyAllowSVG */}
            <img
              src={pet.image}
              alt={pet.imageAlt}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.035]"
            />
            <SpeciesTag
              species={pet.species}
              size={pet.size}
              className="absolute left-2 top-2 -rotate-1"
            />
          </div>

          <div className="px-1 pb-1 pt-3">
            <div className="flex items-baseline justify-between gap-2">
              <h3 className="font-display text-2xl font-black leading-none">
                {pet.name}
              </h3>
              <span className="shrink-0 font-hand text-lg leading-none text-ink-soft">
                {formatAge(pet.ageMonths)}
              </span>
            </div>
            <p className="mt-1.5 text-[11px] font-extrabold uppercase tracking-[0.13em] text-ink-soft">
              {pet.breed}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              {pet.summary}
            </p>
            <p className="mt-3 inline-flex items-center gap-1.5 text-sm font-extrabold text-ink transition-colors group-hover:text-coral-deep">
              Meet {pet.name}
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </p>
          </div>
        </Link>
      </article>
    </li>
  );
}

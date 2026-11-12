import Link from "next/link";
import {
  formatAge,
  getAgeBand,
  getSizeLabel,
  getSpeciesLabel,
  type Pet,
} from "@/data/pets";

export function PetCard({ pet }: { pet: Pet }) {
  return (
    <li className="group relative overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-stone-800 dark:bg-stone-900">
      <Link href={`/pets/${pet.id}`} className="block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700">
        <div className="relative aspect-[4/3] overflow-hidden bg-stone-100 dark:bg-stone-800">
          {/* eslint-disable-next-line @next/next/no-img-element -- local decorative SVG illustration; next/image requires images.dangerouslyAllowSVG */}
          <img
            src={pet.image}
            alt={pet.imageAlt}
            loading="lazy"
            className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
          />
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-stone-800 shadow-sm">
            {getSpeciesLabel(pet.species)} &middot; {getSizeLabel(pet.size)}
          </span>
        </div>
        <div className="p-4">
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="text-base font-semibold text-stone-900 dark:text-stone-50">
              {pet.name}
            </h3>
            <span className="shrink-0 text-xs text-stone-500 dark:text-stone-400">
              {formatAge(pet.ageMonths)}
            </span>
          </div>
          <p className="mt-0.5 text-sm text-stone-500 dark:text-stone-400">
            {pet.breed} &middot; {getAgeBand(pet.ageMonths)}
          </p>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-stone-600 dark:text-stone-300">
            {pet.summary}
          </p>
        </div>
      </Link>
    </li>
  );
}
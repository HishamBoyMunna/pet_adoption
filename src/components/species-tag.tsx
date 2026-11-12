import {
  getSizeLabel,
  getSpeciesLabel,
  type Size,
  type Species,
} from "@/data/pets";

const TONES: Record<Species, string> = {
  dog: "bg-honey text-ink",
  cat: "bg-coral text-cream",
  rabbit: "bg-sage text-cream",
  bird: "bg-sky text-ink",
};

export function SpeciesTag({
  species,
  size,
  className = "",
}: {
  species: Species;
  size?: Size;
  className?: string;
}) {
  return (
    <span
      className={`inline-block border-2 border-ink px-2 py-0.5 text-[10px] font-extrabold uppercase leading-relaxed tracking-[0.14em] ${TONES[species]} ${className}`}
    >
      {getSpeciesLabel(species)}
      {size ? ` · ${getSizeLabel(size)}` : ""}
    </span>
  );
}

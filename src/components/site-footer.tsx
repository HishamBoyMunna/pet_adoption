import Link from "next/link";
import { PawPrint } from "@/components/icons";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t-2 border-dashed border-ink/20 bg-paper-deep/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex items-center gap-3">
          <span className="grid size-9 shrink-0 place-items-center rounded-[10px] border-2 border-ink bg-cream text-coral">
            <PawPrint className="size-5" />
          </span>
          <p className="max-w-md text-sm leading-relaxed text-ink-soft">
            Paw Haven is a demo. The pets are illustrated, the shelters are
            invented, the good homes are real.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <Link
            href="/"
            className="text-sm font-extrabold text-ink/75 underline decoration-coral decoration-2 underline-offset-4 hover:text-ink"
          >
            The wall
          </Link>
          <Link
            href="/feed"
            className="text-sm font-extrabold text-ink/75 underline decoration-coral decoration-2 underline-offset-4 hover:text-ink"
          >
            The feed
          </Link>
          <span className="font-hand text-lg text-ink-soft">muddy paws, clean hearts</span>
        </div>
      </div>
    </footer>
  );
}

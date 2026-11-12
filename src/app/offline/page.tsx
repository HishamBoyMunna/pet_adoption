import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PawPrint } from "@/components/icons";

export default function OfflinePage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center px-4 py-24 text-center">
        <PawPrint className="size-14 -rotate-6 text-coral/70" />
        <p className="mt-6 font-hand text-2xl text-coral-deep">off the grid</p>
        <h1 className="mt-1 font-display text-4xl font-black tracking-tight">
          The internet went for a walk.
        </h1>
        <p className="mt-4 max-w-md leading-relaxed text-ink-soft">
          This page hasn&apos;t been saved for offline reading yet. Pages
          you&apos;ve already visited are still here, warm and waiting.
        </p>
        <Link href="/" className="btn-sticker btn-sticker--coral mt-8">
          Try the wall again
        </Link>
      </main>
      <SiteFooter />
    </>
  );
}

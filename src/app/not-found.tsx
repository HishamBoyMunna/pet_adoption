import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PawPrint } from "@/components/icons";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center px-4 py-24 text-center">
        <PawPrint className="size-14 rotate-6 text-honey" />
        <p className="mt-6 font-hand text-2xl text-coral-deep">
          a very good 404
        </p>
        <h1 className="mt-1 font-display text-4xl font-black tracking-tight">
          This one already went home.
        </h1>
        <p className="mt-4 max-w-md leading-relaxed text-ink-soft">
          We couldn&apos;t find that listing. It may have been adopted, or maybe
          a cat walked across the keyboard.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-sticker btn-sticker--coral">
            Back to the wall
          </Link>
          <Link href="/feed" className="btn-sticker">
            Swipe the feed
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

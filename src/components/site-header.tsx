import Link from "next/link";
import { ConnectionStatus } from "@/components/connection-status";
import { InstallPrompt } from "@/components/install-prompt";

export function SiteHeader() {
  return (
    <>
      <ConnectionStatus />
      <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-stone-50/90 backdrop-blur dark:border-stone-800 dark:bg-stone-950/90">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <Link href="/" className="flex items-center gap-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element -- local decorative SVG illustration; next/image requires images.dangerouslyAllowSVG */}
            <img
              src="/icon.svg"
              alt=""
              width={32}
              height={32}
              className="h-8 w-8 rounded-lg"
            />
            <span className="text-lg font-semibold tracking-tight text-stone-900 dark:text-stone-50">
              Paw Haven
            </span>
          </Link>
          <InstallPrompt />
        </div>
      </header>
    </>
  );
}
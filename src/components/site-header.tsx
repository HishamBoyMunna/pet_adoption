import Link from "next/link";
import { ConnectionStatus } from "@/components/connection-status";
import { InstallPrompt } from "@/components/install-prompt";
import { NavLink } from "@/components/nav-link";
import { PawPrint } from "@/components/icons";

export function SiteHeader() {
  return (
    <>
      <ConnectionStatus />
      <header className="sticky top-0 z-40 border-b-2 border-ink/10 bg-paper/90 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
          <Link href="/" className="group flex min-w-0 items-center gap-2.5">
            <span className="grid size-9 shrink-0 place-items-center rounded-[10px] border-2 border-ink bg-coral text-cream shadow-sticker-sm transition-transform duration-200 group-hover:-rotate-6">
              <PawPrint className="size-5" />
            </span>
            <span className="truncate font-display text-lg font-black tracking-tight sm:text-xl">
              Paw Haven
            </span>
            <span className="hidden font-hand text-lg leading-none text-ink-soft lg:inline">
              very good pets
            </span>
          </Link>

          <div className="flex shrink-0 items-center gap-3 sm:gap-5">
            <nav aria-label="Main" className="flex items-center gap-3 sm:gap-5">
              <NavLink href="/">
                <span className="hidden sm:inline">The&nbsp;</span>wall
              </NavLink>
              <NavLink href="/feed">
                <span className="hidden sm:inline">The&nbsp;</span>feed
              </NavLink>
            </nav>
            <InstallPrompt />
          </div>
        </div>
      </header>
    </>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const active =
    href === "/"
      ? pathname === "/" || pathname.startsWith("/pets")
      : pathname === href;

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className="group relative inline-flex py-1 text-sm font-extrabold text-ink/80 transition-colors hover:text-ink"
    >
      {children}
      <span
        aria-hidden="true"
        className={`absolute inset-x-0 -bottom-0.5 h-[3px] origin-left rounded-full bg-coral transition-transform duration-200 ${
          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
        }`}
      />
    </Link>
  );
}

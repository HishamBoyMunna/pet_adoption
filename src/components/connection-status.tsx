"use client";

import { useSyncExternalStore } from "react";
import { PawPrint } from "@/components/icons";

function subscribe(cb: () => void) {
  window.addEventListener("online", cb);
  window.addEventListener("offline", cb);
  return () => {
    window.removeEventListener("online", cb);
    window.removeEventListener("offline", cb);
  };
}

export function ConnectionStatus() {
  const online = useSyncExternalStore(
    subscribe,
    () => navigator.onLine,
    () => true,
  );

  if (online) return null;

  return (
    <div
      role="status"
      className="border-b-2 border-ink bg-honey px-4 py-2 text-center text-sm font-bold text-ink"
    >
      <PawPrint className="mr-1.5 inline-block size-3.5" />
      You&apos;re offline. Showing the pages you&apos;ve already sniffed out.
    </div>
  );
}

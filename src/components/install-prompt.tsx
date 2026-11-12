"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { PawPrint } from "@/components/icons";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

function subscribeDisplayMode(cb: () => void) {
  const query = window.matchMedia("(display-mode: standalone)");
  query.addEventListener("change", cb);
  return () => query.removeEventListener("change", cb);
}

export function InstallPrompt() {
  // Installed PWA windows report display-mode: standalone.
  const installed = useSyncExternalStore(
    subscribeDisplayMode,
    () => window.matchMedia("(display-mode: standalone)").matches,
    () => false,
  );

  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    const onBeforeInstall = (event: Event) => {
      // Suppress Chrome's default mini-infobar so we can render our own CTA.
      event.preventDefault();
      setDeferred(event as BeforeInstallPromptEvent);
    };
    window.addEventListener("beforeinstallprompt", onBeforeInstall);
    return () => window.removeEventListener("beforeinstallprompt", onBeforeInstall);
  }, []);

  if (installed || !deferred) return null;

  return (
    <button
      type="button"
      aria-label="Install Paw Haven"
      className="btn-sticker btn-sticker--sm min-h-10 sm:min-h-0"
      onClick={async () => {
        await deferred.prompt();
        await deferred.userChoice;
        setDeferred(null);
      }}
    >
      <PawPrint className="size-3.5" />
      <span className="hidden sm:inline">Install app</span>
    </button>
  );
}

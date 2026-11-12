"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

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
      className="rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/25"
      onClick={async () => {
        await deferred.prompt();
        await deferred.userChoice;
        setDeferred(null);
      }}
    >
      Install app
    </button>
  );
}
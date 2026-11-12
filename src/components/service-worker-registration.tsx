"use client";

import { useEffect } from "react";

export function ServiceWorkerRegistration() {
  useEffect(() => {
    // Service workers require a secure context and are registered by the docs'
    // recommended bundled-module form. Skip entirely in dev so HMR is unaffected.
    if (process.env.NODE_ENV !== "production") return;
    if (!("serviceWorker" in navigator)) return;

    const register = async () => {
      try {
        await navigator.serviceWorker.register(
          new URL("../lib/service-worker.js", import.meta.url),
          { scope: "/", updateViaCache: "none" },
        );
      } catch (error) {
        console.error("Service worker registration failed:", error);
      }
    };

    if (document.readyState === "complete") {
      void register();
    } else {
      window.addEventListener("load", () => void register(), { once: true });
    }
  }, []);

  return null;
}
import Link from "next/link";

export default function OfflinePage() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-4 py-24 text-center">
      <p className="text-sm font-medium uppercase tracking-widest text-amber-600 dark:text-amber-400">
        Offline
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
        You are not connected.
      </h1>
      <p className="mt-3 text-stone-600 dark:text-stone-300">
        This page has not been saved for offline reading yet. Pages you have
        already visited will still open.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-xl bg-emerald-700 px-6 py-3 font-semibold text-white transition hover:bg-emerald-800"
      >
        Try the home page
      </Link>
    </main>
  );
}
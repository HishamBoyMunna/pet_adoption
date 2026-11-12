import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PetCard } from "@/components/pet-card";
import { pets } from "@/data/pets";

export const metadata: Metadata = {
  description:
    "Every adoptable cat, dog, rabbit and bird currently looking for a home.",
};

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-20">
        <section className="py-12 sm:py-16">
          <p className="text-sm font-medium uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
            {pets.length} pets looking for a home
          </p>
          <h1 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl dark:text-stone-50">
            Find the one who has been waiting for you.
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-stone-600 dark:text-stone-300">
            Every profile here comes straight from a partner shelter or rescue.
            Install the app to keep browsing when you are out of range.
          </p>
        </section>

        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pets.map((pet) => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </ul>
      </main>
      <SiteFooter />
    </>
  );
}
import type { Metadata } from "next";
import { PetFeed } from "@/components/pet-feed";
import { pets } from "@/data/pets";

export const metadata: Metadata = {
  title: "The feed",
  description:
    "One adoptable pet per screen. Swipe through the feed and meet your next roommate.",
};

export default function FeedPage() {
  return <PetFeed pets={pets} />;
}

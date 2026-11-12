import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Paw Haven — Pet Adoption",
    short_name: "Paw Haven",
    description:
      "Browse adoptable cats, dogs, rabbits and birds from local shelters and rescues.",
    id: "/",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#fbf3e4",
    theme_color: "#fbf3e4",
    categories: ["lifestyle", "shopping", "social"],
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-maskable-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    shortcuts: [
      {
        name: "The wall",
        short_name: "Wall",
        url: "/",
      },
      {
        name: "The feed",
        short_name: "Feed",
        url: "/feed",
      },
    ],
  };
}

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
    background_color: "#1d4a41",
    theme_color: "#1d4a41",
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
        name: "All pets",
        short_name: "Browse",
        url: "/",
      },
    ],
  };
}
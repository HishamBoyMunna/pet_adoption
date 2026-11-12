import type { Metadata, Viewport } from "next";
import { Caveat, Fraunces, Nunito } from "next/font/google";
import { ServiceWorkerRegistration } from "@/components/service-worker-registration";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

const description =
  "Browse adoptable cats, dogs, rabbits and birds from local shelters and rescues.";

export const metadata: Metadata = {
  title: {
    default: "Paw Haven — Pet Adoption",
    template: "%s — Paw Haven",
  },
  description,
  applicationName: "Paw Haven",
  appleWebApp: {
    capable: true,
    title: "Paw Haven",
    statusBarStyle: "default",
  },
  formatDetection: { telephone: false },
  openGraph: {
    type: "website",
    siteName: "Paw Haven",
    title: "Paw Haven — Pet Adoption",
    description,
  },
  twitter: {
    card: "summary",
    title: "Paw Haven — Pet Adoption",
    description,
  },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

// `themeColor` lives in `viewport`, not `metadata` — it was split out in Next 14
// and `metadata.themeColor` is now a deprecated no-op.
export const viewport: Viewport = {
  themeColor: "#fbf3e4",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${nunito.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <ServiceWorkerRegistration />
        {children}
      </body>
    </html>
  );
}

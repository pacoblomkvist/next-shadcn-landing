import { SiteConfig, ContactConfig } from "@/types"

/* ====================
[> WEBSITE CONFIG <]
-- Fill the details about your website
 ==================== */

const baseUrl = "https://nextlanding.rdev.pro"

export const siteConfig: SiteConfig = {
  name: "Blmk Studio",
  author: "Blmk Studio 🔥",
  description:
    "Simple, Fast and Beautiful Apps.",
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Radix UI",
    "shadcn/ui",
    "landing Page",
    "Template",
    "Starter",
  ],
  url: {
    base: baseUrl,
    author: "https://redpangilinan.live",
  },
  ogImage: `${baseUrl}/og.jpg`,
}

export const contactConfig: ContactConfig = {
  email: "fgaobal@gmail.com",
}

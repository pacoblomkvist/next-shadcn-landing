import { HeroHeader, ContentSection } from "@/types/contents"

/* ====================
[> CUSTOMIZING CONTENT <]
-- Setup image by typing `/image-name.file` (Example: `/header-image.jpg`)
-- Add images by adding files to /public folder
-- Leave blank `` if you don't want to put texts or images
 ==================== */

export const heroHeader: HeroHeader = {
  header: `Empowering Your Vision, Faster and Simpler`,
  subheader: `Where Your Goals Meet Our Swift, Streamlined Software Solutions.`,
  image: `/coffee.svg`,
}

export const featureCards: ContentSection = {
  header: `Our Value`,
  subheader: `What, how and why we do it?`,
  content: [
    {
      text: `Next.js`,
      subtext: `The React Framework`,
      icon: "nextjs",
    },
    {
      text: `shadcn/ui`,
      subtext: `Beautifully designed components`,
      icon: "shadcnUi",
    },
    {
      text: `Vercel`,
      subtext: `Develop. Preview. Ship.`,
      icon: "vercel",
    },
    {
      text: `Async`,
      subtext: `Your time is gold`,
      icon: "messy",
    },
    {
      text: `All tied up`,
      subtext: `We are engineers. we solve problems`,
      icon: "meditation",
    },
    {
      text: `Simple and beautiful`,
      subtext: `❤️❤️❤️❤️`,
      icon: "reading",
    },
  ],
}

export const features: ContentSection = {
  header: `Features`,
  subheader: `Why choosing us?`,
  image: `/zombie.svg`,
  content: [
    {
      text: `SEO Optimized`,
      subtext: `Improved website visibility on search engines`,
      icon: "fileSearch",
    },
    {
      text: `Highly Performant`,
      subtext: `Fast loading times and smooth performance`,
      icon: "barChart",
    },
    {
      text: `Easy Customizability`,
      subtext: `Change your content and layout with little effort`,
      icon: "settings",
    },
    {
      text: `Availability`,
      subtext: `We always have the time for our clients`,
      icon: "calendar",
    }
  ],
}

import Join from "@/components/About/AboutSectionOne";
import Resources from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Facts from "@/components/Features";
import Hero from "@/components/Hero";
import Difference from "@/components/Difference";
import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Free Next.js Template for Startup and SaaS",
//   description: "This is Home for Startup Nextjs Template",
//   // other metadata
// };

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Facts />
      <Difference />
      <Resources />
      <Join />
    </>
  );
}

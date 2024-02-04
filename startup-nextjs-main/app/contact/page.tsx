import Hero from "@/components/Contact/hero";
import TellUs from "@/components/Contact/index";
import Join from "@/components/About/AboutSectionOne";
import ScrollUp from "@/components/Common/ScrollUp";

// export const metadata: Metadata = {
//   title: "Free Next.js Template for Startup and SaaS",
//   description: "This is Home for Startup Nextjs Template",
//   // other metadata
// };

export default function Contact() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <TellUs />
      <Join />
    </>
  );
}

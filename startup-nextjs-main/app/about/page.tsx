import Heading from "@/components/About/heading";
import Table from "@/components/About/table";
import ScrollUp from "@/components/Common/ScrollUp";

// export const metadata: Metadata = {
//   title: "Free Next.js Template for Startup and SaaS",
//   description: "This is Home for Startup Nextjs Template",
//   // other metadata
// };

export default function About() {
  return (
    <>
      <ScrollUp />
      <Heading />
      <Table />
    </>
  );
}

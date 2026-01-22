import Index from "@/components/pages/Index";
import { Sidebar } from "@/components/Sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Radiant Public School. Discover our philosophy, facilities, and academic programs.",
};

export default function Home() {
  return (
    <>
      <Sidebar />
      <Index />
    </>
  );
}

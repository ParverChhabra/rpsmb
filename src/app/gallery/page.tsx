import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Explore our campus life, events, and student activities through our photo gallery.",
};

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-20 min-h-screen">
      <h1 className="text-4xl font-serif font-bold text-cream mb-6">Gallery</h1>
      <p className="text-cream/80">Coming soon...</p>
    </div>
  );
}

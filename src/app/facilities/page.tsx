import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Facilities",
  description: "State-of-the-art facilities including labs, library, sports complex, and smart classrooms.",
};

export default function FacilitiesPage() {
  return (
    <div className="container mx-auto px-4 py-20 min-h-screen">
      <h1 className="text-4xl font-serif font-bold text-cream mb-6">Facilities</h1>
      <p className="text-cream/80">Coming soon...</p>
    </div>
  );
}

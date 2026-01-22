"use client";

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { useState, useRef } from 'react';

export default function AdmissionsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Google Form submission URL (must end in /formResponse)
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfvZ_a8GCa7acEshj-uQYooaVfwONsOweb4SDet0vjNtWJ-qw/formResponse";

  const handleSubmit = () => {
    setIsSubmitting(true);
    
    // We let the form submit naturally to the hidden iframe
    // This is the most reliable "headless" method for Google Forms
    toast.success("Enquiry submitted successfully! We'll contact you soon.");
    
    // Reset form after a short delay to allow the submission to start
    setTimeout(() => {
      const form = document.getElementById('admissions-form') as HTMLFormElement;
      if (form) form.reset();
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-12">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-cream mb-4 heading-accent">
              Admission Enquiry
            </h1>
            <p className="text-cream/80 text-lg max-w-2xl mx-auto mt-4">
              Take the first step towards your child's bright future. Fill out the form below to inquire about admissions for the upcoming academic session.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Card className="bg-card border-gold/20 shadow-2xl">
              <CardHeader className="space-y-2 text-center pb-8 border-b border-white/5">
                <CardTitle className="text-2xl font-serif text-cream">Application Form</CardTitle>
                <CardDescription className="text-cream/60">
                  Please provide accurate details. Our admissions team will contact you shortly from your Google Form responses.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-8">
                {/* Hidden iframe to handle the form submission without redirecting away from the site */}
                <iframe 
                  name="hidden_confirm" 
                  id="hidden_confirm" 
                  ref={iframeRef}
                  style={{ display: 'none' }}
                ></iframe>

                <form 
                  id="admissions-form"
                  action={GOOGLE_FORM_URL}
                  method="POST"
                  target="hidden_confirm"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="studentName" className="text-cream/90">Student's Name</Label>
                      <Input 
                        id="studentName" 
                        name="entry.1895029957" 
                        required 
                        placeholder="Enter full name" 
                        className="bg-background/50 border-white/10 text-cream placeholder:text-white/20 focus:border-gold/50"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="grade" className="text-cream/90">Grade Applying For</Label>
                      <Input 
                        id="grade" 
                        name="entry.772570165" 
                        required 
                        placeholder="e.g., Nursery, Class 1" 
                        className="bg-background/50 border-white/10 text-cream placeholder:text-white/20 focus:border-gold/50"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="parentName" className="text-cream/90">Parent/Guardian Name</Label>
                      <Input 
                        id="parentName" 
                        name="entry.112081119" 
                        required 
                        placeholder="Enter parent's name" 
                        className="bg-background/50 border-white/10 text-cream placeholder:text-white/20 focus:border-gold/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-cream/90">Phone Number</Label>
                      <Input 
                        id="phone" 
                        name="entry.1828955601" 
                        type="tel" 
                        required 
                        placeholder="Enter 10-digit number" 
                        className="bg-background/50 border-white/10 text-cream placeholder:text-white/20 focus:border-gold/50"
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full btn-premium bg-accent text-accent-foreground hover:bg-accent/90 py-6 text-lg font-serif"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Enquiry"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

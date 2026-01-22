"use client";

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { useState } from 'react';

export default function AdmissionsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = new URLSearchParams();
    
    // @ts-ignore
    for (const [key, value] of formData.entries()) {
      data.append(key, value.toString());
    }

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: data.toString(),
      });

      if (response.ok) {
        toast.success("Enquiry submitted successfully! We'll contact you soon.");
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
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
                  Please provide accurate details. Our admissions team will contact you shortly.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-8">
                <form 
                  onSubmit={handleSubmit}
                  name="admissions" 
                  className="space-y-6"
                >
                  <input type="hidden" name="form-name" value="admissions" />
                  <p className="hidden">
                    <label>
                      Don’t fill this out if you’re human: <input name="bot-field" />
                    </label>
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="studentName" className="text-cream/90">Student's Name</Label>
                      <Input 
                        id="studentName" 
                        name="studentName" 
                        required 
                        placeholder="Enter full name" 
                        className="bg-background/50 border-white/10 text-cream placeholder:text-white/20 focus:border-gold/50"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="grade" className="text-cream/90">Grade Applying For</Label>
                      <Select name="grade" required>
                        <SelectTrigger className="bg-background/50 border-white/10 text-cream focus:ring-gold/50">
                          <SelectValue placeholder="Select Grade" />
                        </SelectTrigger>
                        <SelectContent className="bg-card border-gold/20 text-cream">
                          <SelectItem value="nursery">Nursery</SelectItem>
                          <SelectItem value="kg">Kindergarten (KG)</SelectItem>
                          <SelectItem value="class1">Class 1</SelectItem>
                          <SelectItem value="class2">Class 2</SelectItem>
                          <SelectItem value="class3">Class 3</SelectItem>
                          <SelectItem value="class4">Class 4</SelectItem>
                          <SelectItem value="class5">Class 5</SelectItem>
                          <SelectItem value="class6">Class 6</SelectItem>
                          <SelectItem value="class7">Class 7</SelectItem>
                          <SelectItem value="class8">Class 8</SelectItem>
                          <SelectItem value="class9">Class 9</SelectItem>
                          <SelectItem value="class10">Class 10</SelectItem>
                          <SelectItem value="class11">Class 11</SelectItem>
                          <SelectItem value="class12">Class 12</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="parentName" className="text-cream/90">Parent/Guardian Name</Label>
                      <Input 
                        id="parentName" 
                        name="parentName" 
                        required 
                        placeholder="Enter parent's name" 
                        className="bg-background/50 border-white/10 text-cream placeholder:text-white/20 focus:border-gold/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-cream/90">Phone Number</Label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        type="tel" 
                        required 
                        placeholder="Enter 10-digit number" 
                        className="bg-background/50 border-white/10 text-cream placeholder:text-white/20 focus:border-gold/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-cream/90">Email Address</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      required 
                      placeholder="name@example.com" 
                      className="bg-background/50 border-white/10 text-cream placeholder:text-white/20 focus:border-gold/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-cream/90">Additional Message (Optional)</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      placeholder="Any specific queries or requirements..." 
                      className="min-h-[120px] bg-background/50 border-white/10 text-cream placeholder:text-white/20 focus:border-gold/50 resize-none"
                    />
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

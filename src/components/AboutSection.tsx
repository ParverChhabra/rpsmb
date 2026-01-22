import { useFadeInOnScroll } from '@/hooks/useFadeInOnScroll';
import { BookOpen, Users, Award } from 'lucide-react';

export const AboutSection = () => {
  const { ref, isVisible } = useFadeInOnScroll();

  return (
    <section id="about" className="py-24 bg-background gold-texture gold-lines relative">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`fade-in-section ${isVisible ? 'visible' : ''}`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-gold font-medium tracking-widest uppercase text-sm mb-3">
              About Us
            </p>
            <h2 className="heading-accent font-serif text-3xl md:text-4xl font-bold text-cream mb-6">
              A Tradition of Excellence
            </h2>
            <p className="text-cream/60 max-w-2xl mx-auto text-lg">
              For nearly four decades, Radiant Public School has been a beacon of 
              quality education, nurturing students to become responsible citizens 
              and future leaders.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070"
                  alt="Students in classroom"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold/20 rounded-lg -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gold/10 rounded-lg -z-10" />
            </div>

            {/* Text Side */}
            <div className="space-y-6">
              <p className="text-cream/80 leading-relaxed">
                Radiant Public School was founded with a vision to provide holistic 
                education that goes beyond textbooks. Our institution is affiliated 
                with the Central Board of Secondary Education (CBSE) and is committed 
                to academic excellence coupled with character development.
              </p>
              <p className="text-cream/80 leading-relaxed">
                We believe that every child is unique and possesses immense potential. 
                Our dedicated faculty works tirelessly to identify and nurture the 
                individual talents of each student, preparing them for the challenges 
                of tomorrow.
              </p>

              {/* Feature Cards */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center p-4 bg-muted rounded-lg border border-gold/20">
                  <BookOpen className="w-8 h-8 text-gold mx-auto mb-2" />
                  <p className="text-sm font-medium text-cream">CBSE Curriculum</p>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg border border-gold/20">
                  <Users className="w-8 h-8 text-gold mx-auto mb-2" />
                  <p className="text-sm font-medium text-cream">Expert Faculty</p>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg border border-gold/20">
                  <Award className="w-8 h-8 text-gold mx-auto mb-2" />
                  <p className="text-sm font-medium text-cream">Award Winning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

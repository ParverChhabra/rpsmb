import { useFadeInOnScroll } from '@/hooks/useFadeInOnScroll';
import { Lightbulb, Target, Heart, Compass } from 'lucide-react';

const philosophyCards = [
  {
    icon: Lightbulb,
    title: 'Innovative Learning',
    description:
      'We embrace modern teaching methodologies while respecting traditional values, creating an environment where curiosity thrives.',
  },
  {
    icon: Target,
    title: 'Goal-Oriented Approach',
    description:
      'Every student is guided to set meaningful goals and provided with the support to achieve them through perseverance and hard work.',
  },
  {
    icon: Heart,
    title: 'Values First',
    description:
      'Character education is at the core of our curriculum. We instill integrity, compassion, and respect in every student.',
  },
  {
    icon: Compass,
    title: 'Holistic Development',
    description:
      'Beyond academics, we nurture physical fitness, artistic expression, and social responsibility through diverse co-curricular activities.',
  },
];

export const PhilosophySection = () => {
  const { ref, isVisible } = useFadeInOnScroll();

  return (
    <section id="philosophy" className="py-24 bg-card relative overflow-hidden">
      {/* Gold texture overlay */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 10% 20%, hsl(43 60% 54% / 0.15) 0%, transparent 40%),
                              radial-gradient(circle at 90% 80%, hsl(43 60% 54% / 0.1) 0%, transparent 35%)`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <div
          ref={ref}
          className={`fade-in-section ${isVisible ? 'visible' : ''}`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-gold font-medium tracking-widest uppercase text-sm mb-3">
              Our Philosophy
            </p>
            <h2 className="heading-accent font-serif text-3xl md:text-4xl font-bold text-cream mb-6">
              The Radiant Way of Learning
            </h2>
            <p className="text-cream/60 max-w-2xl mx-auto text-lg">
              Our educational philosophy is built on four pillars that guide every 
              aspect of teaching and learning at Radiant Public School.
            </p>
          </div>

          {/* Philosophy Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {philosophyCards.map((card, index) => (
              <div
                key={index}
                className="bg-muted/50 backdrop-blur-sm p-8 rounded-lg border border-gold/20 hover:border-gold/40 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-gold/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors border border-gold/20">
                  <card.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-cream mb-3">
                  {card.title}
                </h3>
                <p className="text-cream/60 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* Quote Section */}
          <div className="mt-16 text-center">
            <blockquote className="font-serif text-2xl md:text-3xl text-gold italic max-w-3xl mx-auto">
              "Education is not the filling of a pail, but the lighting of a fire."
            </blockquote>
            <p className="mt-4 text-cream/60">— William Butler Yeats</p>
          </div>
        </div>
      </div>
    </section>
  );
};

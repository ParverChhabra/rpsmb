import { useFadeInOnScroll } from '@/hooks/useFadeInOnScroll';

const stats = [
  { number: '38+', label: 'Years of Excellence' },
  { number: '5000+', label: 'Alumni Worldwide' },
  { number: '150+', label: 'Qualified Faculty' },
  { number: '98%', label: 'Board Results' },
];

export const StatsSection = () => {
  const { ref, isVisible } = useFadeInOnScroll();

  return (
    <section className="py-20 bg-gold relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(213 55% 12%) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <div
          ref={ref}
          className={`fade-in-section ${isVisible ? 'visible' : ''}`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="font-serif text-5xl md:text-6xl font-bold text-primary mb-2">
                  {stat.number}
                </p>
                <p className="text-primary/80 text-sm md:text-base font-medium tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

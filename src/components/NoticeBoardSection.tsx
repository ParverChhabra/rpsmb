import { useFadeInOnScroll } from '@/hooks/useFadeInOnScroll';
import { Pin, Calendar, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import notices from '@/data/notices.json';
import { useRef, useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface Notice {
  id: number;
  title: string;
  content: string;
  date: string;
  pinned: boolean;
  category: string;
}

const sortedNotices = [...(notices as Notice[])].sort((a, b) => {
  if (a.pinned && !b.pinned) return -1;
  if (!a.pinned && b.pinned) return 1;
  return new Date(b.date).getTime() - new Date(a.date).getTime();
});

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
};

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    Event: 'bg-blue-900/50 text-blue-300 border-blue-500/30',
    Admission: 'bg-emerald-900/50 text-emerald-300 border-emerald-500/30',
    Academic: 'bg-purple-900/50 text-purple-300 border-purple-500/30',
    Achievement: 'bg-amber-900/50 text-amber-300 border-amber-500/30',
    Holiday: 'bg-red-900/50 text-red-300 border-red-500/30',
    Sports: 'bg-orange-900/50 text-orange-300 border-orange-500/30',
  };
  return colors[category] || 'bg-gray-900/50 text-gray-300 border-gray-500/30';
};

export const NoticeBoardSection = () => {
  const { ref, isVisible } = useFadeInOnScroll();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);

  const updateArrowVisibility = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  useEffect(() => {
    updateArrowVisibility();
    window.addEventListener('resize', updateArrowVisibility);
    return () => window.removeEventListener('resize', updateArrowVisibility);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 380 + 24;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="notices" className="py-24 bg-background gold-texture relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div ref={ref} className={`fade-in-section ${isVisible ? 'visible' : ''}`}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="text-left">
              <p className="text-gold font-medium tracking-widest uppercase text-sm mb-3">Stay Updated</p>
              <h2 className="heading-accent font-serif text-3xl md:text-4xl font-bold text-cream">Notice Board</h2>
            </div>
            
            <div className="flex gap-4">
              <button
                onClick={() => scroll('left')}
                className={`p-3 rounded-full border-2 border-gold/30 text-gold hover:border-gold hover:bg-gold/10 transition-all duration-300 ${!showLeftArrow ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                aria-label="Scroll left"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => scroll('right')}
                className={`p-3 rounded-full border-2 border-gold/30 text-gold hover:border-gold hover:bg-gold/10 transition-all duration-300 ${!showRightArrow ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                aria-label="Scroll right"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div 
            ref={scrollContainerRef}
            onScroll={updateArrowVisibility}
            className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar"
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
          >
            {sortedNotices.map((notice) => (
              <article
                key={notice.id}
                className="flex-none w-[300px] md:w-[380px] snap-start notice-card bg-card border border-border rounded-lg p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className={`text-xs font-medium px-3 py-1 rounded-full border ${getCategoryColor(notice.category)}`}>
                    {notice.category}
                  </span>
                  {notice.pinned && <span className="pinned-badge flex items-center gap-1"><Pin size={12} />Pinned</span>}
                </div>
                <h3 className="font-serif text-lg font-semibold text-cream mb-3 line-clamp-2 min-h-[3.5rem]">{notice.title}</h3>
                <p className="text-cream/60 text-sm leading-relaxed mb-4 line-clamp-3 min-h-[4.5rem]">{notice.content}</p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-cream/50 text-sm"><Calendar size={14} />{formatDate(notice.date)}</div>
                  <button 
                    className="text-gold hover:text-gold-light text-sm font-medium flex items-center gap-1 transition-colors"
                    onClick={() => setSelectedNotice(notice)}
                  >
                    Read More <ArrowRight size={14} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <Dialog open={!!selectedNotice} onOpenChange={() => setSelectedNotice(null)}>
        <DialogContent className="sm:max-w-[600px] bg-card border-gold/20 text-cream">
          {selectedNotice && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3 mb-2">
                  <span className={`text-xs font-medium px-3 py-1 rounded-full border ${getCategoryColor(selectedNotice.category)}`}>
                    {selectedNotice.category}
                  </span>
                  <div className="flex items-center gap-2 text-gold/60 text-sm">
                    <Calendar size={14} />
                    {formatDate(selectedNotice.date)}
                  </div>
                </div>
                <DialogTitle className="font-serif text-2xl font-bold text-cream">
                  {selectedNotice.title}
                </DialogTitle>
                <DialogDescription className="text-cream/80 text-lg leading-relaxed pt-4">
                  {selectedNotice.content}
                </DialogDescription>
              </DialogHeader>
            </>
          )}
        </DialogContent>
      </Dialog>
      
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};


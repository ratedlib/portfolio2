'use client';

import { motion, type Transition } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/animate-ui/components/buttons/button';
import { useEmblaControls } from './useEmblaControls'; 

const transition: Transition = {
  type: 'spring',
  stiffness: 240,
  damping: 24,
  mass: 1,
};

interface LeadershipItem {
  title: string;
  organization: string;
  duration: string;
  description: string;
}

interface LeadershipCarouselProps {
  items: LeadershipItem[];
}

export default function LeadershipCarousel({ items }: LeadershipCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    containScroll: 'trimSnaps',
    dragFree: true,
  });

  const {
    selectedIndex,
    scrollSnaps,
    prevDisabled,
    nextDisabled,
    onDotClick,
    onPrev,
    onNext,
  } = useEmblaControls(emblaApi);

  return (
    <div className="w-full space-y-8">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {items.map((item, index) => {
            const isActive = index === selectedIndex;

            return (
              <motion.div
                key={index}
                className="
                  flex-[0_0_85%] sm:flex-[0_0_70%] md:flex-[0_0_55%] lg:flex-[0_0_45%]
                  min-w-0 px-4
                "
              >
                <motion.div
                  className={`
                    h-full p-6 md:p-8 rounded-2xl border border-white/20
                    bg-white/5 backdrop-blur-xl shadow-xl
                    flex flex-col justify-between
                    transition-all duration-500
                  `}
                  animate={{
                    scale: isActive ? 1.0 : 0.92,
                    opacity: isActive ? 1 : 0.75,
                    y: isActive ? 0 : 12,
                  }}
                  transition={transition}
                >
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">
                      {item.title}
                    </h3>
                    <p className="text-lg text-cyan-300 font-medium mb-1">
                      {item.organization}
                    </p>
                    <p className="text-sm text-white/70 mb-5">{item.duration}</p>

                    <p className="text-white/90 text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-between px-4">
        <Button
          size="icon"
          variant="outline"
          onClick={onPrev}
          disabled={prevDisabled}
          className="bg-white/10 border-white/20 hover:bg-white/20"
        >
          <ChevronLeft className="size-5" />
        </Button>

        <div className="flex gap-3">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => onDotClick(index)}
              className={`
                w-3 h-3 rounded-full transition-all duration-300
                ${index === selectedIndex ? 'bg-cyan-400 scale-125' : 'bg-white/30'}
              `}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <Button
          size="icon"
          variant="outline"
          onClick={onNext}
          disabled={nextDisabled}
          className="bg-white/10 border-white/20 hover:bg-white/20"
        >
          <ChevronRight className="size-5" />
        </Button>
      </div>
    </div>
  );
}
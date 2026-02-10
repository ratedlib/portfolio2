'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItemProps {
  title: string;
  company: string;
  duration: string;
  logo: string;
  responsibilities: string[];
}

export default function AccordionItem({
  title,
  company,
  duration,
  logo,
  responsibilities,
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="
        bg-white/5 backdrop-blur-xl border border-white/10 
        rounded-2xl overflow-hidden
        hover:bg-white/10 transition-all duration-300
        cursor-pointer
      "
      onClick={() => setIsOpen(!isOpen)}
    >

      <div className="flex items-center justify-between p-6 md:p-8">
        <div className="flex items-center gap-4 md:gap-6">
          <div className="flex-shrink-0">
            <img
              src={logo}
              alt={company}
              className="
                w-16 h-16 md:w-20 md:h-20 
                object-contain rounded-xl 
                border border-white/20 bg-white/80 shadow-md
              "
            />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">{title}</h3>
            <p className="text-cyan-300 font-medium">{company}</p>
            <p className="text-sm md:text-base text-white/60 mt-1">{duration}</p>
          </div>
        </div>

        <ChevronDown
          className={`w-6 h-6 md:w-7 md:h-7 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </div>

      <div
        className={`
          grid transition-all duration-300 ease-in-out
          ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}
        `}
      >
        <div className="overflow-hidden">
          <div className="px-6 md:px-8 pb-6 md:pb-8">
            <ul className="space-y-3 text-white/90 text-sm md:text-base list-disc pl-5 md:pl-6">
              {responsibilities.map((item, index) => (
                <li key={index} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
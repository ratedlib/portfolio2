'use client';
import LogoLoop from '@/components/LogoLoop';

import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiGithub } from 'react-icons/si';

export default function Home() {
  const navigation = [
    { name: "Overview", href: "/overview" },
    { name: "Working Experiences", href: "/work" },
    { name: "Leadership & Involvement", href: "/involvement" },
    { name: "Skills", href: "/skills" },
  ];

  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden">
      <StarsBackground
        className="absolute inset-0 z-0"
        starColor="#e0f7ff"
        speed={130}
        factor={0.04}
        pointerEvents={false}
      />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 py-12 text-white">
        

        <div className="w-full max-w-5xl mb-10 md:mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center font-doto drop-shadow-[0_4px_12px_rgba(255,255,255,0.5)]">
            Welcome to My Portfolio
          </h1>
        </div>


        <div className="w-full max-w-5xl flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
          

          <div className="flex-shrink-0">
            <div className="relative">
              <img
                src="/img/me.png"
                alt="Fauzan - Profile"
                className="
                  w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80
                  rounded-full object-cover
                  border-4 border-white/20
                  transition-transform duration-300 hover:scale-105
                "
              />

            </div>
          </div>

          <div className="flex-1 text-center md:text-left space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Hi, I'm Muhammad Fauzan
            </h2>
            
            <p className="text-lg md:text-xl text-white leading-relaxed max-w-2xl hover:drop-shadow-[0_2px_7px_rgba(255,255,255,0.6)]">
              Software Engineer
            </p>
             <p className="text-lg md:text-lg text-white leading-relaxed max-w-2xl">
             I build scalable apps and backend systems that actually work. 
              I’ve got hands-on experience in the high-stakes world of enterprise banking, 
              but I’m at my best when I'm collaborating on fresh, high-impact products.
              </p>
            <p className=" pt-10 text-lg">
              Technologies used:
            </p>
            <LogoLoop
                logos={techLogos}
                speed={30}
                direction="left"
                logoHeight={60}
                gap={60}
                hoverSpeed={0}
                scaleOnHover
                ariaLabel="Technology partners"
            />

          </div>
        </div>


        <div
          className="
            fixed left-4 top-1/2 -translate-y-1/2 z-30
            group hidden lg:block
          "
        >
          <div
            className="
              bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl
              w-3 hover:w-58
              transition-all duration-300 ease-out
              overflow-hidden px-4 py-6 border border-white/10
            "
          >
            <nav className="flex flex-col space-y-5">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="
                    text-white/90 font-medium tracking-wide
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-300
                    whitespace-nowrap hover:text-cyan-300 hover:scale-105
                  "
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>

<div className="py-16 px-4 md:px-8 max-w-6xl mx-auto">

  <div className="text-center mb-12">
    <h1 className="text-4xl md:text-5xl font-bold font-doto mb-4">
      Education Journey
    </h1>
    <p className="text-lg text-white/70">
      My academic path from secondary school to university
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
    

    <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 hover:shadow-2xl transition-all duration-300">
      <img 
        src="/img/smk.png" 
        alt="SMK Seksyen 24(2)" 
        className="w-20 h-20 mx-auto mb-6 object-contain rounded-lg border border-white/20"
      />
      <h3 className="text-2xl font-semibold mb-2">High School</h3>
      <p className="text-white/90 mb-4">SMK Seksyen 24(2)<br />Shah Alam</p>
      <p className="text-xl font-bold text-cyan-300">CGPA: 3.84</p>
      <p className="text-sm text-white/50 mt-4">2018 – 2020</p>
    </div>



    <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 hover:shadow-2xl transition-all duration-300 md:scale-105">
      <img 
        src="/img/matriks.png" 
        alt="Kolej Matrikulasi Perak" 
        className="w-24 h-24 mx-auto mb-6 object-contain rounded-lg border border-white/20"
      />
      <h3 className="text-2xl font-semibold mb-2">Matriculation</h3>
      <p className="text-white/90 mb-4">Kolej Matrikulasi Perak</p>
      <p className="text-xl font-bold text-cyan-300">CGPA: 3.84</p>
      <p className="text-sm text-white/50 mt-4">2020 – 2021</p>
    </div>


    <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 hover:shadow-2xl transition-all duration-300">
      <img 
        src="/img/uni.png" 
        alt="UTHM" 
        className="w-20 h-20 mx-auto mb-6 object-contain rounded-lg border border-white/20"
      />
      <h3 className="text-2xl font-semibold mb-2">Bachelor's Degree</h3>
      <p className="text-white/90 mb-4">Universiti Tun Hussein Onn<br />Malaysia (UTHM)</p>
      <p className="text-xl font-bold text-cyan-300">CGPA: 3.76</p>
      <p className="text-sm text-white/50 mt-4">2022 – Present</p>
    </div>
  </div>
</div>
      </div>

    </main>
  );
}
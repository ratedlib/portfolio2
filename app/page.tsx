'use client';
import LogoLoop from '@/components/LogoLoop';
import AccordionItem from '@/components/AccordionItem';
import LeadershipCarousel from '@/components/LeadershipCarousel';
import { SkillProgress } from '@/components/CircularProgress';
import Masonry from '@/components/Masonry';

import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars";
import { SiReact, SiLinkedin,  SiNextdotjs, SiHtml5,SiCss3, SiTypescript, SiGithub , SiCplusplus, SiJavascript,SiDart,SiMysql,SiNodedotjs,SiTailwindcss,SiFlutter,SiGit,SiExpress} from 'react-icons/si';
import { FaJava, FaPhp, FaTwitter } from "react-icons/fa";


export default function Home() {
  const navigation = [
    { name: "Overview", id: "overview" },
    { name: "Education", id: "education" },
    { name: "Working Experiences", id: "work" },
    { name: "Leadership & Involvement", id: "involvement" },
    { name: "Skills", id: "skills" },
    { name: "Hobbies", id: "hobbies" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const leadershipItems = [
  {
    title: "Executive Committee (EXCO) – Student Development Section",
    organization: "MASEL (Mahasiswa Selangor UTHM)",
    duration: "2024 – 2025",
    description:
      "Served as an Executive Committee member responsible for student development initiatives within the Selangor student association at UTHM. Planned, organized, and executed multiple student development programs at faculty and university levels.",
  },
  {
    title: "Head of Safety (Ketua Keselamatan)",
    organization: "Tunku Laksamana Johor Cancer Foundation UTHM Cancer Awareness Week 2024",
    duration: "Oct 2024 – Nov 2024",
    description:
      "Assisted in organizing and coordinated with committee members to implement crowd control and safety procedures during events.",
  },
  {
    title: "Facilitator & Speaker",
    organization: "Program Tautan Ilmu – Kluang High School",
    duration: "4 December 2024",
    description:
      "Led a Java programming workshop for Form 4 and Form 5 students, preparing them for SPM computer science topics.",
  },
  {
    title: "Participant",
    organization: "Kem Pengakap Hari Belia Negara – Port Dickson",
    duration: "27 – 28 May 2023",
    description:
      "Engaged in survival activities, including constructing temporary shelters and practicing backwoods cooking using minimal resources.",
  },
  {
    title: "Participant",
    organization: "Hackathon X_PETAKOM 2024 (Pitching Workshop)",
    duration: "19 October 2024",
    description:
      "Competed in a beginner-friendly hackathon focused on developing innovative mobile solutions for the Zero Hunger theme.",
  },
  {
    title: "Participant",
    organization: "I-HAX 2024: Innovation Hackathon – IIUM",
    duration: "19 – 20 October 2024",
    description:
      "Collaborated with a team to develop and pitch 'KerjaVillage,' a job-hunting application designed to improve the livelihoods of underserved rural communities.",
  },
  {
    title: "Participant",
    organization: "Cursor + Anthropic Hackathon Malaysia 2025 – Monash University Malaysia",
    duration: "7 – 8 December 2024",
    description:
      "Participated in a national-level hackathon leveraging AI-assisted development tools to build innovative software solutions.",
  },
];



const items = [
    {
      id: "1",
      img: "/img/Hobbies/golf.png",
      url: "/img/Hobbies/golf.png",
      height: 400,
    },
    {
      id: "2",
      img: "/img/Hobbies/udang2.png",
      url: "/img/Hobbies/udang.png",
      height: 300,
    },
    {
      id: "3",
      img: "/img/Hobbies/travel.png",
      url: "/img/Hobbies/travel.png",
      height: 600,
    },
        {
      id: "4",
      img: "/img/Hobbies/mancing.png",
      url: "/img/Hobbies/mancing.png",
      height: 400,
    },
      {
      id: "5",
      img: "/img/Hobbies/udang.png",
      url: "/img/Hobbies/udang.png",
      height: 700,
    },

      {
      id: "6",
      img: "/img/Hobbies/sungai.png",
      url: "/img/Hobbies/sungai.png",
      height: 700,
    },

      {
      id: "7",
      img: "/img/Hobbies/edit.png",
      url: "/img/Hobbies/edit.png",
      height: 400,
    },

      {
      id: "8",
      img: "/img/Hobbies/snooker.png",
      url: "/img/Hobbies/snooker.png",
      height: 500,
    },
      {
      id: "9",
      img: "/img/Hobbies/gaming.png",
      url: "/img/Hobbies/gaming.png",
      height: 400,
    },

      {
      id: "10",
      img: "/img/Hobbies/cafehunting.png",
      url: "/img/Hobbies/cafehunting.png",
      height: 700,
    },

      {
      id: "11",
      img: "/img/Hobbies/movies.png",
      url: "/img/Hobbies/movies.png",
      height: 600,
    },

      {
      id: "12",
      img: "/img/Hobbies/reading.png",
      url: "/img/Hobbies/reading.png",
      height: 500,
    },

      {
      id: "13",
      img: "/img/Hobbies/bbq.png",
      url: "/img/Hobbies/bbq.png",
      height: 400,
    },

      {
      id: "14",
      img: "/img/Hobbies/concert.png",
      url: "/img/Hobbies/concert.png",
      height: 400,
    },
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
          <h1 className="text-6xl font-bold text-center font-doto drop-shadow-[0_4px_12px_rgba(255,255,255,0.5)]">
            Muhammad Fauzan - Portfolio
          </h1>
        </div>


        <div id="overview" className="w-full max-w-5xl flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
          
        <div className="flex-shrink-0 w-full md:w-auto">
              <img
                src="/img/3dfull2.png"
                alt="Fauzan - 3D Character"
                className="
                  w-full max-w-md max-w-lg
                  max-h-[75vh]
                  transition-transform duration-300 hover:scale-[1.04]
                "
              />
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
              bg-white/5 backdrop-blur-xl  rounded-2xl shadow-2xl
              w-3 hover:w-58
              transition-all duration-300 ease-out
              overflow-hidden px-4 py-6 border border-white/10
            "
           >
            
            <nav className="flex flex-col space-y-5">

              {navigation.map((item) => (
                
                <a
                
                  key={item.name}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
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

      <div id="education" className="py-10 px-4 md:px-8 max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-doto mb-4">
            Education Journey
          </h1>
          <p className="text-lg text-white/70">
            My academic path from secondary school to university
          </p>
        </div>

        <div className="grid grid-cols-3 gap-12 relative">
          

          <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 hover:shadow-2xl transition-all duration-300">
            <img 
              src="/img/smk.png" 
              alt="SMK Seksyen 24(2)" 
              className="w-20 h-20 mx-auto mb-6 object-contain "
            />
            <h3 className="text-2xl font-semibold mb-2">High School</h3>
            <p className="text-white/90 mb-4">SMK Seksyen 24(2)<br />Shah Alam</p>
            
            <p className="text-sm text-white/50 mt-4">2018 – 2020</p>
          </div>



          <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 hover:shadow-2xl transition-all duration-300 md:scale-105">
            <img 
              src="/img/matriks.png" 
              alt="Kolej Matrikulasi Perak" 
              className="w-24 h-24 mx-auto mb-6 object-contain "
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
              className="w-20 h-20 mx-auto mb-6 object-contain "
            />
            <h3 className="text-2xl font-semibold mb-2">Bachelor's Degree</h3>
            <p className="text-white/90 mb-4">Universiti Tun Hussein Onn<br />Malaysia (UTHM)</p>
            <p className="text-xl font-bold text-cyan-300">CGPA: 3.76</p>
            <p className="text-sm text-white/50 mt-4">2022 – 2026</p>
          </div>
        </div>
      </div>

      <div id="work" className="py-16 md:py-24 px-6 md:px-12 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-doto mb-4">
            Working Experiences
          </h1>
          <p className="text-lg text-white/70">
            My professional journey and work experiences
          </p>
        </div>

        <div className="space-y-6">
          <AccordionItem
            title="Software Engineer Intern"
            company="Infopro Sdn Bhd"
            duration="August 2025 – January 2026"
            logo="/img/infopro.png"
            responsibilities={[
              "Completed 100% of assigned backend development, testing, and production support tasks within project timelines for multinational banking clients including Maybank and RHB regional branches.",
              "Designed and implemented backend system enhancements for enterprise banking platforms, ensuring compliance with regulatory and business requirements.",
              "Collaborated with cross-functional teams and clients to gather requirements and deliver tailored technical solutions.",
              "Conducted system testing, deployment validation, and post-release production support to ensure system stability and performance.",
              "Maintained consistent attendance and professionalism throughout the internship period.",
            ]}
          />

          <AccordionItem
            title="Graphic Designer Apprenticeship"
            company="Pantai Bharu Corporation Sdn Bhd"
            duration="November 2019 – December 2019"
            logo="/img/pantaibharu.png"
            responsibilities={[
              "Designed digital and print marketing materials, enhancing brand presence and audience engagement.",
              "Gained experience working in deadline-driven corporate environments.",
            ]}
          />

          <AccordionItem
            title="UI Designer Apprenticeship"
            company="Pantai Bharu Corporation Sdn Bhd"
            duration="November 2020 – December 2020"
            logo="/img/pantaibharu.png"
            responsibilities={[
              "Developed UI frameworks to enhance user experience and ensure responsive design across multiple platforms.",
              "Gained hands-on experience in project workflows, team coordination, and professional collaboration in a corporate environment.",
            ]}
          />
        </div>
      </div>
        <div id="involvement" className="py-24 px-12 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-doto mb-4">
              Leadership & Involvement
            </h1>
            <p className="text-lg text-white/70">
              My roles, contributions, and community activities
            </p>
          </div>

          <LeadershipCarousel items={leadershipItems} />
        </div>
        <div id="skills" className="py-24 px-12 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-doto mb-4">
              Skills
            </h1>
            <p className="text-lg text-white/70">
              Skills that I learnt along the way
            </p>
          </div>
          <div className="mb-15">
          <h2 className="text-3xl font-semibold text-white mb-8 text-center">
            Programming Languages
          </h2>
          <div className="grid grid-cols-6 gap-8">
            <SkillProgress skill="C++" level={40} icon={SiCplusplus} />
            <SkillProgress skill="Java" level={80} icon={FaJava} />
            <SkillProgress skill="JavaScript" level={75} icon={SiJavascript} />
            <SkillProgress skill="Dart" level={45} icon={SiDart} />
            <SkillProgress skill="SQL" level={80} icon={SiMysql} />
            <SkillProgress skill="PHP" level={75} icon={FaPhp} />
          </div>
        </div>


        <div className="mb-15">
          <h2 className="text-3xl font-semibold text-white mb-8 text-center">
            Web Technologies & Frameworks
          </h2>
          <div className="grid grid-cols-7 gap-8">
            <SkillProgress skill="HTML" level={75} icon={SiHtml5} />
            <SkillProgress skill="CSS" level={75} icon={SiCss3} />
            <SkillProgress skill="React" level={70} icon={SiReact} />
            <SkillProgress skill="Node.js" level={70} icon={SiNodedotjs} />
            <SkillProgress skill="Express.js" level={70} icon={SiExpress} />
            <SkillProgress skill="Tailwind CSS" level={85} icon={SiTailwindcss} />
            <SkillProgress skill="Flutter" level={60} icon={SiFlutter} />
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-white mb-8 text-center">
            Languages
          </h2>
          <div className="grid grid-cols-2">
            <SkillProgress skill="Malay" level={80} />
            <SkillProgress skill="English" level={75} />
          </div>
        </div>
        
        </div>

          <div id="hobbies" className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-doto mb-4">
              Hobbies
            </h1>
            <p className="text-lg text-white/70">
              A glimpse of how I spend my free time
            </p>
          </div>
          
      <Masonry
        items={items}
        ease="power3.out"
        duration={0.6}
        stagger={0.05}
        animateFrom="bottom"
        scaleOnHover
        hoverScale={0.95}
        blurToFocus
        colorShiftOnHover={false}
      />
      </div>

      <div>
<footer className="w-full py-8 px-6 md:px-12 bg-white/5 backdrop-blur-xl border-t border-white/10 text-white/80">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
    <div className="flex-shrink-0">
      <img
        src="/img/3d.png"
        alt="Muhammad Fauzan Logo"
        className="w-20 h-20 md:w-24 md:h-24 object-contain rounded-full border border-white/20 shadow-lg"
      />
    </div>

    <div className="text-center text-sm md:text-base">
      <p>© {new Date().getFullYear()} Muhammad Fauzan</p>
      <p className="mt-1">All rights reserved.</p>
    </div>

    <div className="flex items-center gap-6">
      <a
        href="https://github.com/ratedlib"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-cyan-300 transition-colors duration-300"
        aria-label="GitHub"
      >
        <SiGithub className="w-7 h-7" />
      </a>
      <a
        href="https://www.linkedin.com/in/muhammad-fauzan-813651356"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-cyan-300 transition-colors duration-300"
        aria-label="LinkedIn"
      >
        <SiLinkedin className="w-7 h-7" />
      </a>
      <a
        href="https://x.com/ratedlib"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-cyan-300 transition-colors duration-300"
        aria-label="Twitter / X"
      >
        <FaTwitter className="w-7 h-7" />
      </a>
    </div>
  </div>
</footer>
      </div>
      
      
    </main>
  );
}
import { StackInteractor } from "./ui/connoisseur-stack-interactor";
import { ContainerScroll } from "./ui/container-scroll-animation";

/* Portfolio-relevant skill items shown in the GSAP interactor */
const portfolioItems = [
  {
    num: "01",
    name: "Full Stack Development",
    clipId: "clip-original",
    image:
      "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    num: "02",
    name: "AI Engineer",
    clipId: "clip-hexagons",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    num: "03",
    name: "Problem Solving",
    clipId: "clip-pixels",
    image:
      "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
];

export function Hero() {
  return (
    <div id="home" className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <div className="mt-12 mb-8 md:mt-14 md:mb-10 text-center px-4">
              <p className="hidden md:inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 text-[11px] font-semibold tracking-[0.18em] uppercase text-sky-700 dark:text-cyan-300 mb-4">
                Software Engineer • Full Stack • AI
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.08] md:leading-[1.03] tracking-tight text-slate-900 dark:text-cyan-50 text-center drop-shadow-sm max-w-5xl mx-auto">
                Building robust apps with<br className="hidden md:block" />
                <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-700 via-cyan-500 to-sky-500 dark:from-cyan-200 dark:via-cyan-300 dark:to-sky-300"> clean architecture and real-world impact</span>
              </h1>
              <p className="mt-4 max-w-xl md:max-w-2xl mx-auto text-sm sm:text-base md:text-base text-slate-600 dark:text-slate-300">
                I build fast, scalable web products using React, Django REST, and modern cloud tools.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <a href="#portfolio" className="px-6 py-3 rounded-xl bg-slate-900 text-white dark:bg-cyan-300 dark:text-slate-950 font-semibold shadow-lg shadow-slate-900/20 dark:shadow-cyan-300/20 hover:-translate-y-0.5 transition-all">
                  See Projects
                </a>
                <a href="#connect" className="px-6 py-3 rounded-xl border border-slate-300 dark:border-cyan-400/40 text-slate-700 dark:text-cyan-100 font-semibold bg-white/70 dark:bg-cyan-500/5 backdrop-blur hover:border-sky-500 dark:hover:border-cyan-200 transition-all">
                  Let&apos;s Collaborate
                </a>
              </div>
            </div>
          </>
        }
      >
        {/* The GSAP stack interactor fills the scroll card */}
        <div className="w-full h-full flex items-center justify-center bg-white dark:bg-[#050505]">
          <StackInteractor items={portfolioItems} />
        </div>
      </ContainerScroll>
    </div>
  );
}

export default Hero;
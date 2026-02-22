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
            <p className="hidden md:block text-sm md:text-base font-medium tracking-widest uppercase text-blue-500 dark:text-blue-400 mb-3">
              Full-Stack Engineer · React · Django · Cloud
            </p>
            <h1 className="text-2xl md:text-5xl font-medium tracking-tight text-gray-600 dark:text-gray-400 mb-0 md:mb-2">
              Hi, I&apos;m{" "}
              <span className="text-gray-900 dark:text-white font-bold">
                Raju Ch
              </span>
              <br />
              <span className="text-4xl md:text-[6rem] font-black tracking-tighter mt-1 md:mt-1 leading-[1.05] bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-500 dark:from-white dark:to-white/60 drop-shadow-sm block">
                Building Scalable
              </span>
              <span className="text-4xl md:text-[6rem] font-black tracking-tighter leading-[1.05] text-gray-900 dark:text-white block mt-0 md:mt-2">
                Web Solutions
              </span>
            </h1>
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
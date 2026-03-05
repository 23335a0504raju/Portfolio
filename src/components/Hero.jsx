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
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-gray-900 dark:text-white mt-4 mb-4 md:mt-8 md:mb-8 text-center drop-shadow-sm">
              Hi, I&apos;m <br className="md:hidden" /><span className="font-bold bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-500 dark:from-white dark:to-gray-400">Raju Ch</span>
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
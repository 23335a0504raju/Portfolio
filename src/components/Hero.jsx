import profileImg from "../assets/profile.png";
import { ContainerScroll } from "./ui/container-scroll-animation";

export function Hero() {
  return (
    <div id="home" className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
              Building Scalable & Modern <br />
              <span className="text-5xl md:text-[6rem] font-bold mt-1 leading-none text-black dark:text-white">
                Web Solutions
              </span>
            </h1>
          </>
        }
      >
        <img
          src={profileImg}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}

export default Hero;
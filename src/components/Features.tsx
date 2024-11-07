import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "../utils/animation";
import { exploreVideo } from "../utils";

const Features = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  useGSAP(() => {
    animateWithGsap("#features_title", { y: 0, opacity: 1 });
  }, []);

  return (
    <section className="common-padding relative h-full overflow-hidden bg-zinc">
      <div className="screen-max-width">
        <div className="mb-12 w-full">
          <h1 id="features_title" className="section-heading">
            Explore the full story.
          </h1>
        </div>

        <div className="flex flex-col items-center justify-center overflow-hidden">
          <div className="mb-24 mt-32 pl-24">
            <h2 className="text-5xl font-semibold lg:text-7xl">iPhone.</h2>
            <h2 className="text-5xl font-semibold lg:text-7xl">
              Forged in titanium.
            </h2>
          </div>

          <div className="flex-center flex-col sm:px-10">
            <div className="relative flex h-[50vh] w-full items-center">
              <video
                id="exploreVideo"
                className="h-full w-full object-cover object-center"
                preload="none"
                playsInline
                autoPlay
                muted
                ref={videoRef}
              >
                <source src={exploreVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

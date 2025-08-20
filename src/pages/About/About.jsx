import HeroImg from "@/assets/images/hero.jpeg";
import OlovaLogo from "@/assets/images/olova.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          {/* <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Designer, Creator, Innovator
          </h2> */}
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                I am a Software Developer with 2.5 years of experience, specializing in building responsive, user-friendly, and high-performing web applications. I have hands-on expertise in Angular (latest versions), JavaScript, TypeScript, HTML5, CSS3, and modern UI frameworks.{" "}
                {/* <span className="font-bold text-white">
                  As the creator of the OlovaJS UI Framework
                </span> */}

              Throughout my career, I have worked on creating dynamic dashboards, portfolio websites, and service-based applications, ensuring cross-browser compatibility and optimized performance.

I collaborate effectively with backend developers, designers, and stakeholders to deliver scalable and business-driven solutions. Passionate about learning new technologies, I constantly improve my skills to stay updated with industry trends. My focus is on clean code, reusable components, and delivering seamless user experiences.
              </p>
              <p className="text-white">
                My focus is on making web development faster, easier, and
                accessible to all developers. Currently, I'm expanding into
                backend development to grow as a full-stack developer and create
                seamless, robust web applications.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I'm a lifelong learner and innovator, driven by a desire to
                    contribute to the developer community with new ideas and
                    tools that deliver real value. 
                  </p>

                  <div className="mt-6 space-y-3">
                   
                    <div className="flex items-center gap-2">
                     
                      {/* <span className="text-white">OlovaJS</span> */}
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

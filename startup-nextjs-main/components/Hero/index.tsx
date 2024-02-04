import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-[#D4D1D1] pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
        >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 flex justify-end "> 
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center bg-silver"
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-black sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  We Are NestHub
                </h1>
                <p className="dark:text-black m-0 mb-12 text-base !leading-relaxed sm:text-lg md:text-xl">
                We empower Texan immigrants with a vital hub offering more than assistance — spanning jobs, 
                food security, and housing. We build bridges, foster connections, and provide essential resources 
                for a brighter future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

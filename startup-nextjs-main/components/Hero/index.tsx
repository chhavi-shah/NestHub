import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      > 
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 flex justify-end"> 
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
        <div className="absolute left-0 bottom-0 z-[-1] opacity-30 lg:opacity-100">
        <svg
          width="200%"  // Adjust the width to take up half of the screen
          height="100%"  // Keep the aspect ratio
          viewBox="200 0 450 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <image href="/images/hero/bigblueegg.svg" width="100%" height="100%" />
        </svg>
      </div>
      <div className="absolute right-0 top-20 z-[-1] opacity-30 lg:opacity-100">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 350 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <image href="/images/hero/smallblueegg.svg" x="20%" width="100%" height="100%" />
        </svg>
      </div>
      <div className="absolute right-0 bottom-20 z-[-1] opacity-30 lg:opacity-100">
        <svg
          width="100%"  // Adjust the width to take up half of the screen
          height="100%"  // Keep the aspect ratio
          viewBox="0 0 450 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <image href="/images/hero/smallorangeegg.svg" x="10%" width="100%" height="100%" />
        </svg>
      </div>

      </section>
    </>
  );
};

export default Hero;

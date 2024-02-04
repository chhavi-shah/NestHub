const Contact = () => {
  return (
    <>
      <section
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      > 
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 flex justify-end"> 
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center bg-silver"
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 text-3xl font-bold leading-tight text-[#E67220] sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Contact Us
                </h1>
                <div className="absolute left-60 top-0 z-[-1] opacity-30 lg:opacity-100">
                  <svg
                    width="250%"  // Adjust the width to take up half of the screen
                    height="150%"  // Keep the aspect ratio
                    viewBox="0 0 80 110"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <image href="/images/hero/bigblueegg.svg" width="100%" height="100%" />
                  </svg>
                </div>
                {/* <p className="dark:text-black m-0 mb-12 text-base !leading-relaxed sm:text-lg md:text-xl">
                  We empower Texan immigrants with a vital hub offering more than assistance — spanning jobs, 
                  food security, and housing. We build bridges, foster connections, and provide essential resources 
                  for a brighter future.
                </p> */}
              </div>
            </div>
          </div>
        </div>

      </section>

    </>
  );
};

export default Contact;

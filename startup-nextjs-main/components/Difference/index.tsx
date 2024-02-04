import Link from "next/link";

const Difference = () => {
  return (
    <>
      <section
        className="relative z-10 overflow-hidden bg-[#3D6FAA] pb-16 pt-[40px] md:pb-[40px] md:pt-[60px] xl:pb-[80px] xl:pt-[100px] 2xl:pb-[120px] 2xl:pt-[130px]"
        >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 flex justify-end "> 
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 text-3xl font-bold leading-tight text-white dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                This is How We Make a Difference
                </h1>
                <p className="dark:text-white m-0 mb-12 text-base !leading-relaxed sm:text-lg md:text-xl">
                Lorem ipsum dolor sit amet consectetur. Viverra mus imperdiet diam velit turpis malesuada. 
                Consectetur quam vitae donec feugiat at non. Commodo vitae scelerisque urna enim vel ornare. Amet mi diam quis diam
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Difference;


"use client";
import Link from "next/link";

const Join = () => {
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
                Join Our Community Today!
                </h1>
                <p className="dark:text-white m-0 mb-12 text-base !leading-relaxed sm:text-lg md:text-xl">
                Connect with like-minded individuals through Slack. 
                Share experiences, access valuable resources, and build a strong network. Together, we thrive.
                </p>
                <a href="/about">
                  <p className="rounded-text-orange">Join the Facebook Community!</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
       
       .rounded-text-orange {
         display: inline-block;
         padding: 20px 40px; /* Adjust padding for spacing */
         background-color: #E67220;
         border-radius: 20px; /* Adjust border-radius for rounded edges */
         color: white; /* Adjust text color */
         font-weight: bold; /* Adjust font weight */
         font-size: 18px;
       }
     `}</style>
    </>
  );
};

export default Join;


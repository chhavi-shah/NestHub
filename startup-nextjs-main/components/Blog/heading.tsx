"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

const Heading = () => {

  return (
    <>
    <section
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      > 
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 flex justify-end"> 
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                    <span className="text-black">Find Housing</span>{" "}
                  <span className="text-[#E67220]">Today</span>
                </h1>
                <div className="dark:text-black md-8">
                Your pathway to a welcoming home begins here! Explore housing options tailored to support your journey in the 
                Lone Star State, fitting your needs and budget. Let NestHub guide you in securing a home, ensuring a strong start 
                to your new beginning.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-20 top-0 z-[-1] opacity-30 lg:opacity-100">
            <svg
                    width="500%"  
                    height="400%"  // Keep the aspect ratio
                    viewBox="0 0 110 130"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <image href="/images/blog/Polygon1.svg" width="100%" height="100%" />
            </svg>
        </div>

      </section>
    </>
  );
};

export default Heading;

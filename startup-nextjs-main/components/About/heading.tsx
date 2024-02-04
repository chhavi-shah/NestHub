"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

const Heading = () => {

  return (
    <>
    <section
        className="relative ombre-background z-10 overflow-hidden bg-white pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      > 
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 flex justify-end"> 
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                    <span className="text-black">Find Work</span>{" "}
                  <span className="text-[#E67220]">Today</span>
                </h1>
                <div className="dark:text-black md-8">
                We're not just about finding jobs; we're about finding the right job for you. 
                Dive into our comprehensive hub of resources, tailored to guide Texan immigrants on their employment journey.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-0 top-0 z-[-1] opacity-30 lg:opacity-100">
            <svg
                    width="150%"  
                    height="200%"  // Keep the aspect ratio
                    viewBox="40 0 110 130"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <image href="/images/about/birdslines-3.svg" width="100%" height="100%" />
            </svg>
        </div>
        <div className="absolute right-0 bottom-0 z-[-1] opacity-30 lg:opacity-100">
            <svg
                    width="100%"  
                    height="150%"  // Keep the aspect ratio
                    viewBox="0 0 110 130"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <image href="/images/about/birdslines-2.svg" width="100%" height="100%" />
            </svg>
        </div>

      </section>
    <style jsx>{`
       .ombre-background {
        background: linear-gradient(to bottom, #3D6FAA, #FCFCFC);
      }
    `}</style>
    </>
  );
};

export default Heading;

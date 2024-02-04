"use client";
import SectionTitle from "../Common/SectionTitle";

const Resources = () => {
  return (
    <>
      <section id="features" className="bg-white dark:text-black py-16 md:py-20 lg:py-28">
        <div className="container dark:text-black">
          <SectionTitle
            title="Resource Hub"
            paragraph=""
            center
          />
        </div>
        <div className="grid grid-cols-3 gap-3 m-5">
          <div className="bg-[#D4D1D1] h-64 items-center text-center flex flex-col justify-center">
            <p className="text-4xl mb-4">Find Work</p>
            <p>
              <a href="/about" className="rounded-text-orange">Let's go</a>
            </p>
          </div>
          <div className="bg-[#D4D1D1] h-64 items-center text-center flex flex-col justify-center">
            <p className="text-4xl mb-4">Find Housing</p>
            <p>
              <a href="/contact" className="rounded-text-orange">Let's go</a>
            </p>
          </div>
          <div className="bg-[#D4D1D1] h-64 items-center text-center flex flex-col justify-center">
            <p className="text-4xl mb-4">Find Food</p>
            <p>
              <a href="/blog-sidebar" className="rounded-text-orange">Let's go</a>
            </p>
          </div>
        </div>
      </section>
      <style jsx>{`
       
       .rounded-text-orange {
         display: inline-block;
         padding: 10px 20px; /* Adjust padding for spacing */
         background-color: #E67220;
         border-radius: 20px; /* Adjust border-radius for rounded edges */
         color: white; /* Adjust text color */
         font-weight: bold; /* Adjust font weight */
       }
     `}</style>
    </>
  );
};

export default Resources;

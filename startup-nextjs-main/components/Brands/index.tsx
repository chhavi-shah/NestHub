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
          <div className="bg-[#D4D1D1] h-64 items-center text-center flex justify-center text-4xl">
            Find Work
          </div>
          <div className="bg-[#D4D1D1] h-64 items-center text-center flex justify-center text-4xl">
            Find Housing
          </div> 
          <div className="bg-[#D4D1D1] h-64 items-center text-center flex justify-center text-4xl">
            Find Food
          </div>
        </div>
      </section>
    </>
  );
};

export default Resources;

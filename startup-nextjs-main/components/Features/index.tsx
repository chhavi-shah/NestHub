import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="bg-white dark:text-black py-16 md:py-20 lg:py-28">
        <div className="container dark:text-black">
          <SectionTitle
            title="These Are the Facts"
            paragraph=""
            center
          />

          {/* <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div> */}
        </div>
        <div className="grid grid-cols-4 gap-4 m-5">
        <div className="bg-[#D4D1D1] h-64 items-center text-center flex justify-center">In 2018, 4.9 million immigrants (foreign-born individuals) comprised 17 percent of the population</div>
        <div className="bg-[#D4D1D1] h-64 items-center text-center flex justify-center">One in six Texas residents is an immigrant, while another one in six residents is a native-born U.S. citizen with at least one immigrant parent</div>
        <div className="bg-[#D4D1D1] h-64 items-center text-center flex justify-center">More than one-third of all immigrants in Texas are naturalized U.S. citizens</div>
        <div className="bg-[#D4D1D1] h-64 items-center text-center flex justify-center">1.4 million U.S. citizens in Texas live with at least one family member who is undocumented</div>
        </div>
      </section>
    </>
  );
};

export default Features;

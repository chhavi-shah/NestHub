"use client";

const Contact = () => {
  return (
    <>
    <section className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 flex justify-end">
            <div className="wow fadeInUp mx-auto max-w-[800px] text-center" data-wow-delay=".2s">
              {/* Your content here */}
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 m-5">
        <div className="dark:text-black md:5 items-center text-center flex flex-col justify-center">
          <p className="dark:text-[#E67220] text-4xl mb-8">Tell Us About Yourself!</p>
          <p className="commitment-text">
              Our commitment to personalized support extends to your valuable input. Use our virtual suggestion
              box to share your thoughts and preferences, contributing to a collaborative space for resource discovery.
              Whether it's housing, employment, healthcare, or other essential resources, your insights help shape a
              customized roadmap for a successful start. Let's build this journey together, ensuring that NestHub becomes
              an even more tailored and effective platform.
          </p>
        </div>
        <div className="dark:text-black h-64 items-center text-left flex flex-col justify-center">
          <div className="rounded-text-grey mb-4">
            Name
          </div>
          <div className="rounded-text-grey mb-4">
            Email
          </div>
          <div className="rounded-text-grey mb-4">
            City
          </div>
          <div className="rounded-text-grey mb-4">
            Resource
          </div>
          <div className="rounded-text-grey-large mb-4">
            Additional Message (Optional)
          </div>
          <div className="rounded-text-orange mb-4">
            Submit
          </div>
        </div>
      </div>
    </section>
    <style jsx>{`
       
        .rounded-text-orange {
          display: inline-block;
          padding: 10px 20px; /* Adjust padding for spacing */
          background-color: #E67220;
          margin-right: 10px;
          border-radius: 20px; /* Adjust border-radius for rounded edges */
          color: white; /* Adjust text color */
          text-align: center;
          width: 600px;
        }
        .rounded-text-grey {
          display: inline-block;
          padding: 10px 20px; /* Adjust padding for spacing */
          background-color: #D9D9D9;
          width: 600px;
          margin-right: 10px;
          border-radius: 20px; /* Adjust border-radius for rounded edges */
          color: #575757; /* Adjust text color */
        }
        .rounded-text-grey-large {
          display: inline-block;
          padding: 10px 20px; /* Adjust padding for spacing */
          background-color: #D9D9D9;
          width: 600px;
          height: 1000px;
          margin-right: 10px;
          border-radius: 20px; /* Adjust border-radius for rounded edges */
          color: #575757; /* Adjust text color */
        }
        .commitment-text {
          margin: 0 40px; /* Add left and right margin */
        }
    `}</style>
  </>
  );
};

export default Contact;

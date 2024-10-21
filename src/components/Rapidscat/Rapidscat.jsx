import React from "react";
import sateliteImg from "../../assets/solar-.jpg";

const Rapidscat = () => {
  return (
    <>
      <section className="bg-primary text-white pb-12">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div data-aos="zoom-in">
              <img
                src={sateliteImg}
                alt=""
                className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"
              />
            </div>
            <div className="space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800 ">
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-sky-800 uppercase"
              >
                our mission
              </p>
              <h1
                data-aos="fade-up"
                data-aos-delay="500"
                className="uppercase text-5xl"
              >
                ReUseable Energy
              </h1>
              <p data-aos="fade-up" data-aos-delay="700">
              Reusable energy, often referred to as renewable energy, encompasses sources that can be replenished 
              naturally, such as solar, wind, hydro, and geothermal power. These energy forms help reduce greenhouse 
              gas emissions, combat climate change, and promote environmental sustainability. By shifting towards 
              reusable energy, societies can decrease reliance on fossil fuels, enhance energy security, and create 
              a more resilient and sustainable future for generations to come.
              </p>
              <button
                data-aos="fade-up"
                data-aos-delay="900"
                className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200"
              >
                View All
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Rapidscat;

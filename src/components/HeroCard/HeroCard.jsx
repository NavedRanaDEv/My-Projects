import React from "react";
import wave from "../../assets/wave Gif.gif";
import { MdSolarPower } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { MdAppSettingsAlt } from "react-icons/md";

const ServiceData = [
  {
    title: "Connect",
    content: "More then 3000+",
    description:
      "Using our new and advanced technology, we satisfy more than 3,000 houses' power needs.",
    icon: <FaReact className="text-7xl" />,
    aosDelay: "300",
  },
  {
    title: "Backup",
    content: "12+ hours",
    description:
      "Our solar pannels gives 12+ hours of backup  power to your house, even in the night.",
    icon: <MdSolarPower className="text-7xl" />,
    aosDelay: "500",
  },
  {
    title: "App",
    content: "Custom App",
    description:
      "Our company provides you with an app to monitor your  power usage and consumption.",
    icon: <MdAppSettingsAlt className="text-7xl" />,
    aosDelay: "700",
  },
];
const HeroCard = () => {
  return (
    <>
      <section className="bg-primary">
        <div className="container">
          <div className="min-h-[400px]">
            <div>
              <div className=" grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10 ">
                {ServiceData.map((data, index) => {
                  return (
                    <div
                      data-aos="fade-up"
                      data-aos-delay={data.aosDelay}
                      className="min-h-[180px] flex flex-col justify-center items-center rounded-xl gap-2 bg-sky-900/60 backdrop-blur-sm  text-white text-center text-2xl py-8 px-3 w-full lg:w-[300px] mx-auto"
                    >
                      {data.icon}
                      <h1>{data.title}</h1>
                      <p>{data.content}</p>
                      <p className="text-sm">{data.description}</p>
                    </div>
                  );
                })}
              </div>
              <img
                src={wave}
                alt=""
                className="h-[200px] w-full  object-cover mix-blend-screen -translate-y-24 relative z-[0]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroCard;

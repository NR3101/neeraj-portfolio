import { workExperience } from "@/data";
import React from "react";
import { Button } from "./ui/MovingBorders";

const Experiences = () => {
  return (
    <div className="py-20" id="skills">
      <h1 className="heading">
        My {` `}
        <span className="text-purple">skills</span>
      </h1>

      {/* Experience cards */}
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            borderRadius="1.75rem"
            duration={Math.floor(Math.random() * 10000) + 10000}
            className="flex-1 text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold mb-8">
                  {card.title}
                </h1>
                <div className="grid grid-cols-2 gap-4 text-start text-white-100 mt-3 font-semibold">
                  {card.skills.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-start "
                    >
                      <img src={skill.icon} alt={skill.name} className="mr-2" />
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experiences;

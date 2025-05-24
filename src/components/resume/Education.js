import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

function Education() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex gap-20"
    >
      {/* 1st half */}
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className=" text-sm text-designColor tracking-[4px]">
            2010-2026
          </p>
          <h2 className=" text-4xl font-bold">Education Quality</h2>
        </div>
        <div>
          <div className="mt-14 w-full h-[1000px] border-l-[6px] border-black border-opacity-30 flex flex-col gap-4">
            <ResumeCard
              title="Information Technology TY-BTech"
              subTitle="VIIT, Pune (2022 - 2026)"
              result="8.37/10"
              des="I am currently in 3rd year of BTech pursuning IT engineering from VIIT, pune. I this 3 year of engineering I have experience various new situation and had great life."
            />
            <ResumeCard
              title="Higher Secondary School(12th)"
              subTitle="K.B.H. Junior College Malegaon (2020 - 2022)"
              result="90.33/100"
              des="I am completed my 12th grade from K.B.H. Junior College Malegaon Camp,Malegaon ,Dist.Nashik from Science stream."
            />
            <ResumeCard
              title="High School(10th)"
              subTitle="(2019 - 2020)"
              result="93.4/100"
              des="I have completed my 10th grade from Janta Vidyalay Vajirkhede,Tel.Malegaon ,Dist.Nashik in year 2019."
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Education;

import React from "react";
import Titles from "../layouts/Titles";
import Card from "./Card";
// import { AiFillAppstore } from "react-icons/ai";
import { FaReact, FaCode, FaAndroid } from "react-icons/fa";
// import { FaMobile, FaGlobe } from "react-icons/fa";
// import { SiProgress, SiAntdesign } from "react-icons/si";
import { FaComputer } from "react-icons/fa6";
// import {BsCodeSlash} from "react-icons/bs"

function Features() {
  return (
    <section
      id="features"
      className="w-full px-20 py-20 border-b-[1px] border-b-black"
    >
      <Titles title="Features" des="What I Do" />
      <div className="grid grid-cols-3 gap-20">
        <Card
          title="Problem Solver"
          des="I have solved 300+ DSA problem on Different Platform."
          icon={<FaCode />}
        />

        <Card
          title="JAVA Developer"
          des="I have build Contact Managing and streaming web application using Html, CSS, Tailwind and Spring boot."
          icon={<FaReact />}
        />

        <Card
          title="AI/ML Enthusiastic"
          des="I have a keen interest in Machine Learning and have built prediction projects such as corrosion prediction and harvesting output prediction"
          icon={<FaComputer />}
        />
        <Card
          title="Android development"
          des="Currently working on android developement project of QR based assets management system with integration of SQLite database.                                       "
          icon={<FaAndroid />}
        />

        {/* <Card
          title="Android development"
          des="Currently working on android developement project of QR based assets management with RFID application."
          icon={<FaAndroid />}
        /> */}

        {/* <Card
          title="Read Books,Playi"
          des="."
          icon={<FaAndroid />}
        /> */}

        {/* <Card
      title="Mobile Development"
      des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad"
      icon={<FaMobile/>}
      />
      
      <Card
      title="UX Design"
      des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad"
      icon={<SiAntdesign/>}
      />
      
      <Card
      title="Hosting Websites"
      des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad"
      icon={<FaGlobe/>}
      /> */}
      </div>
    </section>
  );
}

export default Features;

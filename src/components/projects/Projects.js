import React from "react";
import ProjectsCard from "./ProjectsCard";
import {
  projectFour,
  college_pro,
  portfolio_pro,
  ML_Pro,
  ECommerce,
  ML_Harvesting,
  hospitalManagement,
  AgroMarket,
  stream_app,
QRbasedASSETManage,
} from "../../assets/index";

function Projects() {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px border-b-black]"
    >
      <div className="flex justify-center items-center text-center"></div>
      <div className="grid grid-cols-3 gap-14">
        <ProjectsCard
          title="QR Based Assets Management System"
          des="QR Based Assets Management is an industry project for managing assets of industry efficiently through latest technologies like QR,RFID,etc.
          Developed using Kotlin, SQLite and XML Layouts For designing UI elements.
∗ Implemented ZXing library for QR code generation and scanning and print, download, and share
functionality for QR codes.
∗ Integrated Jetpack Navigation and FileProvider for secure
navigation and QR code sharing "
          src={AgroMarket}
          link1="https://github.com/KVB18MS/Kalpa-Power--QR-Based-assets-Management-System"
          link2="https://github.com/KVB18MS/Kalpa-Power--QR-Based-assets-Management-System"
        />
        <ProjectsCard
          title="Smart Contact Manager "
          des="Developed using Spring Boot with Spring Security and JWT for user
authentication and authorization. Utilized Hibernate and JPA for database operations.
· Designed a RESTful API architecture with features like pagination, sorting, and validation, ensuring
smooth interaction with the application.
· implement mailstrao for mail sending and cloudinary for photo or video storing"
          src={ECommerce}
          // link1="https://github.com/VKunjir/E-Commerce-Website-GSDS"
          link1="https://github.com/KVB18MS/CONACT-MANAGER"
          link2="https://github.com/KVB18MS/CONACT-MANAGER"
        />
        <ProjectsCard
          title="Streaming Application"
          des="Developed a full-stack video streaming application using Spring Boot and React, enabling efficient
           video playback with minimal buffering. Implemented chunked streaming for optimized loading and responsive performance across devices. The app includes secure
           authentication, RESTful APIs, and a user-friendly interface for seamless video access and control."
          src={stream_app}
          // link1=""
          // link2=""
          link1="https://github.com/KVB18MS/Streaming-application-using-spring-boot-and-react"
          link2="https://github.com/KVB18MS/Streaming-application-using-spring-boot-and-react"
        />
        {/* <ProjectsCard
          title="Streaming Application"
          des="I have developed streaming application using spring boot and react to strem videos efficiently."
          src={Streaming_App}
          link1=""
          link2=""
        /> */}
        <ProjectsCard
          title="Anti theft system using Raspberry Pi mini computer "
          des="This is anti system to detect theft which cost friendly solution for CCTV cameras.This is Developed a Python-based security system using Raspberry Pi, integrating a PIR sensor and PiCamera to detect
 motion and record video. Automated the process of capturing and converting video files, and implemented a
 Telegram bot to send real-time alerts and video footage to users, enhancing remote monitoring capabilities"
          src={college_pro}
          link1="https://docs.google.com/document/d/1pRjL9N1NnCzc_fExsnNfnmC1j3DizK9EOChuqjXeIyU/edit?tab=t.0"
          link2="https://docs.google.com/document/d/1pRjL9N1NnCzc_fExsnNfnmC1j3DizK9EOChuqjXeIyU/edit?tab=t.0"

        />

        <ProjectsCard
          title="Corrosion prediction of stainless steel using ML"
          des="This project aims to predict the corrosion rate of stainless steel.The research paper of this project Accepted in IEEE conference."
          src={projectFour}
          link1="https://github.com/KVB18MS/Corrosion-Prediction-of-steel-using-ML"
          link2="https://github.com/KVB18MS/Corrosion-Prediction-of-steel-using-ML"
        />

        <ProjectsCard
          title="Optimizing-Harvesting-for-Maximum-Profit"
          des="This project aims to predict the best month for harvesting various agricultural goods such as vegetables, fruits, and flowers in order to maximize farmers' profits. By leveraging machine learning techniques, we can forecast the optimal time to harvest different crops, taking into account factors such as seasonal variations, market demand, and price fluctuations."
          src={ML_Harvesting}
          link1="https://github.com/KVB18MS/Optimizing-Harvesting-for-Maximum-Profit"
          link2="https://github.com/KVB18MS/Optimizing-Harvesting-for-Maximum-Profit"
        />
        
        
        
        <ProjectsCard
          title="Portfolio Website"
          des="Developed Portfolio website using react and tailwind CSS."
          src={ML_Pro}
          link1="https://github.com/KVB18MS/portfolio-website"
          link2="https://github.com/KVB18MS/portfolio-website"
        />

        <ProjectsCard
          title="Hospital Management System"
          des="Developed Hospital Management System using python and SQL database."
          src={hospitalManagement}
          link1="https://github.com/KVB18MS/Hospital-Management-System-Using-python-and-mySQL"
        />
      </div>
    </section>
  );
}

export default Projects;

import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pb-6">
      <img
        src="assets\DSC_9508-2.jpg"
        className=" border-3 border-solid border-white w-64 h-64 rounded-full"
       
      />
      <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">
        Maddax Lallatin
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">Student at Utah State University</p>
      <p className="text-sm max-w-xl mb6 font-bold"> I am a Computer Science student with a passion for software development and technology</p>
    </div>
  );
}

export default Intro;

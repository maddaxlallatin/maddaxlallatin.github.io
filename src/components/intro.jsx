import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pb-6">
      <img
        src="assets\terminal-website.jpg"
        className="w-64 h-64 bg-white rounded-full"
       
      />
      <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">
        Maddax Lallatin
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium"> High School Student</p>
      <p className="text-sm max-w-xl mb6 font-bold"> This is my entire bio</p>
    </div>
  );
}

export default Intro;

import React, {} from "react";
import { snackBox1 } from "../assets/img";

const About = () => {

  return (
    <main className="main-customer grid place-items-center">
      <div className="grid grid-cols-2 gap-32 w-[90%] min-h-[80%] ">
            <div classname="flex-[0_1_2/5] flex flex-col justify-center gap-y-8">
              <h1 className="text-primary text-5xl py-1">Siapa Kami?</h1>
              <br></br>
              <p className= "text-blue-900 text-xl">
              Rotte bakery berdiri pada tahun 2016 lalu, yang didirikan oleh Bapak Syafrizal di Pekanbaru.
              </p>
            </div>            
        </div>     
    </main>
  );
};

export default About;

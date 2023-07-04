import React, {} from "react";
import { snackBox1 } from "../assets/img";

const About = () => {

  return (
    <main className="main-customer grid place-items-center">
      <div className="grid grid-cols-2 gap-32 w-[80%] min-h-[80%] ">
            <div classname="flex-[0_1_2/5] flex flex-col justify-center gap-y-8">
              <h1 className="text-primary text-3xl py-1">Pesan Sekarang!</h1>
              <p className= "text-blue-900 text-xl">
              Pesan dan rasakan nikmatnya berbagai
                <p className= "text-blue-900 text-xl"> 
                  roti yang ada di Rotte Bakery 
                </p>
              </p>
              <br></br>
              <div classname="flex gap-4 ">
                <button type="submit" className="btn btn-primary flex-initial text-xl ">
                  Pesanan Berlangsung
                </button>
                <button className="btn btn-secondary text-xl">Riwayat Pesanan</button>
              </div>     
            </div> 
                   
        </div>     
    </main>
  );
};

export default About;

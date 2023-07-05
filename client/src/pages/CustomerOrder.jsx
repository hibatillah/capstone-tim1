import React, {} from "react";
import {RedBean} from "../assets/img";

const About = () => {

  return (
    <main className="main-customer grid justify-center py-20">
      <div className="grid grid-cols-[auto_1fr] gap-32 ">
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
                <button type="submit" className="btn btn-primary">Pesanan Berlangsung</button>
                <button className="btn btn-secondary flex-initial">
                  Riwayat Pesanan
                </button>
              </div>     
            </div> 
            <div className="card flex-none w-[800px]">

            <div className="grid grid-cols-2">
              <div className="py-20">
               <img
                src={RedBean}
                alt="customer-page"
                className="flex-auto h-[150px] rounded-md object-cover object-top"
                />
            </div>

            
            </div>
          </div>
        </div>     
    </main>
  );
};

//card flex-auto h-[900px] rounded-md object-cover object-top -translate-y-10 translate-x-10
export default About;

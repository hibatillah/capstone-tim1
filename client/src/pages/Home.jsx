import React, {} from "react";
import { RotteBakery } from "../assets/img";

const Home = () => {

  return (
    <main className="main-customer grid place-items-center">
      <div className="flex gap-32 w-[70%] min-h-[70%] ">
        <img
          src={RotteBakery}
          alt="home-page"
          className="flex-auto h-[550px] rounded-md object-cover object-top"
        />
        <div className="flex-[0_1_2/5] flex flex-col justify-center gap-y-8">
          <div>
            <h3 className="text-blue-900 text-2xl">Ada di Semua Suasana</h3>
            <h1 className="text-primary text-5xl py-1">Rotte Bakery</h1>
            <br></br>
            <p className= "text-blue-900 text-xl">
            Rotte Bakery merupakan outlet toko yang menjual berbagai jenis roti, kue, 
            dan cake dengan harga yang murah dengan 40 Outlet yang tersebar di seluruh Riau.
            </p>
          </div>

         <div classname="flex gap-4">
          <button type="submit" className="btn btn-primary flex-initial text-xl">
          Pesan
        </button>
        <button className="btn btn-secondary text-xl">Tentang Kami</button>
        </div> 
         

        
            
        </div>
      </div>
    </main>
  );
};

export default Home;

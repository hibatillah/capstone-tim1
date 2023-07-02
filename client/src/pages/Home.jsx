import React, {} from "react";
import { RotteBakery } from "../assets/img";

const Home = () => {

  return (
    <main className="main-customer grid place-items-center">
      <div className="card flex gap-12 w-[70%] min-h-[50%] xl:w-[50%]">
        <img
          src={RotteBakery}
          alt="home-page"
          className="flex-auto h-[400px] rounded-md object-cover object-top"
        />
        <div className="flex-[0_1_2/5] flex flex-col justify-center gap-y-8">
          <div>
            <h2 className="text-primary">Ada di Semua Suasana</h2>
            <h1 className="text-primary">Rotte Bakery</h1>
            <p className="w-4/5">
            Rotte Bakery merupakan outlet toko yang menjual berbagai jenis roti, kue, 
            dan cake dengan harga yang murah dengan 40 Outlet yang tersebar di seluruh Riau.
            </p>
          </div>
            <button type="submit" className="btn btn-primary w-full uppercase">
            Pesan
            </button>
            
        </div>
      </div>
    </main>
  );
};

export default Home;

import React from "react";
import { RotteBakery } from "../assets/img";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="main-customer grid place-items-center">
      <div className="grid grid-cols-[450px_1fr] gap-16 w-[70%] ">
        <div className="card">
          <img
            src={RotteBakery}
            alt="home-page"
            className="w-full h-[500px] rounded-md object-cover object-top"
          />
        </div>
        <div className="flex flex-col justify-center gap-y-8">
          <div>
            <h3 className="text-tertiary text-xl">Ada di Semua Suasana</h3>
            <h1 className="text-primary text-5xl py-1">Rotte Bakery</h1>
            <br></br>
            <p className="text-tertiary text-lg">
              Rotte Bakery merupakan outlet toko yang menjual berbagai jenis
              roti, kue, dan cake dengan harga yang murah dengan 40 Outlet yang
              tersebar di seluruh Riau.
            </p>
          </div>
          <div className="flex gap-3">
            <Link to="/menu" className="btn btn-primary">
              Pesan Sekarang!
            </Link>
            <Link to="/about" className="btn btn-secondary">
              Tentang Kami
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;

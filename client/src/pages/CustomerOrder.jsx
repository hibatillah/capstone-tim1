import React, {} from "react";
import {RedBean} from "../assets/img";
import {FitO} from "../assets/img";


const CustomerOrder = () => {

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

            <div className="card flex-none w-[800px] h-[500px]">
              <h2 className="text-yellow-500 py-4"> Pending </h2>
            <div className="grid grid-cols-2">
              <div className="py-7">
              <div>
               <img
                src={RedBean}
                alt="customer-page"
                className="flex-auto h-[150px] "
                />
              </div>
              <div className="py-10">
                <img
                src={FitO}
                alt="customer-page"
                className="flex-auto h-[150px]"
                />
              </div>
            </div>
            <div className="px-20 py-1"> 
              <p>Kode Transaksi</p>
              <h5 className="text-blue-950">###8472014721</h5>
              <br></br>
              <p>Tanggal Waktu</p>
              <h5 className="text-blue-950"> 8 Juni 2023 - 13.32</h5>
              <br></br>
              <h5 className="text-blue-900"> 17.500</h5>
              <h5 className="text-blue-900"> 6.500</h5>    
              <br></br>
              
               <button type="submit" className="btn btn-primary flex-initial text-xl">
                 Pesan
               </button>
               <button className="btn btn-secondary text-xl">
                 Pesan
               </button>
                 
            </div>
            </div>
          </div>
          </div>
    </main>
  );
};

//card flex-auto h-[900px] rounded-md object-cover object-top -translate-y-10 translate-x-10
export default CustomerOrder;

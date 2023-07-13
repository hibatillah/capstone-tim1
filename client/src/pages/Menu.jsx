import React, { useState } from "react";
import { MenuCard } from "../components";
import RotiTawar from "../assets/img/RotiTawar.jpeg";
import Donut from "../assets/img/Donut.png";
import redBean from "../assets/img/red-bean.jpeg";
import BeefChicken from "../assets/img/BeefChicken-Floss.png";
import FitO from "../assets/img/Fit-o.jpeg";
import CoklatCheese from "../assets/img/CoklatCheese.jpeg";
import { currentDatetime, formatRupiah } from "../components/format";
import axios from "axios";

const Menu = ({ user }) => {
  const [count, setCount] = useState(0);
  const [payment, setPayment] = useState("cash");
  const totalHarga = 14000 * count;

  const handleOrder = () => {
    const data = {
      datetime: currentDatetime(),
      customer: user.name,
      product: "Roti Tawar",
      amount: count,
      total: totalHarga,
      payment: payment,
      status: "diproses",
    };
    axios
      .post("http://localhost:5000/order/product/add", data)
      .then((res) => {
        console.log(res.data);
        alert("Pesanan berhasil ditambahkan");
        setCount(0);
      })
      .catch((err) => {
        console.log(err);
        alert("Pesanan gagal");
      });
  };

  return (
    <main className="main-customer px-8 md:px-20 lg:px-40 py-16">
      <div>
        <h1 className="text-primary text-3xl">Pilih Roti Kesukaanmu</h1>
        <p className="text-tertiary text-xl">
          Rotte Bakery merupakan outlet toko yang menjual berbagai jenis roti
          dan kue.
        </p>
      </div>
      <br></br>
      <div className="grid grid-cols-[1fr_300px] gap-10">
        <ul className="col-span-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <li onClick={() => setCount((prev) => prev + 1)}>
            <MenuCard
              title="Roti Tawar"
              price="14000"
              amount="10"
              image={RotiTawar}
            />
          </li>
          <MenuCard
            title="Coklat & Cheese"
            price="6500"
            amount="10"
            image={CoklatCheese}
          />
          <MenuCard
            title="Red Bean Twish Cho-Chip"
            price="17500"
            amount="17"
            image={redBean}
          />
          <MenuCard
            title="Donut Premium"
            price="7000"
            amount="15"
            image={Donut}
          />
          <MenuCard
            title="Beef & Chicken Floss"
            price="11000"
            amount="8"
            image={BeefChicken}
          />
          <MenuCard
            title="Fit-O Coffee"
            price="6500"
            amount="14"
            image={FitO}
          />
        </ul>
        <div className="card h-fit sticky top-8">
          <h1>Pesanan</h1>
          <div className="my-8">
            {count !== 0 ? (
              <>
                <h3>Roti Tawar</h3>
                <p className="text-sm">{formatRupiah(14000)}</p>
                <p className="text-primary text-sm">x{count}</p>
              </>
            ) : null}
          </div>
          <div className="py-4 border-t border-slate-300">
            <p>Total Harga</p>
            <h3 className="mb-5">{formatRupiah(totalHarga)}</h3>
            <label htmlFor="payment">Pembayaran</label>
            <select
              name="payment"
              id="payment"
              className="form-input w-full mt-1"
              onChange={(e) => setPayment(e.target.value)}
            >
              <option value="cash">Cash</option>
              <option value="debit">Debit</option>
            </select>
          </div>
          <div className="mt-10 flex flex-col gap-3">
            <button onClick={handleOrder} className="btn btn-primary">
              Pesan
            </button>
            <button onClick={() => setCount(0)} className="btn btn-secondary">
              Batal
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Menu;

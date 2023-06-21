import React, { useEffect, useState } from "react";
import { GetData } from "../Api";
import { TableOrder, TableRiwayat } from "../components";
import axios from "axios";

const Orders = () => {
  const { users } = GetData("http://localhost:5000/product");
  console.log(users);
  return users;
};

const AddOrder = () => {
  const [order, setOrder] = useState("");
  const [amount, setAmount] = useState();

  const handleSubmit = async (target) => {
    target.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:5000/product/update/:${order}`,
        {
          amount: amount,
        }
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  // evaluate form changes
  useEffect(() => {
    console.log({ order });
  }, [order]);

  // get products
  const dataOrders = Orders();

  return (
    <div className="card">
      <div>
        <h3> Konfirmasi Pesanan </h3>
        <p> Lakukan Konfirmasi Pesanan oleh Customer </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="grid grid-[auto_1fr] gap-5 mt-14"
      >
        {/* select Order*/}
        <label htmlFor="order" className="self-center justify-self-end">
          Nama Customer
        </label>
        <input
          type="text"
          name="order"
          id="order"
          className="flex-initial px-3 py-2 rounded-md text-tertiary ring-1 ring-grey-dark focus:outline-none focus:ring-primary dark:bg-transparent dark:text-grey-dark dark:ring-black-light dark:ring-2"
        />
        {/* amount */}
        <label htmlFor="numberOrder" className="self-center justify-self-end">
          Kode Transaksi
        </label>
        <input
          type="number"
          name="numberOrder"
          id="numberOrder"
          placeholder="0"
          onChange={(e) => setAmount(e.target.value)}
          className="flex-initial px-3 py-2 rounded-md text-tertiary ring-1 ring-grey-dark focus:outline-none focus:ring-primary dark:bg-transparent dark:text-grey-dark dark:ring-black-light dark:ring-2"
        />
        <label htmlFor="order" className="self-center justify-self-end">
          Produk Dibeli
        </label>
        <input
          type="text"
          name="order"
          id="order"
          className="flex-initial px-3 py-2 rounded-md text-tertiary ring-1 ring-grey-dark focus:outline-none focus:ring-primary dark:bg-transparent dark:text-grey-dark dark:ring-black-light dark:ring-2"
          disabled
        />
        <label htmlFor="order" className="self-center justify-self-end">
          Metode Pembayaran
        </label>
        <select
          name="product"
          id="product"
          className="flex-initial px-3 py-2 rounded-md text-tertiary ring-1 ring-grey-dark focus:outline-none focus:ring-primary dark:bg-transparent dark:text-grey-dark cursor-pointer dark:ring-black-light dark:ring-2"
        >
          <option value="Tunai">Tunai</option>
          <option value="Debit">Debit</option>
        </select>
        <button type="submit" className="btn btn-primary w-fit col-start-2">
          Buat Produk
        </button>
      </form>
    </div>
  );
}
 
const Order = () => {
  const dataOrders = Orders();

  return (
    <main className="main-admin space-y-6">
      <div className="flex items-start gap-4">
        <TableOrder title="Pesanan Berlangsung" dataTable={dataOrders?.data} />
        <div id="make-order" className="flex-none space-y-4">
          <AddOrder />
        </div>
      </div>
      <TableRiwayat title="Riwayat Pesanan" dataTable={dataOrders?.data} />
    </main>
  );

  
};

export default Order;

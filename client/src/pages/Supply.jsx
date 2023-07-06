/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { GetData } from "../Api";
import { TableSupply, TableRiwayatMaterial } from "../components";

const Supplies = () => {
  const { users } = GetData("http://localhost:5000/order/material");
  console.log(users);
  return users;
};

const AddOrder = ({ selected, data }) => {
  // get current order
  const [selectedOrder, setSelectedOrder] = useState();
  useEffect(() => {
    if (selected) setSelectedOrder(data[selected]);
    console.log("selected order", selectedOrder);
  }, [selected]);

  // confirm order
  const handleSubmit = (target) => {
    target.preventDefault();
  };

  return (
    <div className="card flex-none">
      <div>
        <h3>Konfirmasi Pesanan</h3>
        <p>Lakukan Konfirmasi Pesanan oleh Customer</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-[auto_1fr] gap-5 mt-14"
      >
        {/* bahan*/}
        <label htmlFor="bahan" className="self-center justify-self-end">
          Nama Bahan Baku
        </label>
        <input
          type="text"
          name="bahan"
          id="bahan"
          placeholder="Bahan"
          value={selectedOrder?.materialPurchased}
          className="form-input capitalize"
          readOnly
        />
        {/* jumlah pesanan */}
        <label
          htmlFor="amount"
          className="self-center justify-self-end"
        >
          Jumlah Pesanan
        </label>
        <input
          type="text"
          name="amount"
          id="amount"
          placeholder="Pesanan"
          value={selectedOrder?.amount}
          className="form-input"
          readOnly
        />
        {/* jumlah supply */}
        <label htmlFor="supply" className="self-center justify-self-end">
          Jumlah Supply
        </label>
        <input
          type="number"
          name="supply"
          id="supply"
          placeholder="Supply"
          className="form-input"
        />
        <button className="btn btn-secondary">Batalkan Pesanan</button>
        <button type="submit" className="btn btn-primary flex-initial">
          Konfirmasi Pesanan
        </button>
      </form>
    </div>
  );
};

const Supply = () => {
  const dataSupply = Supplies();
  const [selectedOrder, setSelectedOrder] = useState();
  const selectOrder = (id) => setSelectedOrder(id);

  const pendingOrders = dataSupply?.data.filter(
    (item) => item.status === "pending"
  );
  const finishOrders = dataSupply?.data.filter(
    (item) => item.status === "ditolak" || item.status === "diterima"
  );

  return (
    <main className="main-admin space-y-4">
      <div className="flex items-stretch gap-4">
        <TableSupply
          title="Pesanan Berlangsung"
          dataTable={pendingOrders}
          selectOrder={selectOrder}
        />
        <div id="make-order" className="flex-none space-y-4">
          <AddOrder data={pendingOrders} selected={selectedOrder} />
        </div>
      </div>
      <TableRiwayatMaterial title="Riwayat Pesanan Bahan Baku" dataTable={finishOrders} />
    </main>
  );
};

export default Supply;

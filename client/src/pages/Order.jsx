import React, { useEffect, useState } from "react";
import { GetData } from "../Api";
import { TableOrder, TableRiwayat } from "../components";

const Orders = () => {
  const { users } = GetData("http://localhost:5000/order");
  console.log(users);
  return users;
};

const AddOrder = ({ selected }) => {
  const handleSubmit = (target) => {
    target.preventDefault();
  };

  // get products
  const dataOrders = Orders();
  const selectedOrder = dataOrders?.data.filter(
    (item) => item._id === selected
  );
  useEffect(() => {
    console.log("selectedOrder", selectedOrder);
  }, [selectedOrder]);

  return (
    <div className="card flex-none">
      <div>
        <h3> Konfirmasi Pesanan </h3>
        <p> Lakukan Konfirmasi Pesanan oleh Customer </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-[auto_1fr] gap-5 mt-14"
      >
        {/* customer*/}
        <label htmlFor="customer" className="self-center justify-self-end">
          Nama Customer
        </label>
        <input
          type="text"
          name="customer"
          id="customer"
          placeholder="Customer"
          value={selectedOrder?.customer}
          disabled
          className="form-input"
        />
        {/* amount */}
        <label
          htmlFor="codeTransaction"
          className="self-center justify-self-end"
        >
          Kode Transaksi
        </label>
        <input
          type="text"
          name="codeTransaction"
          id="codeTransaction"
          placeholder="Transaksi"
          value={selectedOrder?.codeTransaction}
          disabled
          className="form-input"
        />
        <label
          htmlFor="productPurchased"
          className="self-center justify-self-end"
        >
          Produk Dibeli
        </label>
        <input
          type="text"
          name="productPurchased"
          id="productPurchased"
          placeholder="Produk"
          value={selectedOrder?.productPurchased}
          disabled
          className="form-input"
        />
        <label htmlFor="paymentType" className="self-center justify-self-end">
          Metode Pembayaran
        </label>
        <input
          type="text"
          name="paymentType"
          id="paymentType"
          placeholder="Pembayaran"
          value={selectedOrder?.paymentType}
          className="form-input"
          disabled
        />
        <button className="btn btn-secondary">Batalkan Pesanan</button>
        <button type="submit" className="btn btn-primary flex-initial">
          Konfirmasi Pesanan
        </button>
      </form>
    </div>
  );
};

const Order = () => {
  const dataOrders = Orders();
  const [selectedOrder, setSelectedOrder] = useState();
  const selectOrder = (id) => setSelectedOrder(id);

  return (
    <main className="main-admin space-y-4">
      <div className="flex items-stretch gap-4">
        <TableOrder
          title="Pesanan Berlangsung"
          dataTable={dataOrders?.data}
          selectOrder={selectOrder}
        />
        <div id="make-order" className="flex-none space-y-4">
          <AddOrder selected={selectedOrder} />
        </div>
      </div>
      <TableRiwayat title="Riwayat Pesanan" dataTable={dataOrders?.data} />
    </main>
  );
};

export default Order;

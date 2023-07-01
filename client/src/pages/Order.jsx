/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { GetData } from "../Api";
import { TableOrder, TableRiwayatProducts } from "../components";
import { formatCurrency } from "../components/format";

const Orders = () => {
  const { users } = GetData("http://localhost:5000/order/product");
  console.log(users);
  return users;
};

const AddOrder = ({ selected, data }) => {
  // get current order
  const [selectedOrder, setSelectedOrder] = useState();
  useEffect(() => {
    if (selected) setSelectedOrder(data[selected])
    console.log('selected order',selectedOrder)
  },[selected])

  // confirm order
  const handleSubmit = (target) => {
    target.preventDefault();
  };

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
          className="form-input capitalize"
          readOnly
        />
        {/* product purchased */}
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
          className="form-input"
          readOnly
        />
        {/* payment */}
        <label htmlFor="paymentType" className="self-center justify-self-end">
          Metode Pembayaran
        </label>
        <input
          type="text"
          name="paymentType"
          id="paymentType"
          placeholder="Pembayaran"
          value={selectedOrder?.payment}
          className="form-input capitalize"
          readOnly
        />
        {/* total */}
        <label
          htmlFor="totalPrice"
          className="self-center justify-self-end"
        >
          Total Harga (Rp)
        </label>
        <input
          type="number"
          name="totalPrice"
          id="totalPrice"
          placeholder="0"
          value={formatCurrency(12000) ?? 0}
          className="form-input"
          readOnly
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

  const pendingOrders = dataOrders?.data.filter(item => item.status === 'pending');
  const finishOrders = dataOrders?.data.filter(item => item.status === 'finish');

  return (
    <main className="main-admin space-y-4">
      <div className="flex items-stretch gap-4">
        <TableOrder
          title="Pesanan Berlangsung"
          dataTable={pendingOrders}
          selectOrder={selectOrder}
        />
        <div id="make-order" className="flex-none space-y-4">
          <AddOrder data={pendingOrders} selected={selectedOrder} />
        </div>
      </div>
      <TableRiwayatProducts title="Riwayat Pesanan" dataTable={finishOrders} />
    </main>
  );
};

export default Order;

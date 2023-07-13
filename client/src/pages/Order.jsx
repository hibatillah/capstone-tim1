/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { GetData } from "../Api";
import { TableOrder, TableRiwayatOrder } from "../components";
import { formatCurrency, currentDatetime } from "../components/format";
import axios from "axios";

const Orders = () => {
  const { users } = GetData("http://localhost:5000/order/product");
  console.log(users);
  return users;
};
const Product = () => {
  const { users } = GetData("http://localhost:5000/product");
  console.log(users);
  return users;
};

const AddOrder = ({ selected, data }) => {
  const [selectedOrder, setSelectedOrder] = useState();
  const [status, setStatus] = useState("");
  const dataOrder = Orders();
  const dataProduct = Product();

  useEffect(() => {
    if (selected) setSelectedOrder(data.find((item) => item._id === selected));
    console.log("selected order", selectedOrder);
  }, [selected]);

  const DataOrder = (label) => {
    return {
      datetime: currentDatetime(),
      customer: selectedOrder.customer,
      product: selectedOrder.product,
      amount: selectedOrder.amount,
      total: selectedOrder.total,
      payment: selectedOrder.payment,
      status: label
    };
  };
  
  const updateProductOrder = (data, label) => {
    axios
      .put(
        `http://localhost:5000/order/product/update/${selectedOrder._id}`,
        data
      )
      .then((res) => {
        console.log(res);
        setStatus(label);

        // update stock product
        const product = dataProduct?.data?.find(item => item.name === selectedOrder.product)

        dataProduct?.data?.map(item => {
          if (item._id === product._id) {
            axios
              .put(`http://localhost:5000/product/update/${item._id}`, {
                name: item.name,
                amount: item.amount - selectedOrder.amount,
                price: item.price,
              })
              .then((res) => {
                console.log(res);
                console.log('product stock update')
              })
              .catch((err) => {
                console.log(err);
              })
          }
          return item
        })
      })
      .catch((err) => {
        console.log(err);
        setStatus("error");
      })
      .finally(() => {
        setTimeout(() => {
          setStatus("");
        }, 3000);
      });
  };

  // confirm order
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = DataOrder("diterima");
    updateProductOrder(data, "send");
  };

  // cancel order
  const cancelOrder = (e) => {
    e.preventDefault()
    const data = DataOrder("ditolak");
    updateProductOrder(data, "decline");
  };

  return (
    <div className="card flex-none">
      <div>
        <h3> Konfirmasi Pesanan </h3>
        <p> Lakukan Konfirmasi Pesanan Customer </p>
      </div>
      <form className="grid grid-cols-[auto_1fr] gap-5 mt-14">
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
          value={selectedOrder?.product}
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
        <label htmlFor="totalPrice" className="self-center justify-self-end">
          Total Harga (Rp)
        </label>
        <input
          type="number"
          name="totalPrice"
          id="totalPrice"
          placeholder="0"
          value={formatCurrency(selectedOrder?.total) ?? 0}
          className="form-input"
          readOnly
        />
        <button
          onClick={(e) =>
            status !== "empty" ? cancelOrder(e) : null
          }
          className="btn btn-secondary"
        >
          Batalkan Pesanan
        </button>
        <button
          onClick={(e) => status !== "empty" ? handleSubmit(e) : null}
          className="btn btn-primary flex-initial"
        >
          Konfirmasi Pesanan
        </button>
        <div className="mt-3 text-tertiary">
          {status === "send" ? (
            <span>Pesanan dikonfirmasi!</span>
          ) : status === "decline" ? (
            <span>Pesanan ditolak!</span>
          ) : status === "error" ? (
            <span>Terjadi kesalahan!</span>
          ) : null}
        </div>
      </form>
    </div>
  );
};

const Order = () => {
  const dataOrders = Orders();
  const [selectedOrder, setSelectedOrder] = useState();
  const selectOrder = (id) => setSelectedOrder(id);

  const pendingOrders = dataOrders?.data.filter(
    (item) => item.status === "diproses"
  );
  const finishOrders = dataOrders?.data.filter(
    (item) => item.status === "diterima" || item.status === "ditolak"
  );

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
      <TableRiwayatOrder title="Riwayat Pesanan" dataTable={finishOrders} />
    </main>
  );
};

export default Order;

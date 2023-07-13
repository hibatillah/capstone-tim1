/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { GetData } from "../Api";
import { TableSupply, TableRiwayatMaterial } from "../components";
import { currentDatetime } from "../components/format";
import axios from "axios";

const Supplies = () => {
  const { users } = GetData("http://localhost:5000/order/material");
  console.log(users);
  return users;
};

const Materials = () => {
  const { users } = GetData("http://localhost:5000/material");
  console.log(users);
  return users;
};

const AddOrder = ({ selected, data }) => {
  const [selectedOrder, setSelectedOrder] = useState();
  const dataSupply = Supplies();
  const dataMaterial = Materials();

  const [supply, setSupply] = useState();
  const [status, setStatus] = useState("");

  useEffect(() => {
    supply === "" ? setStatus("empty") : setStatus("");
  });

  useEffect(() => {
    if (selected) setSelectedOrder(data.find((item) => item._id === selected));
    console.log("selected order", selectedOrder);
  }, [dataSupply, selected]);

  const DataOrder = (label) => {
    return {
      datetime: currentDatetime(),
      material: selectedOrder.material,
      demand: selectedOrder.demand,
      supply: supply,
      admin: selectedOrder.admin,
      supplier: selectedOrder.supplier,
      status: label,
    };
  };

  const updateMaterial = (id, data) => {
    axios
      .put(`http://localhost:5000/material/update/${id}`, data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateMaterialOrder = (data, label) => {
    axios
      .put(
        `http://localhost:5000/order/material/update/${selectedOrder._id}`,
        data
      )
      .then((res) => {
        console.log(res);
        setStatus(label);
      })
      .catch((err) => {
        console.log(err);
        setStatus("error");
      })
  };
  console.log({ selectedOrder });

  // confirm order
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('idle')

    const data = DataOrder("diterima");
    updateMaterialOrder(data, "send");
    console.log('order',data)

    dataMaterial?.data?.map((item) => {
      if (item.name.toLowerCase() === selectedOrder.material.toLowerCase()) {
        updateMaterial(item._id, {
          name: item.name,
          supplier: item.supplier,
          minimum: item.minimum,
          amount: parseInt(item.amount) + parseInt(supply),
        });
        alert('Material updated')
      }
    });
    e.target.reset();
    setTimeout(() => {
      setStatus('')
    }, 3000);
  };

  // cancel order
  const cancelOrder = (e) => {
    e.preventDefault();
    const data = DataOrder("ditolak");
    updateMaterialOrder(data, "decline");
  };

  return (
    <div className="card flex-none">
      <div>
        <h3>Konfirmasi Pesanan</h3>
        <p>Lakukan Konfirmasi Pesanan Bahan Baku</p>
      </div>
      <form onSubmit={handleSubmit} className="grid grid-cols-[auto_1fr] gap-5 mt-14">
        {/* bahan*/}
        <label htmlFor="bahan" className="self-center justify-self-end">
          Nama Bahan Baku
        </label>
        <input
          type="text"
          name="bahan"
          id="bahan"
          placeholder="Bahan"
          value={selectedOrder?.material}
          className="form-input capitalize"
          readOnly
        />
        {/* jumlah pesanan */}
        <label htmlFor="amount" className="self-center justify-self-end">
          Jumlah Pesanan
        </label>
        <input
          type="text"
          name="amount"
          id="amount"
          placeholder="Pesanan"
          value={selectedOrder?.demand}
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
          onChange={(e) => setSupply(e.target.value)}
        />
        <button
          onClick={(e) => (status !== "empty" ? cancelOrder(e) : null)}
          className="btn btn-secondary"
        >
          Batalkan Pesanan
        </button>
        <button
          type="submit"
          className="btn btn-primary flex-initial"
        >
          Konfirmasi Pesanan
        </button>
        <div className="mt-3 text-tertiary">
          {status === "send" ? (
            <span>Supply berhasil dikirim!</span>
          ) : status === "decline" ? (
            <span>Pesanan ditolak!</span>
          ) : status === "error" ? (
            <span>Terjadi kesalahan!</span>
          ) : status === "idle" ? (
            <span>Diproses...</span>
          ) : null}
        </div>
      </form>
    </div>
  );
};

const Supply = () => {
  const dataSupply = Supplies();
  const [selectedOrder, setSelectedOrder] = useState();
  const selectOrder = (id) => setSelectedOrder(id);

  const pendingOrders = dataSupply?.data.filter(
    (item) => item.status === "diproses"
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
      <TableRiwayatMaterial
        title="Riwayat Pesanan Bahan Baku"
        dataTable={finishOrders}
      />
    </main>
  );
};

export default Supply;

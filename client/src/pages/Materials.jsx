import React, { useEffect, useState } from "react";
import { GetData } from "../Api";
import { TableMaterial, TableRiwayatMaterial } from "../components";
import { currentDatetime } from "../components/format";
import axios from "axios";

const Material = () => {
  const { users } = GetData("http://localhost:5000/material");
  console.log(users);
  return users;
};

const Suppliers = () => {
  const { users } = GetData("http://localhost:5000/supplier");
  console.log(users);
  return users;
};

const OrderMaterials = () => {
  const { users } = GetData("http://localhost:5000/order/material");
  console.log(users);
  return users;
};

const AddMaterials = ({ user }) => {
  const dataMaterials = Material();
  const dataSuppliers = Suppliers();

  const [supplier, setSupplier] = useState("A");
  const [status, setStatus] = useState("");

  const materialSupplier = {
    A: ["Tepung", "Gula", "Telur", "Ragi"],
    B: ["Susu Bubuk", "Susu Kental Manis", "Mentega"],
    C: ["Coklat Bubuk", "Coklat Batang"],
    Kemasan: ["Plastik", "Toples Kaca"],
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus("loading");

    const data = {
      datetime: currentDatetime(),
      supplier: event.target.supplier.value,
      material: event.target.material.value,
      demand: parseInt(event.target.amount.value),
      admin: user.name,
      status: 'diproses',
    };

    axios
      .post("http://localhost:5000/order/material/add", data)
      .then((res) => {
        setStatus("success");
        console.log(res);
        event.target.reset();
      })
      .catch((err) => {
        setStatus("error");
        console.error(err);
      })
      .finally(() => setTimeout(() => setStatus("idle"), 5000));
  };

  return (
    <div className="card flex flex-col">
      <div>
        <h3>Pemesanan Bahan Baku</h3>
        <p>Pilih untuk melakukan pemesanan persediaan bahan baku.</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className={`grid grid-cols-[auto_1fr] gap-5 ${
          dataMaterials ? "mt-auto mb-10" : "mt-14"
        }`}
      >
        {/* select supplier */}
        <label htmlFor="supplier" className="self-center justify-self-end">
          Pilih Supplier
        </label>
        <select
          name="supplier"
          id="supplier"
          onChange={(e) => setSupplier(e.target.value)}
          className="form-input"
        >
          {dataSuppliers ? (
            dataSuppliers.data.map((item) => (
              <option value={item.name}>{item.name}</option>
            ))
          ) : (
            <option value="0">Supplier tidak tersedia</option>
          )}
        </select>
        {/* select material */}
        <label htmlFor="material" className="self-center justify-self-end">
          Pilih Bahan
        </label>
        <select
          name="material"
          id="material"
          className="form-input"
        >
          {dataSuppliers ? (
            materialSupplier[supplier].map((item) => (
              <option value={item._id}>{item}</option>
            ))
          ) : (
            <option value="0">Bahan tidak tersedia</option>
          )}
        </select>
        {/* material amount */}
        <label htmlFor="amount" className="self-center justify-self-end">
          Jumlah Pemesanan
        </label>
        <input
          type="number"
          name="amount"
          id="amount"
          placeholder="0" 
          className="form-input"
          required
        />
        {/* submit */}
        <button type="submit" className="btn btn-primary w-fit col-start-2">
          Pesan Bahan Baku
        </button>
      </form>
      {status === "success" ? (
        <p key={"success"} className="text-tertiary">
          Berhasil dipesan!
        </p>
      ) : status === "error" ? (
        <p key={"error"} className="text-primary dark:text-primary-light">
          Gagal dipesan
        </p>
      ) : status === "loading" ? (
        <p key={"loading"}>Dipesan...</p>
      ) : null}
    </div>
  );
};

const Materials = ({ user }) => {
  const dataProducts = Material();
  const dataOrderMaterials = OrderMaterials();

  return (
    <main className="main-admin space-y-4">
      <div className="flex items-stretch gap-4">
        <TableMaterial
          title="Persediaan Bahan Baku"
          dataTable={dataProducts?.data}
        />
        <AddMaterials user={user} />
      </div>
      <div className="flex items-stretch gap-4">
        <TableRiwayatMaterial
          title="Pemesanan Bahan Baku"
          dataTable={dataOrderMaterials?.data}
        />
      </div>
    </main>
  );
};

export default Materials;

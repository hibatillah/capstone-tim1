import React, { useEffect, useState } from "react";
import { GetData } from "../api";
import { TableMaterial } from "../components";

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

const AddMaterials = () => {
  // post data
  const [supplier, setSupplier] = useState("A");
  const [material, setMaterial] = useState("Tepung");
  const [amount, setAmount] = useState();

  const materialSupplier = {
    A: ["Tepung", "Gula", "Telur", "Ragi"],
    B: ["Susu Bubuk", "Susu Kental Manis", "Mentega"],
    C: ["Coklat Bubuk", "Coklat Batang"],
    Kemasan: ["Plastik", "Toples Kaca"],
  };
  
  useEffect(() => {
    setMaterial(materialSupplier[supplier][0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[supplier])

  useEffect(() => {
    console.log("selected", { supplier, material, amount });
  }, [amount, material, supplier]);

  const handleSubmit = (target) => {
    target.preventDefault();
    console.log("submitted", { supplier, material, amount });
  };

  // get data
  const dataMaterials = Material();
  const dataSuppliers = Suppliers();

  useEffect(() => {
    console.log({ dataSuppliers, dataMaterials });
  }, [dataMaterials, dataSuppliers]);

  return (
    <div className="card">
      <div>
        <h3>Pemesanan Bahan Baku</h3>
        <p>Pilih untuk melakukan pemesanan persediaan bahan baku.</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-[auto_1fr] gap-5 mt-14"
      >
        {/* select supplier */}
        <label htmlFor="product" className="self-center justify-self-end">
          Pilih Supplier
        </label>
        <select
          name="product"
          id="product"
          onChange={(e) => setSupplier(e.target.value)}
          className="flex-initial px-3 py-2 rounded-md text-tertiary ring-1 ring-grey-dark focus:outline-none focus:ring-primary dark:bg-transparent dark:text-grey-dark cursor-pointer dark:ring-black-light dark:ring-2"
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
        <label htmlFor="product" className="self-center justify-self-end">
          Pilih Bahan
        </label>
        <select
          name="product"
          id="product"
          onChange={(e) => setMaterial(e.target.value)}
          className="flex-initial px-3 py-2 rounded-md text-tertiary ring-1 ring-grey-dark focus:outline-none focus:ring-primary dark:bg-transparent dark:text-grey-dark cursor-pointer dark:ring-black-light dark:ring-2"
        >
          {supplier ? (
            materialSupplier[supplier].map((material) => (
              <option value={material}>{material}</option>
            ))
          ) : (
            <option value="0">Bahan tidak tersedia</option>
          )}
        </select>
        {/* material amount */}
        <label htmlFor="numberProduct" className="self-center justify-self-end">
          Jumlah Pemesanan
        </label>
        <input
          type="number"
          name="numberProduct"
          id="numberProduct"
          placeholder="0"
          onChange={(e) => setAmount(e.target.value)}
          className="flex-initial px-3 py-2 rounded-md text-tertiary ring-1 ring-grey-dark focus:outline-none focus:ring-primary dark:bg-transparent dark:text-grey-dark dark:ring-black-light dark:ring-2"
        />
        {/* submit */}
        <button type="submit" className="btn btn-primary w-fit col-start-2">
          Pesan Bahan Baku
        </button>
      </form>
    </div>
  );
};

const Materials = () => {
  const dataProducts = Material();

  return (
    <main className="main-admin flex items-stretch gap-4">
      <TableMaterial
        title="Persediaan Bahan Baku"
        dataTable={dataProducts?.data}
      />
      <div id="make-product" className="flex-none space-y-4">
        <AddMaterials />
      </div>
    </main>
  );
};

export default Materials;

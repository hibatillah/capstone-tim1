import React, { useEffect, useState } from "react";
import { GetData } from "../api";
import { TableMaterial } from "../components";

const Material = () => {
  const { users } = GetData("http://localhost:5000/material");
  console.log(users);
  return users;
};

const AddMaterials = () => {
  const [supplier, setSupplier] = useState("");
  const [material, setMaterial] = useState("");
  const [amount, setAmount] = useState();

  const handleSubmit = async (target) => {
    target.preventDefault();
  };

  // get products
  const dataMaterials = Material();

  // evaluate form changes
  useEffect(() => {
    console.log({ material, dataMaterials });
  }, [material, dataMaterials]);

  return (
    <div className="card">
      <div>
        <h3>Pemesanan Bahan Baku</h3>
        <p>Pilih untuk melakukan pemesanan persediaan bahan baku.</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="grid grid-[auto_1fr] gap-5 mt-14"
      >
        {/* select supplier */}
        <label htmlFor="product" className="self-center justify-self-end">
          Pilih Supplier
        </label>
        <select
          name="product"
          id="product"
          onChange={(e) => setMaterial(e.target.value)}
          className="flex-initial px-3 py-2 rounded-md text-tertiary ring-1 ring-grey-dark focus:outline-none focus:ring-primary dark:bg-transparent dark:text-grey-dark cursor-pointer dark:ring-black-light dark:ring-2"
        >
          {dataMaterials ? (
            dataMaterials.data.map((item) => (
              <option value={item._id}>{item.name}</option>
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
          {dataMaterials ? (
            dataMaterials.data.map((item) => (
              <option value={item._id}>{item.name}</option>
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

import React, { useEffect, useState } from "react";
import { GetData } from "../Api";
import { TableSupply } from "../components";

const Suppliers = () => {
  const { users } = GetData("http://localhost:5000/product");
  console.log(users);
  return users;
};

const AddSupplier = () => {
  const [supply, setSupply] = useState("");
  const [amount, setAmount] = useState();

  const handleSubmit = async (target) => {
    target.preventDefault();
  };

  // evaluate form changes
  useEffect(() => {
    console.log({ supply });
  }, [supply]);

  // get products
  const dataSuppliers = Suppliers();

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
        <label htmlFor="supply" className="self-center justify-self-end">
          Nama Customer
        </label>
        <input
          type="text"
          name="supply"
          id="supply"
          className="form-input"
        />
        {/* amount */}
        <label htmlFor="numberOrder" className="self-center justify-self-end">
          Kode Transaksi
        </label>
        <input
          type="number"
          name="numberSupplier"
          id="numberSupplier"
          placeholder="0"
          onChange={(e) => setAmount(e.target.value)}
          className="form-input"
        />
        <label htmlFor="supply" className="self-center justify-self-end">
          Produk Dibeli
        </label>
        <input
          type="text"
          name="supply"
          id="supply"
          className="form-input"
          disabled
        />
        <label htmlFor="supply" className="self-center justify-self-end">
          Metode Pembayaran
        </label>
        <select
          name="supply"
          id="supply"
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
};

const Supply = () => {
  const dataSuppliers = Suppliers();

  return (
    <main className="main-admin space-y-6">
      <div className="flex items-start gap-4">
        <TableSupply title="Pesanan Berlangsung" dataTable={dataSuppliers?.data} />
        <div id="make-supply" className="flex-none space-y-4">
          <AddSupplier />
        </div>
      </div>
    </main>
  );
};

export default Supply;

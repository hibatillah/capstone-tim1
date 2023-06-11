import React, { useEffect, useState } from "react";
import { GetData } from "../Api";
import { TableProduct, ScoreCard } from "../components";
import axios from "axios";

const Products = () => {
  const { users } = GetData("http://localhost:5000/product");
  console.log(users);
  return users;
};

const AddProduct = () => {
  const [product, setProduct] = useState("");
  const [amount, setAmount] = useState();

  // submit form
  const handleSubmit = async (target) => {
    target.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:5000/product/update/:${product}`,
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
    console.log({ product });
  }, [product]);

  // get products
  const dataProducts = Products();

  return (
    <div className="flex gap-6 card">
      <div className="w-60">
        <h3>Membuat Produk</h3>
        <p>Pilih produk dan tentukan jumlah produk yang akan dibuat.</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-[auto_1fr] gap-3 items-center"
      >
        <label
          htmlFor="product"
          className="flex-auto justify-self-end text-grey-dark dark:text-grey"
        >
          Pilih produk
        </label>
        <select
          name="product"
          id="product"
          onChange={(e) => setProduct(e.target.value)}
          className="flex-initial px-3 py-2 rounded-md text-tertiary ring-1 ring-grey-dark focus:outline-none focus:ring-primary dark:bg-transparent dark:text-grey-dark cursor-pointer dark:ring-black-light dark:ring-2"
        >
          {dataProducts? dataProducts.data.map((item) => (
            <option value={item._id}>{item.name}</option>
          )) : (
            <option value="0">Produk tidak tersedia</option>
          )}
        </select>
        <label
          htmlFor="numberProduct"
          className="flex-auto justify-self-end text-grey-dark dark:text-grey"
        >
          Jumlah produk
        </label>
        <input
          type="number"
          name="numberProduct"
          id="numberProduct"
          placeholder="0"
          onChange={(e) => setAmount(e.target.value)}
          className="flex-initial px-3 py-2 rounded-md text-tertiary ring-1 ring-grey-dark focus:outline-none focus:ring-primary dark:bg-transparent dark:text-grey-dark dark:ring-black-light dark:ring-2"
        />
        <button type="submit" className="btn btn-primary w-fit col-start-2">
          Buat produk
        </button>
      </form>
    </div>
  );
};

const Production = () => {
  const tableProducts = ["Nama Produk", "Harga (Rp)", "Persediaan"];
  const dataProducts = Products();

  return (
    <main className="main-admin space-y-5">
      <section id="make-product" className="flex items-stretch gap-x-4">
        <AddProduct />
        <ScoreCard 
          title="Produk Tersedia"
          result='32 buah'
          desc="pada hari ini"
        />
        <ScoreCard 
          title="Produk Terjual"
          result='24 buah'
          desc="pada hari ini"
        />
      </section>
      <section id="table-product" className="flex gap-x-4">
        <TableProduct
          dataHead={tableProducts}
          dataTable={dataProducts?.data}
        />
        <TableProduct
          dataHead={tableProducts}
          dataTable={dataProducts?.data}
        />
      </section>
    </main>
  );
};

export default Production;

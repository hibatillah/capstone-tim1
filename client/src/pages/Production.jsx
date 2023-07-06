import React, { useEffect, useState } from "react";
import { GetData } from "../Api";
import { TableProduct, ScoreCard } from "../components";
import { layers } from "../assets/icons";
import { PostData } from "../Api";

const Products = () => {
  const { users } = GetData("http://localhost:5000/product");
  console.log(users);
  return users;
};

const AddProduct = () => {
  const [product, setProduct] = useState("Coklat Oreo");
  const [amount, setAmount] = useState();

  // submit form
  const handleSubmit = (event) => {
    event.preventDefault();

    const product = event.target.product.value;
    const amount = event.target.amount.value;
    const data = { amount };

    PostData(`http://localhost:5000/product/update/${product}`, data);
    event.target.reset()
  };

  // get products
  const dataProducts = Products();

  return (
    <div className="card">
      <div>
        <h3>Membuat Produk</h3>
        <p>Pilih produk dan tentukan jumlah produk yang akan dibuat.</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-[auto_1fr] gap-5 mt-14"
      >
        {/* select product */}
        <label htmlFor="product" className="self-center justify-self-end">
          Pilih produk
        </label>
        <select
          name="product"
          id="product"
          onChange={(e) => setProduct(e.target.value)}
          className="form-input"
          value='6484980d60acb950ad6a4746'
        >
          {dataProducts ? (
            dataProducts.data.map((item) => (
              <option value={item._id}>{item.name}</option>
            ))
          ) : (
            <option value="0">Produk tidak tersedia</option>
          )}
        </select>
        {/* amount */}
        <label htmlFor="amount" className="self-center justify-self-end">
          Jumlah produk
        </label>
        <input
          type="number"
          name="amount"
          id="amount"
          placeholder="0"
          onChange={(e) => setAmount(e.target.value)}
          className="form-input"
          required
        />
        <button type="submit" className="btn btn-primary w-fit col-start-2">
          Buat Produk
        </button>
      </form>
    </div>
  );
};

const Production = () => {
  const dataProducts = Products();

  // get total product available
  const [totalProduct, setTotalProduct] = useState(0);
  useEffect(() => {
    if (dataProducts)
      setTotalProduct(
        dataProducts?.data.reduce((acc, item) => acc + item.amount, 0)
      );
  }, [dataProducts]);

  return (
    <main className="main-admin flex items-stretch gap-4">
      <TableProduct title="Persediaan Produk" dataTable={dataProducts?.data} />
      <div id="make-product" className="flex-none space-y-4">
        <ScoreCard
          title="Produk Tersedia"
          result={`${totalProduct} produk`}
          desc="pada hari ini"
          image={layers}
          flex
        />
        <AddProduct />
      </div>
    </main>
  );
};

export default Production;

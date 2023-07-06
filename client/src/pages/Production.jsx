import React, { useEffect, useState } from "react";
import { GetData } from "../Api";
import { TableProduct, ScoreCard } from "../components";
import { layers } from "../assets/icons";
import axios from "axios";

const Products = () => {
  const { users } = GetData("http://localhost:5000/product");
  console.log(users);
  return users;
};

const AddProduct = ({ handleTotalProduct }) => {
  const [status, setStatus] = useState("");
  const dataProducts = Products();

  const handleSubmit = (event) => {
    event.preventDefault();

    const id = event.target.product.value;
    const amount = event.target.amount.value;
    const product = dataProducts?.data.find((item) => item._id === id);

    axios
      .put(`http://localhost:5000/product/update/${id}`, {
        name: product.name,
        amount: parseInt(product.amount) + parseInt(amount),
        price: product.price,
      })
      .then((res) => {
        console.log(res);
        setStatus("success");
        event.target.reset();
      })
      .catch((err) => {
        console.error(err);
        setStatus("error");
      })
      .finally(() => {
        handleTotalProduct(0)
        setStatus("idle");
      });
  };

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
        <select name="product" id="product" className="form-input">
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
          className="form-input"
          required
        />
        <button type="submit" className="btn btn-primary w-fit col-start-2">
          {(() => {
            switch (status) {
              case "loading":
                return <span key={"loading"}>Dibuat...</span>;
              case "success":
                return <span key={"success"}>Produk berhasil dibuat</span>;
              case "error":
                return <span key={"error"}>Gagal membuat produk</span>;
              default:
                return <span key={"idle"}>Buat Produk</span>;
            }
          })()}
        </button>
      </form>
    </div>
  );
};

const Production = () => {
  const dataProducts = Products();

  // get total product available
  const [totalProduct, setTotalProduct] = useState(0);
  const handleTotalProduct = (id) => setTotalProduct(id)
  useEffect(() => {
    setTotalProduct(dataProducts?.data.map(item => item.amount).reduce((a, b) => a + b))
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
        <AddProduct handleTotalProduct={handleTotalProduct} />
      </div>
    </main>
  );
};

export default Production;

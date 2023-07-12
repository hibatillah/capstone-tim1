import React, { useState } from "react";
import { GetData } from "../Api";
import { TableProduct } from "../components";
import axios from "axios";

const Products = () => {
  const { users } = GetData("http://localhost:5000/product");
  console.log(users);
  return users;
};

const Materials = () => {
  const { users } = GetData("http://localhost:5000/material");
  console.log(users);
  return users;
};

const AddProduct = () => {
  const [status, setStatus] = useState("");
  const dataProducts = Products();
  const dataMaterials = Materials();

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
        compositions: product.compositions,
      })
      .then((res) => {
        console.log(res);
        console.log({product})

        product.compositions?.map((el) => {
          dataMaterials?.data?.map((item) => {
            if (el[0].toLowerCase() === item.name.toLowerCase()) {
              axios
                .put(`http://localhost:5000/material/update/${item._id}`, {
                  name: item.name,
                  supplier: item.supplier,
                  minimum: item.minimum,
                  amount:
                    parseInt(item.amount) - parseInt(el[1]) * parseInt(amount),
                })
                .then((res) => {
                  console.log(res);
                  console.log("material updated");
                })
                .catch((err) => {
                  console.error(err);
                  console.info("update material failed");
                });
            } else {
              console.info("material not found");
            }
          });
        });

        setStatus("success");
        event.target.reset();
      })
      .catch((err) => {
        console.error(err);
        setStatus("error");
      })
      .finally(() => {
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

  return (
    <main className="main-admin flex items-start gap-4">
      <TableProduct title="Persediaan Produk" dataTable={dataProducts?.data} />
      <AddProduct />
    </main>
  );
};

export default Production;

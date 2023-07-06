import React from "react";
import { formatCurrency } from "./format";
import { boxes, layout, layers, listCheck } from "../assets/icons";
import { Statusbar } from "./Card";

export const TableProduct = ({ title, dataTable }) => {
  return (
    <div className="card flex-auto">
      <div className="flex gap-5 mb-5">
        <div className="w-8 h-8 mb-2 rounded bg-grey-light dark:bg-black-light grid place-items-center cursor-pointer">
          <img
            src={layout}
            alt="icon"
            className="w-4 h-4 select-none pointer-events-none"
          />
        </div>
        <h2 className="text-primary dark:text-primary-light">{title}</h2>
      </div>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th>Nama Produk</th>
            <th>Harga (Rp)</th>
            <th>Persediaan</th>
          </tr>
        </thead>
        <tbody>
          {dataTable?.map((item) => (
            <tr>
              <td className="capitalize">{item.name ?? "-"}</td>
              <td>{formatCurrency(item.price) ?? "-"}</td>
              <td>{item.amount ?? 0}</td>
            </tr>
          )) ?? <tr>Produk Tidak tersedia</tr>}
        </tbody>
      </table>
    </div>
  );
};

export const TableMaterial = ({ title, dataTable }) => {
  const satuanMaterial = {
    "Roti Tawar": "buah",
    Telur: "butir",
    plastik: "lembar",
    "Selai Coklat": "toples",
    "Susu Kental Manis": "ml",
    "toples kaca": "buah",
  };

  return (
    <div className="card flex-auto">
      <div className="flex gap-5 mb-5">
        <div className="w-8 h-8 mb-2 rounded bg-grey-light dark:bg-black-light grid place-items-center cursor-pointer">
          <img
            src={boxes}
            alt="icon"
            className="w-4 h-4 select-none pointer-events-none"
          />
        </div>
        <h2 className="text-primary dark:text-primary-light">{title}</h2>
      </div>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th>Nama Bahan</th>
            <th>Tersedia</th>
            <th>Minimum</th>
          </tr>
        </thead>
        <tbody>
          {dataTable?.map((item) => (
            <tr>
              <td className="capitalize">{item.name ?? "-"}</td>
              <td className="flex items-center gap-2">
                {!satuanMaterial[item.name]
                  ? item.amount / 1000
                  : item.amount ?? "-"}{" "}
                {satuanMaterial[item.name] || "kg"}
                <span className="relative">
                  {item.amount <= item.minimum ? <MinimumStock /> : null}
                </span>
              </td>
              <td>
                {!satuanMaterial[item.name]
                  ? item.minimum / 1000
                  : item.minimum ?? "-"}{" "}
                {satuanMaterial[item.name] || "kg"}
              </td>
            </tr>
          )) ?? <tr>Bahan Baku Tidak tersedia</tr>}
        </tbody>
      </table>
    </div>
  );
};

export const TableRiwayatMaterial = ({ title, dataTable }) => {
  const satuanMaterial = {
    "Roti Tawar": "buah",
    Telur: "butir",
    plastik: "lembar",
    "Selai Coklat": "toples",
    "Susu Kental Manis": "ml",
    "toples kaca": "buah",
  };

  return (
    <div className="card flex-auto h-[450px]">
      <div className="flex gap-5 mb-5">
        <div className="w-8 h-8 mb-2 rounded bg-grey-light dark:bg-black-light grid place-items-center cursor-pointer">
          <img
            src={listCheck}
            alt="icon"
            className="w-4 h-4 select-none pointer-events-none"
          />
        </div>
        <h2 className="text-primary dark:text-primary-light">{title}</h2>
      </div>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th>Tanggal</th>
            <th>Waktu</th>
            <th>Bahan</th>
            <th>Supplier</th>
            <th>Pemesan</th>
            <th>Pesanan</th>
            <th>Suplai</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className="overflow-y-scroll">
          {dataTable?.map((item) => (
            <tr className="capitalize">
              <td>{item.datetime.split(" ")[0] ?? "-"}</td>
              <td>{item.datetime.split(" ")[1] ?? "-"}</td>
              <td>{item.material ?? "-"}</td>
              <td>{item.supplier ?? "-"}</td>
              <td>{item.admin ?? "-"}</td>
              <td>
                {!satuanMaterial[item.name]
                  ? item.demand / 1000
                  : item.demand ?? 0}{" "}
                {satuanMaterial[item.name] || "kg"}
              </td>
              <td>
                {!satuanMaterial[item.name]
                  ? item.supply / 1000
                  : item.supply ?? 0}{" "}
                {satuanMaterial[item.name] || "kg"}
              </td>
              <td>
                {(() => {
                  switch (item.status) {
                    case "diproses":
                      return <Statusbar title="diproses" />;
                    case "ditolak":
                      return <Statusbar title="ditolak" />;
                    case "diterima":
                      return <Statusbar title="diterima" />;
                    default:
                      return null;
                  }
                })()}
              </td>
            </tr>
          )) ?? <tr>Bahan Baku Tidak tersedia</tr>}
        </tbody>
      </table>
    </div>
  );
};

export const TableOrder = ({ title, dataTable, selectOrder }) => {
  return (
    <div className="card flex-auto">
      <div className="flex gap-5 mb-5">
        <div className="w-8 h-8 mb-2 rounded bg-grey-light dark:bg-black-light grid place-items-center cursor-pointer">
          <img
            src={layers}
            alt="icon"
            className="w-4 h-4 select-none pointer-events-none"
          />
        </div>
        <h2 className="text-primary dark:text-primary-light">{title}</h2>
      </div>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th>Nama Customer</th>
            <th>Item</th>
            <th>Opsi</th>
          </tr>
        </thead>
        <tbody>
          {dataTable?.map((item, i) => (
            <tr>
              <td className="capitalize">{item.customer ?? "-"}</td>
              <td className="capitalize">
                {item.productPurchased ?? "-"}
              </td>
              <td
                onClick={() => selectOrder(i)}
                className="cursor-pointer select-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  class="w-5 h-5 stroke-primary"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                  />
                </svg>
              </td>
            </tr>
          )) ?? <tr>Pesanan tidak tersedia</tr>}
        </tbody>
      </table>
    </div>
  );
};

export const TableRiwayatOrder = ({ title, dataTable }) => {
  return (
    <div className="card flex-auto h-[450px]">
      <div className="flex gap-5 mb-5">
        <div className="w-8 h-8 mb-2 rounded bg-grey-light dark:bg-black-light grid place-items-center cursor-pointer">
          <img
            src={listCheck}
            alt="icon"
            className="w-4 h-4 select-none pointer-events-none"
          />
        </div>
        <h2 className="text-primary dark:text-primary-light">{title}</h2>
      </div>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th>Tanggal</th>
            <th>Waktu</th>
            <th>Customer</th>
            <th>Item</th>
            <th>Jumlah</th>
            <th>Total (Rp)</th>
            <th>Pembayaran</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {dataTable?.map((item) => (
            <tr className="capitalize">
              <td>{item.datetime.split(" ")[0] ?? "-"}</td>
              <td>{item.datetime.split(" ")[1] ?? "-"}</td>
              <td>{item.customer ?? "-"}</td>
              <td>{item.product.join(", ") ?? "-"}</td>
              <td>{item.amount ?? 0}</td>
              <td>{formatCurrency(item.total) ?? 0}</td>
              <td>{item.payment ?? "-"}</td>
              <td>
                {(() => {
                  switch (item.status) {
                    case "diproses":
                      return <Statusbar title="diproses" />;
                    case "ditolak":
                      return <Statusbar title="ditolak" />;
                    case "diterima":
                      return <Statusbar title="diterima" />;
                    default:
                      return null;
                  }
                })()}
              </td>
            </tr>
          )) ?? <tr>Riwayat pesanan tidak tersedia</tr>}
        </tbody>
      </table>
    </div>
  );
};

export const TableSupply = ({ title, dataTable }) => {
  return (
    <div className="card flex-auto">
      <div className="flex gap-5 mb-5">
        <div className="w-8 h-8 mb-2 rounded bg-grey-light dark:bg-black-light grid place-items-center cursor-pointer">
          <img
            src={boxes}
            alt="icon"
            className="w-4 h-4 select-none pointer-events-none"
          />
        </div>
        <h2 className="text-primary dark:text-primary-light">{title}</h2>
      </div>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th>Nama Bahan Baku</th>
            <th>Jumlah</th>
            <th>Admin</th>
          </tr>
        </thead>
        <tbody>
          {dataTable?.map((item) => (
            <tr>
              <td className="capitalize">
                {item.materialPurchased.join(", ") ?? "-"}
              </td>
              <td>{item.amount ?? 0}</td>
              <td className="capitalize">{item.admin ?? "-"}</td>
            </tr>
          )) ?? <tr>Pesanan Bahan Baku Tidak tersedia</tr>}
        </tbody>
      </table>
    </div>
  );
};

export const TableRiwayatSupply = ({ title, dataTable }) => {
  return (
    <div className="card flex-auto h-[450px]">
      <div className="flex gap-5 mb-5">
        <div className="w-8 h-8 mb-2 rounded bg-grey-light dark:bg-black-light grid place-items-center cursor-pointer">
          <img
            src={listCheck}
            alt="icon"
            className="w-4 h-4 select-none pointer-events-none"
          />
        </div>
        <h2 className="text-primary dark:text-primary-light">{title}</h2>
      </div>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th>Nama Bahan Baku</th>
            <th>Jumlah Pesanan</th>
            <th>Jumlah Supply</th>
            <th>Admin</th>
          </tr>
        </thead>
        <tbody>
          {dataTable?.map((item) => (
            <tr>
              <td className="capitalize">
                {item.materialPurchased.join(", ") ?? "-"}
              </td>
              <td>{item.amount ?? 0}</td>
              <td>{item.supply ?? 0}</td>
              <td className="capitalize">{item.admin ?? "-"}</td>
            </tr>
          )) ?? <tr>Riwayat pesanan tidak tersedia</tr>}
        </tbody>
      </table>
    </div>
  );
};

const MinimumStock = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        class="w-5 h-5 stroke-primary peer dark:stroke-primary"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
        />
      </svg>
      <div className="absolute -top-7 left-1/2 -translate-x-1/2 hidden peer-hover:block transition-all duration-300 w-[92px] py-1 rounded shadow-lg bg-primary text-white text-center text-xs dark:bg-primary-light">
        Stok minimum
      </div>
    </>
  );
};

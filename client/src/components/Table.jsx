import React from "react";

export const TableProduct = ({ title, dataTable }) => {
  return (
    <div className="card flex-auto">
      <div className="flex gap-5 mb-5">
        <div className="w-8 h-8 mb-2 rounded bg-grey-light dark:bg-black-light"></div>
        <h2 className="text-primary dark:text-primary-light">
          {title}
        </h2>
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
          {dataTable ? (
            dataTable.map((item) => (
              <tr>
                <td>{item.name? item.name : '-'}</td>
                <td>{item.price? item.price : '-'}</td>
                <td>{item.amount? item.amount : 0}</td>
              </tr>
            ))
          ) : (
            <tr>Produk Tidak tersedia</tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export const TableMaterial = ({ title, dataTable }) => {
  return (
    <div className="card flex-auto">
      <div className="flex gap-5 mb-5">
        <div className="w-8 h-8 mb-2 rounded bg-grey-light dark:bg-black-light"></div>
        <h2 className="text-primary dark:text-primary-light">
          {title}
        </h2>
      </div>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th>Nama Bahan</th>
            <th>Minimum Persediaan</th>
            <th>Tersedia</th>
          </tr>
        </thead>
        <tbody>
          {dataTable ? (
            dataTable.map((item) => (
              <tr>
                <td>{item.name? item.name : '-'}</td>
                <td>{item.minimum? item.minimum : '-'}</td>
                <td>{item.amount? item.amount : 0}</td>
              </tr>
            ))
          ) : (
            <tr>Bahan Baku Tidak tersedia</tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export const TableOrder = ({ title, dataTable, selectOrder }) => {
  return (
    <div className="card flex-auto">
      <div className="flex gap-5 mb-5">
        <div className="w-8 h-8 mb-2 rounded bg-grey-light dark:bg-black-light"></div>
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
          {dataTable ? (
            dataTable.map((item) => (
              <tr>
                <td>{item.customer ? item.customer : "-"}</td>
                <td>{item.productPurchased ? item.productPurchased : "-"}</td>
                <td onClick={() => selectOrder(item._id)}>
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
            ))
          ) : (
            <tr>
              <td>Pesanan tidak tersedia</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export const TableRiwayat = ({ title, dataTable }) => {
  return (
    <div className="card flex-auto min-h-[300px]">
      <div className="flex gap-5 mb-5">
        <div className="w-8 h-8 mb-2 rounded bg-grey-light dark:bg-black-light"></div>
        <h2 className="text-primary dark:text-primary-light">{title}</h2>
      </div>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th>Nama Customer</th>
            <th>Item</th>
            <th>Jumlah</th>
            <th>Total (Rp)</th>
            <th>Pembayaran</th>
          </tr>
        </thead>
        <tbody>
          {dataTable ? (
            dataTable.map((item) => (
              <tr>
                <td>{item.name ? item.name : "-"}</td>
                <td>{item.minimum ? item.minimum : "-"}</td>
                <td>{item.amount ? item.amount : 0}</td>
              </tr>
            ))
          ) : (
            <tr>Bahan Baku Tidak tersedia</tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
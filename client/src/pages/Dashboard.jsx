import React from "react";
import { ScoreCard } from "../components";

const Dashboard = () => {
  const scoreContents = [
    ["Total Penjualan", `240 produk`, "terjual pada bulan ini"],
    ["Total Transaksi", `98 transaksi`, "pada bulan ini"],
    ["Total Pendapatan", `Rp. 8.500.000,-`, "pada bulan ini"],
  ];

  return (
    <>
      <section id="score-card" className="flex items-stretch gap-4">
        <div className="flex-none flex flex-col justify-center p-4 w-48 rounded-lg bg-primary">
          <div className="w-10 h-10 rounded-full object-cover bg-tertiary mb-3 border-2 border-white" />
          <h3 className="font-semibold text-white tracking-wide">
            Qalbi Husaini
          </h3>
          <p className="font-medium text-grey">Admin</p>
        </div>
        {scoreContents.map(([title, result, desc], i) => (
          <ScoreCard
            title={title}
            result={result}
            desc={desc}
          />
        ))}
      </section>
      <section className="flex items-stretch gap-4 h-[214px]">
        <div className="card flex-auto"></div>
        <div className="card flex-none w-1/3"></div>
      </section>
      <section className="flex items-stretch gap-4 h-52">
        <div className="card flex-auto"></div>
        <div className="card flex-none w-1/3"></div>
      </section>
    </>
  );
};

export default Dashboard;

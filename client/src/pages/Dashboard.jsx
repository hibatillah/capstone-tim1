import React from "react";

const ScoreCard = ({ title, result, desc }) => {
  return (
    <div className="flex-1 px-5 py-4 rounded-lg bg-white">
      <div className="w-8 h-8 rounded bg-grey-light"></div>
      <div className="mt-2 mb-1 text-tertiary">{title}</div>
      <h3 className="text-2xl font-bold text-tertiary">{result}</h3>
      <p className="text-sm">{desc}</p>
    </div>
  );
};

const Dashboard = () => {
  const scoreContents = [
    ["Total Penjualan", "240 produk", "terjual pada bulan ini"],
    ["Total Transaksi", "98 kali", "pada bulan ini"],
    ["Total Pendapatan", "Rp. 8.500.000,-", "pada bulan ini"],
  ];

  return (
    <>
      <section className="flex items-stretch gap-4">
        <div className="flex-none w-48 p-4 bg-primary rounded-lg">
          <div className="w-10 h-10 rounded-full object-cover bg-tertiary mb-3 border-2 border-white" />
          <h3 className="font-semibold text-white tracking-wide">
            Qalbi Husaini
          </h3>
          <p className="font-medium text-tertiary">Admin</p>
        </div>
        {scoreContents.map(([title, result, desc], i) => (
          <ScoreCard
            title={title}
            result={result}
            desc={desc}
          />
        ))}
      </section>
    </>
  );
};

export default Dashboard;

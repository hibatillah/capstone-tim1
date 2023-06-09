/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { ScoreCard } from "../components";
import { crown, dollarCircle, rocket } from "../assets/icons";

const Dashboard = ({ user }) => {
  const scoreContents = [
    ["Total Penjualan", `240 produk`, "terjual pada bulan ini", crown],
    ["Total Transaksi", `98 transaksi`, "pada bulan ini", rocket],
    ["Total Pendapatan", `Rp. 8.500.000,-`, "pada bulan ini", dollarCircle],
  ];

  return (
    <>
      <section id="score-card" className="flex items-stretch gap-4">
        <div className="flex-none flex flex-col justify-center p-4 w-48 rounded-lg bg-primary">
          <div className="w-10 h-10 rounded-full object-cover bg-tertiary mb-3 border-2 border-white" />
          <h3 className="font-semibold text-white tracking-wide capitalize">
            {user.name}
          </h3>
          <p className="font-medium text-grey capitalize">{user.role}</p>
        </div>
        {scoreContents.map(([title, result, desc, image], i) => (
          <ScoreCard title={title} result={result} desc={desc} image={image} />
        ))}
      </section>
      <section className="flex items-stretch gap-4 h-60">
        <iframe
          width="100%"
          height="3622"
          src="https://lookerstudio.google.com/embed/reporting/cf91c1b4-068c-4de2-ac5b-d8ff567b9c77/page/rZiWD"
          frameborder="0"
        ></iframe>
      </section>
    </>
  );
};

export default Dashboard;

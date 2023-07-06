import React from "react";

export const ScoreCard = ({ title, result, desc, flex, image }) => {
  return (
    <div className={`flex-1 card ${flex ? "flex gap-5" : "block"}`}>
      <div className="w-8 h-8 mb-2 rounded bg-grey-light dark:bg-black-light grid place-items-center cursor-pointer">
        <img src={image} alt="icon" className="w-4 h-4 select-none pointer-events-none" />
      </div>
      <div>
        <div className="mb-1 text-tertiary dark:text-white">{title}</div>
        <h3 className="text-2xl font-bold text-primary dark:text-primary-light">
          {result}
        </h3>
        <p className="text-sm dark:text-grey-dark">{desc}</p>
      </div>
    </div>
  );
};

export const Statusbar = ({ title }) => {
  const label = {
    diproses: 'bg-yellow-100 text-yellow-600',
    ditolak: 'bg-red-100 text-red-600',
    diterima: 'bg-green-100 text-green-600',
  }
  
  return <div className={`px-3 py-1 rounded text-sm w-fit ${label[title]}`}>{title}</div>
}
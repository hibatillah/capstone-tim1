import React from "react";

export const ScoreCard = ({ title, result, desc, flex }) => {
  return (
    <div className={`flex-1 card ${flex ? "flex gap-5" : "block"}`}>
      <div className="w-8 h-8 mb-2 rounded bg-grey-light dark:bg-black-light"></div>
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

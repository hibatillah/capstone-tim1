import React from 'react';

export const ScoreCard = ({ title, result, desc }) => {
  return (
    <div className="flex-fill card">
      <div className="w-8 h-8 rounded bg-grey-light dark:bg-black-light"></div>
      <div className="mt-2 mb-1 text-tertiary dark:text-white">{title}</div>
      <h3 className="text-2xl font-bold text-primary dark:text-primary-light">
        {result}
      </h3>
      <p className="text-sm dark:text-grey-dark">{desc}</p>
    </div>
  );
};
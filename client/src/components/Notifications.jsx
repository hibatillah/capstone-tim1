import React from 'react';

const Notifications = ({ stateNotif, handleNotif }) => {
  return (
    <div
      className={`
        ${stateNotif ? "right-0" : "-right-full"} 
        fixed top-0 w-1/5 py-5 pl-5 pr-4 h-screen bg-white dark:bg-black-dark shadow-lg shadow-grey-dark dark:shadow-black-light transition-all duration-500 ease-in-out`}
    >
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-tertiary dark:text-white">
          Notifikasi
        </h3>
        <div
          onClick={handleNotif}
          className="p-1 rounded hover:bg-grey-light cursor-pointer active:bg-primary-light group dark:hover:bg-grey-dark/30 dark:active:bg-primary-light"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            class="w-5 h-5 stroke-tertiary group-active:stroke-white dark:stroke-grey"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Notifications;
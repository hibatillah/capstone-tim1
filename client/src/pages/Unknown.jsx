import React from 'react'
import { ungu404 } from '../assets/img';

const Unknown = () => {
  return (
    <main className="main-customer main-admin grid place-items-center">
      <div className="card w-1/3 h-2/3 text-center flex flex-col justify-center items-center">
        <img src={ungu404} alt="not found" className='w-64 select-none pointer-events-none' />
        <h3>Halaman yang anda tuju tidak ditemukan</h3>
        <p>Kembali ke halaman sebelumnya</p>
      </div>
    </main>
  );
}

export default Unknown
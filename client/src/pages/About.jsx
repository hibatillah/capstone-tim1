import React from "react";
import { snackBox1, snackBox2 } from "../assets/img";

const About = () => {
  return (
    <main className="main-customer grid place-items-center py-32">
      <div className="grid grid-cols-2 gap-32 w-[70%] min-h-[70%] ">
        <div classname="flex-[0_1_2/5] flex flex-col justify-center gap-y-8">
          <h1 className="text-primary text-5xl py-1">Siapa Kami?</h1>
          <br></br>
          <p className="text-tertiary text-lg">
            Rotte bakery berdiri pada tahun 2016 lalu, yang didirikan oleh Bapak
            Syafrizal di Pekanbaru.
          </p>
          <br></br>
          <p className="text-tertiary text-lg">
            Sebelumnya beliau sudah mengeluti usaha roti dari tahun 2007 lalu,
            tapi hanya membuat kue kering untuk dibulan ramadhan dan donat saja.
            Dari sinilah cikal bakal berdirinya Rotte Bakery.
          </p>
          <br></br>
          <p className="text-tertiary text-lg">
            Saat ini Rotte Bakery sudah berkembang pesat dengan 40 outlet yang
            tersebar di seluruh wilayah Riau seperti Pekanbaru, Dumai, Duri,
            Siak, Tembilahan, Taluk Kuantan, Bangkinang, Pasir Pangaraian, Ujung
            Batu, Pangkalan Kerinci, Sorek, Rengat, Belilas, Lipat Kain dan Air
            Molek.
          </p>
        </div>

        <div className="grid justify-end items-start relative">
          <img
            src={snackBox2}
            alt="about-page"
            className="card flex-auto h-[500px] rounded-md object-cover object-top -translate-y-16 translate-x-16"
          />
          <img
            src={snackBox1}
            alt="about-page"
            className="absolute -bottom-20 -left-16 card flex-auto h-[500px] rounded-md object-cover object-top z-0"
          />
        </div>
      </div>
    </main>
  );
};

export default About;

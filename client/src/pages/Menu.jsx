import { MenuCard } from "../components";
import RotiTawar from "../assets/img/RotiTawar.jpeg";
import Donut from "../assets/img/Donut.png";
import redBean from "../assets/img/red-bean.jpeg";
import BeefChicken from "../assets/img/BeefChicken-Floss.png";
import FitO from "../assets/img/Fit-o.jpeg";
import CoklatCheese from "../assets/img/CoklatCheese.jpeg";
import BananaCupcake from "../assets/img/BananaCupcake.jpeg";
import VanillaMocca from "../assets/img/VanillaMocca.jpeg";

const Menu = () => {
  return (
    <main className="main-customer px-8 md:px-20 lg:px-40 py-16">
      <div>
        <h1 className="text-primary text-3xl">Pilih Roti Kesukaanmu</h1>
        <p className="text-tertiary text-xl">
          Rotte Bakery merupakan outlet toko yang menjual berbagai jenis roti
          dan kue.
        </p>
      </div>
      <br></br>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        <MenuCard
          title="Roti Tawar Susu"
          price="14000"
          amount="10"
          image={RotiTawar}
        />
        <MenuCard
          title="Donut Premium"
          price="7000"
          amount="15"
          image={Donut}
        />
        <MenuCard
          title="Red Bean Twish Cho-Chip"
          price="17500"
          amount="17"
          image={redBean}
        />
        <MenuCard
          title="Beef & Chicken Floss"
          price="11000"
          amount="8"
          image={BeefChicken}
        />
        <MenuCard title="Fit-O Coffee" price="6500" amount="14" image={FitO} />
        <MenuCard
          title="Coklat & Cheese"
          price="6500"
          amount="10"
          image={CoklatCheese}
        />
        <MenuCard
          title="Banana CupCake"
          price="7500"
          amount="17"
          image={BananaCupcake}
        />
        <MenuCard
          title="Vanilla Mocca Jumbo"
          price="16000"
          amount="10"
          image={VanillaMocca}
        />
      </div>
    </main>
  );
};

export default Menu;

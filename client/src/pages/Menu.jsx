import { MenuCard } from "../components";
import redBean from "../assets/img/red-bean.jpeg";

const Menu = () => {
  return (
    <main className="main-customer px-8 md:px-20 lg:px-40 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <MenuCard title="Contoh" price="10000" amount="14" image={redBean} />
      </div>
    </main>
  );
};

export default Menu;

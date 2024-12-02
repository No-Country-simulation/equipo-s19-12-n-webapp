import SearchBar from "../../core/components/organismos/SearchBar/SearchBar";
import Navbar from "../../core/components/moleculas/Menu_navegacion/NavBar";
import Footer from "../../core/components/organismos/Footer/Footer";
import Breadcrumb from "../../core/components/atomos/Breadcrum/Breadcrumb";
import RestaurantInfo from "../../core/components/organismos/RestaurantInfo/RestaurantInfo";

const Perfil = () => {
  return (
    <div>
      {" "}
      <Navbar />
      <SearchBar />
      <Breadcrumb />
      <RestaurantInfo />
      <Footer />
    </div>
  );
};

export default Perfil;

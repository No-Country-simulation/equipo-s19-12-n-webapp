import SearchBar from "../../core/components/organismos/SearchBar/SearchBar";
//import Pagination from "../../core/components/moleculas/Pagination/Pagination";
//import Navbar from "../../core/components/organismos/Navbar/Navbar";
//import MainSection3 from "../../core/components/organismos/MainSection3/MainSection3";
//import Navbar from "../../core/components/moleculas/Menu_navegacion/NavBar";

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

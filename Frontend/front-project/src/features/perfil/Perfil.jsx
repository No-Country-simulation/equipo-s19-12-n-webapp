import MainSection1 from "../../core/components/organismos/MainSection1/MainSection1";
import SearchBar from "../../core/components/organismos/SearchBar/SearchBar";
import Pagination from "../../core/components/moleculas/Pagination/Pagination";
import Navbar from "../../core/components/organismos/Navbar/Navbar";
import MainSection3 from "../../core/components/organismos/MainSection3/MainSection3";

const Perfil = () => {
  return (
    <div>
      {" "}
      <Navbar />
      <SearchBar />
      <MainSection1 />
      <MainSection3 />
      <Pagination totalPages={10} />
    </div>
  );
};

export default Perfil;

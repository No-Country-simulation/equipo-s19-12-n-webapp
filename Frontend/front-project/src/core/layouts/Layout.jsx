import Navbar from "../components/organismos/Navbar/Navbar";
import Footer from "../components/organismos/Footer/Footer";
import Pagination from "../components/moleculas/Pagination/Pagination";
import MainSection1 from "../components/organismos/MainSection1/MainSection1";
import SearchBar from "../components/organismos/SearchBar/SearchBar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <MainSection1 />
      <main>{children}</main>
      <Footer />
      <Pagination totalPages={10} />
    </div>
  );
};

export default Layout;

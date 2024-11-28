//import Navbar from "../components/organismos/Navbar/Navbar";
import Navbar from "../components/moleculas/Menu_navegacion/NavBar";
import Footer from "../components/organismos/Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

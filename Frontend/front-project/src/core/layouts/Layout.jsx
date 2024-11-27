import Navbar from "../components/organismos/Navbar/Navbar";
import Footer from "../components/organismos/Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

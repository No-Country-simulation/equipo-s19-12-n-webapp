import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("frutas");

  // Datos de ejemplo para las categorías de productos
  const productsData = {
    frutas: [
      { name: "Manzana", price: 150, image: "/assets/images/frutas.jpg" },
      { name: "Banana", price: 100, image: "/assets/images/frutas.jpg" },
    ],
    carnes: [
      { name: "Carne de Res", price: 1200, image: "/assets/images/carnes.jpg" },
      { name: "Pollo", price: 800, image: "/assets/images/carnes.jpg" },
    ],
    lacteos: [
      { name: "Leche", price: 200, image: "/assets/images/lacteos.jpg" },
      { name: "Queso", price: 400, image: "/assets/images/lacteos.jpg" },
    ],
  };

  return (
    <div>
      <Navbar />
      <Hero
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
        productsData={productsData}
      />
      <Footer />
    </div>
  );
}

export default App;

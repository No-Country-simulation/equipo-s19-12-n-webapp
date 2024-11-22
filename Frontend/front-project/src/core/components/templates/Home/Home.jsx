// src/components/templates/Home/Home.jsx
import { useState } from "react";
import Layout from "../../../layouts/Layout.jsx"; // Importa el Layout
import Hero from "../../organismos/Hero/Hero";
import productsData from "../../../data/productsData.js";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("frutas");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Layout>
      <Hero
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
        productsData={productsData}
      />
    </Layout>
  );
};

export default Home;

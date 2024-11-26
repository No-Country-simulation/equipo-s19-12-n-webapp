// src/components/templates/Home/Home.jsx
import { useState } from "react";
import Layout from "../../../layouts/Layout.jsx"; // Importa el Layout
import Hero from "../../organismos/Hero/Hero";
import productsData from "../../../data/productsData.js";
import { useAuth } from '../../../auth/hook/use_auth.js'

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("frutas");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };
  
// aca obtiene las variables del contexto
  const { isLoggedIn } = useAuth(); 
  console.log("isLoggedIn:" + isLoggedIn);
  
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

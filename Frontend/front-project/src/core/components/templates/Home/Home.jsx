// src/components/templates/Home/Home.jsx
import { useContext, useState } from "react";
import Hero from "../../organismos/Hero/Hero";
import productsData from "../../../data/productsData.js";
import { Context } from "../../../context/Context.jsx";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("frutas");

  const { isLoggedIn } = useContext(Context);
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    // aca obtiene las variables del contexto

    console.log("isLoggedIn:" + isLoggedIn);
  };
  const handleSelectChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <>
      <Hero
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
        productsData={productsData}
      />
    </>
  );
};

export default Home;

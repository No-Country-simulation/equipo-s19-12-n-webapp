// src/components/Hero.jsx
import React from "react";
import Categories from "./Categories";
import ProductContainer from "./ProductContainer";
import "./Hero.css"; // Importa el CSS específico del componente

const Hero = ({ selectedCategory, onCategorySelect, productsData }) => {
  return (
    <div className="hero">
      <Categories onCategorySelect={onCategorySelect} />
      <ProductContainer products={productsData[selectedCategory]} />
    </div>
  );
};

export default Hero;

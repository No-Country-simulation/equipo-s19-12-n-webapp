// src/components/Hero.jsx

import Categories from "../../moleculas/Categories/Categories";
import ProductContainer from "../../moleculas/ProductContainer/ProductContainer";
import "./Hero.css";

const Hero = ({ selectedCategory, onCategorySelect, productsData }) => {
  return (
    <div className="hero">
      <Categories onCategorySelect={onCategorySelect} />
      <ProductContainer products={productsData[selectedCategory]} />
    </div>
  );
};

export default Hero;

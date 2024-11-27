// src/components/templates/Home/Home.jsx
import { useContext, useState } from "react";
import Hero from "../../organismos/Hero/Hero";
import productsData from "../../../data/productsData.js";
import { Context } from "../../../context/Context.jsx";
import Enlace from "../../atomos/Enlace/Enlace.jsx";
import Estrellas from "../../atomos/Estrellas/Estrellas.jsx";
import Icono from "../../atomos/Icono/Icono.jsx";
import Selector from "../../atomos/Selector/Selector.jsx";

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

const options = [
  { value: '', label: 'Selecciona una opción' },
  { value: 'option1', label: 'Opción 1' },
  { value: 'option2', label: 'Opción 2' },
  { value: 'option3', label: 'Opción 3' }
];

  return (
    <>
    
<Selector options={options} 
                selectedValue={"elegir"} 
                handleChange={handleSelectChange}
                borderType="rounded"  //rounded square
                > 
    </Selector>     
            
            
          
      <Hero
        
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
        productsData={productsData}
      />
    </>
    
   
  );
};

export default Home;

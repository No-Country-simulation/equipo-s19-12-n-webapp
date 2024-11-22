import "./Categories.css"; // Importa el CSS específico del componente

const Categories = ({ onCategorySelect }) => {
  return (
    <div className="categorias">
      <h3>Categorías</h3>
      <ul>
        <li onClick={() => onCategorySelect("frutas")}>Frutas y Verduras</li>
        <li onClick={() => onCategorySelect("carnes")}>Carnes y Pescados</li>
        <li onClick={() => onCategorySelect("lacteos")}>Lácteos</li>
        <li onClick={() => onCategorySelect("panaderia")}>Panadería</li>
        <li onClick={() => onCategorySelect("snacks")}>Snacks</li>
        <li onClick={() => onCategorySelect("noPerecederos")}>
          No Perecederos
        </li>
      </ul>
    </div>
  );
};

export default Categories;

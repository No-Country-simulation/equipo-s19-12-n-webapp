import { useContext } from "react";
import ProductCard from "../../atomos/ProductCard/ProductCard";
import { Context } from "../../../context/Context";

const ProductosRelacionados = () => {
  const { allProductsComerciante } = useContext(Context);

  return (
    <div className="productos-relacionados-container">
      {allProductsComerciante.length > 0 ? (
        allProductsComerciante.map((producto) => (
          <ProductCard
            key={producto.id}
            nombre={producto.nombre}
            img1={producto.img1}
            img2={producto.img2}
            img3={producto.img3}
            img4={producto.img4}
            precio={producto.precio}
            off={producto.off}
            desc={producto.desc}
            vencimiento={producto.vencimiento}
            comerciante={producto.comerciante}
            stock={producto.stock}
            categoria={producto.categoria}
            estado={producto.estado}
          />
        ))
      ) : (
        <p>No hay productos disponibles de este DDDvendedor.</p>
      )}
    </div>
  );
};

export default ProductosRelacionados;

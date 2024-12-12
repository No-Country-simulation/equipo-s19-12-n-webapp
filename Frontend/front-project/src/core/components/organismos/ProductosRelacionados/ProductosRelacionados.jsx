import { useContext } from "react";
import ProductCard from "../../atomos/ProductCard/ProductCard";
import { Context } from "../../../context/Context";
import "./ProductosRelacionados.css";

const ProductosRelacionados = () => {
  const { allProductsComerciante } = useContext(Context);

  return (
    <div className="productos-relacionados-container">
      {allProductsComerciante.length > 0 ? (
        allProductsComerciante.map((product) => (
          <ProductCard
            key={allProductsComerciante.indexOf(product)}
            nombre={product.nombre}
            img1={product.img1}
            img2={product.img2}
            img3={product.img3}
            img4={product.img4}
            precio={product.precio}
            off={product.off}
            categoria={product.categoria}
            estado={product.estado}
            id={product._id}
            desc={product.desc}
            comerciante={product.comerciante}
            vencimiento={product.vencimiento}
            stock={product.stock}
            style={{
              height: "250px",
              width: "auto",
              scale: "0.9",
              minWidth: "160px",
            }}
          ></ProductCard>
        ))
      ) : (
        <p>No hay productos disponibles de este vendedor.</p>
      )}
    </div>
  );
};

export default ProductosRelacionados;

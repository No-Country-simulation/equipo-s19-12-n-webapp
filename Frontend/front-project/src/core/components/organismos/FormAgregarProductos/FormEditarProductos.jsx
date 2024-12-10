{/*import React, { useState, useEffect } from 'react';
//import { useParams } from 'react-router-dom';
import Texto from "../../atomos/Textos/Texto";
//import AgregarImg from "../../moleculas/AgregarImg/AgregarImg";
import InputTit from "../../moleculas/InputTit/InputTit";
import Boton from '../../atomos/Button/Button'
import './style.css';

const FormEditarProducto = () => {
    
    const id = '674a6fdafd6b4dbe70401dc8';
    //const { id } = useParams();
    const [formData, setFormData] = useState({
      nombre: "",
      precio: "",
      stock: "",
      categoria: "",
      vencimiento: "",
      estado: "",
      off: "",
      img: [],
    });
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducto = async () => {
        try {
            const response = await fetch(`https://eaty-three.vercel.app/api/productos/${id}`);
            const data = await response.json();
            setFormData({
            nombre: data.nombre || "",
            precio: data.precio || "",
            stock: data.stock || "",
            categoria: data.categoria || "",
            vencimiento: data.vencimiento || "",
            estado: data.estado || "",
            off: data.off || "",
            img: [data.img1, data.img2, data.img3, data.img4],
            });
        } catch (err) {
            setError("Error al cargar los datos del producto.");
        }
        };
    
        fetchProducto();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          const response = await fetch(`https://eaty-three.vercel.app/api/productos/${id}`, {
            method: "PUT",
            body: JSON.stringify(formData),
            headers: {
              "Content-Type": "application/json",
            },
          });
      
          if (response.ok) {
            console.log("Producto actualizado exitosamente");
          } else {
            setError("Error al actualizar el producto.");
          }
        } catch (err) {
          setError("Error de conexión con el servidor.");
        }
    };

    return (
        <form>
            <Texto level={'h2'} texto={'Editar producto'} />
            <AgregarImg evento1={setImagen1} evento2={setImagen2} evento3={setImagen3} evento4={setImagen4} estado1={imagen1} estado2={imagen2} estado3={imagen3} estado4={imagen4}/>
            <div className="seccion">
                <InputTit titulo={'Nombre del producto'} modo={'input'} type={'text'} placeholder={formData.nombre}
                value = {formData.nombre}
                onChange = {(e) => setFormData ({ ...formData, nombre: e.target.value})}/> 
                <InputTit titulo={'Precio'} modo={'input'} type={'number'} placeholder={formData.precio} 
                value = {formData.precio}
                onChange = {(e) => setFormData ({ ...formData, precio: e.target.value})}/>
                <InputTit titulo={'Descuento'} modo={'selector'} placeholder={formData.off}
                categorias={['20% OFF', '30% OFF', '40% OFF', '50% OFF', '60% OFF', '70% OFF']}
                value = {formData.off}
                onChange = {(e) => setFormData ({ ...formData, off: e.target.value})}/>
                <InputTit titulo={'Stock'} modo={'input'} placeholder={formData.stock} type={'number'} 
                value = {formData.stock}
                onChange = {(e) => setFormData ({ ...formData, stock: e.target.value})}/> 
            </div>
            
            <Texto level={'h2'} texto={'Detalle de alimento'} />
            <div className="seccion"> 
                <InputTit titulo={'Categoría'} modo={'selector'} placeholder={formData.categoria}
                categorias={['Frutas y Verduras', 'Carnes y Pescados', 'Lácteos', 'Panadería y Pastelería', 'Snacks y Golosinas', 'Bebidas', 'Alimentos no perecederos', 'Otros']}
                value = {formData.categoria}
                onChange = {(e) => setFormData ({ ...formData, categoria: e.target.value})}/>
                <InputTit titulo={'Estado del producto'} modo={'selector'} placeholder={formData.estado} 
                categorias={['Próximo consumo recomendado', 'Exceso de inventario', 'Defecto de empaque', 'Producto reempacado']}
                value = {formData.estado}
                onChange = {(e) => setFormData ({ ...formData, estado: e.target.value})}/>
                <InputTit titulo={'Fecha de vencimiento'} modo={'input'} placeholder={formData.vencimiento} type={'date'}
                value = {formData.vencimiento}
                onChange = {(e) => setFormData ({ ...formData, vencimiento: e.target.value})}/>
            </div>

            {error && <p className="error">{error}</p>}
            <div className="botones">
                <Boton texto={'Guardar cambios'} variante={'orange'} onClick={handleSubmit} />
                <Boton texto={'Cancelar'} variante={'green'} onClick={() => setFormData({ ...formData, img: [] })} /> 
            </div> 
        </form>
      );
    };
    
export default FormEditarProducto;*/}

import React, { useState, useEffect } from "react";
import Texto from "../../atomos/Textos/Texto";
import AgregarImg from "../../moleculas/AgregarImg/AgregarImg";
import InputTit from "../../moleculas/InputTit/InputTit";
import Boton from "../../atomos/Button/Button";
import "./style.css";

const FormEditarProductos = () => {

    const id = '674a6fdafd6b4dbe70401dc8';
    //const { id } = useParams();
    const [formData, setFormData] = useState({
      nombre: "",
      precio: "",
      stock: "",
      categoria: "",
      vencimiento: "",
      estado: "",
      off: "",
      img: [],
    });
    // const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducto = async () => {
        try {
            const response = await fetch(`https://eaty-three.vercel.app/api/productos/${id}`);
            const data = await response.json();
            setFormData({
            nombre: data.nombre || "",
            precio: data.precio || "",
            stock: data.stock || "",
            categoria: data.categoria || "",
            vencimiento: data.vencimiento || "",
            estado: data.estado || "",
            off: data.off || "",
            img: [data.img1, data.img2, data.img3, data.img4],
            });
            
            console.log(data);
        } catch (err) {
            setError("Error al cargar los datos del producto.");
        }
        };
        
        fetchProducto();
        
    }, [id]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
          const response = await fetch(`https://eaty-three.vercel.app/api/productos/${id}`, {
            method: "PUT",
            body: JSON.stringify(formData),
            headers: {
              "Content-Type": "application/json",
            },
          });
      
          if (response.ok) {
            console.log("Producto actualizado exitosamente");
          } else {
            setError("Error al actualizar el producto.");
          }
        } catch (err) {
          setError("Error de conexión con el servidor.");
        }
    };

  return (
    <form onSubmit={handleSubmit}>
      <Texto level={"h2"} texto={"Editar producto"} />
      <AgregarImg
        evento1={(img) => handleInputChange("img", [img, formData.img[1], formData.img[2], formData.img[3]])}
        evento2={(img) => handleInputChange("img", [formData.img[0], img, formData.img[2], formData.img[3]])}
        evento3={(img) => handleInputChange("img", [formData.img[0], formData.img[1], img, formData.img[3]])}
        evento4={(img) => handleInputChange("img", [formData.img[0], formData.img[1], formData.img[2], img])}
        estado1={formData.img[0]}
        estado2={formData.img[1]}
        estado3={formData.img[2]}
        estado4={formData.img[3]}
      />
      <div className="seccion">
        <InputTit
          titulo={"Nombre del producto"}
          modo={"input"}
          type={"text"}
          placeholder={formData.nombre}
          value={formData.nombre}
          evento={(valor) => handleInputChange("nombre", valor)}
        />
        <InputTit
          titulo={"Precio"}
          modo={"input"}
          type={"number"}
          placeholder={formData.precio}
          value={formData.precio}
          evento={(valor) => handleInputChange("precio", valor)}
        />
        <InputTit
          titulo={"Descuento"}
          modo={"selector"}
          placeholder={formData.off}
          categorias={["20% OFF", "30% OFF", "40% OFF", "50% OFF", "60% OFF", "70% OFF"]}
          value={formData.off}
          evento={(valor) => handleInputChange("off", valor)}
        />
        <InputTit
          titulo={"Stock"}
          modo={"input"}
          placeholder={formData.stock}
          type={"number"}
          value={formData.stock}
          evento={(valor) => handleInputChange("stock", valor)}
        />
      </div>

      <Texto level={"h2"} texto={"Detalle de alimento"} />
      <div className="seccion">
        <InputTit
          titulo={"Categoría"}
          modo={"selector"}
          placeholder={formData.categoria}
          categorias={[
            "Frutas y Verduras",
            "Carnes y Pescados",
            "Lácteos",
            "Panadería y Pastelería",
            "Snacks y Golosinas",
            "Bebidas",
            "Alimentos no perecederos",
            "Otros",
          ]}
          value={formData.categoria}
          evento={(valor) => handleInputChange("categoria", valor)}
        />
        <InputTit
          titulo={"Estado del producto"}
          modo={"selector"}
          placeholder={formData.estado}
          categorias={[
            "Próximo consumo recomendado",
            "Exceso de inventario",
            "Defecto de empaque",
            "Producto reempacado",
          ]}
          value={formData.estado}
          evento={(valor) => handleInputChange("estado", valor)}
        />
        <InputTit
          titulo={"Fecha de vencimiento"}
          modo={"input"}
          placeholder={formData.vencimiento}
          type={"date"}
          value={formData.vencimiento}
          evento={(valor) => handleInputChange("vencimiento", valor)}
        />
      </div>

      <div className="botones">
        <Boton texto={"Guardar cambios"} variante={"orange"} onClick={console.log(formData)} />
        <Boton texto={"Cancelar"} variante={"green"} onClick={() => setFormData({})} />
      </div>
    </form>
  );
};

export default FormEditarProductos;
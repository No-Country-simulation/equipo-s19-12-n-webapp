{/*const FormEditarProductos = () => {

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

export default FormEditarProductos;*/}

import React, { useContext, useState, useEffect } from 'react'; //agregado por gpt
import Texto from "../../atomos/Textos/Texto";
import AgregarImg from "../../moleculas/AgregarImg/AgregarImg";
import InputTit from "../../moleculas/InputTit/InputTit";
import Boton from '../../atomos/Button/Button'
import './style.css'
import { Context } from '../../../context/Context';

const FormProductos = () => {

    const id = '674a6fdafd6b4dbe70401dc8';

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

      // const { datosUsuario } = useContext(Context)
    
      const [error, setError] = useState(null);
      const [nombreProducto, setNombreProducto] = useState(formData.nombre)
      const [precioProducto, setPrecioProducto] = useState(formData.precio)
      const [descuento, setDescuento] = useState(formData.off)
      const [valorDescuento, setValorDescuento] = useState(0)
      const [stockProducto, setStockProducto] = useState(formData.stock)
      const [fechaProducto, setFechaProducto] = useState(formData.vencimiento)
      const [estadoProducto, setEstadoProducto] = useState(formData.estado)
      const [categoriaProducto, setCategoriaProducto] = useState(formData.categoria)
      const [imagen1, setImagen1] = useState("");
      const [imagen2, setImagen2] = useState("");
      const [imagen3, setImagen3] = useState("");
      const [imagen4, setImagen4] = useState("");
      
      useEffect(() => {
        if(descuento === ""){
          setValorDescuento(0)
        }
        if(descuento === "20% OFF"){
          setValorDescuento(20)
        }
        if(descuento === "30% OFF"){
          setValorDescuento(30)
        }
        if(descuento === "40% OFF"){
          setValorDescuento(40)
        }
        if(descuento === "50% OFF"){
          setValorDescuento(50)
        }
        if(descuento === "60% OFF"){
          setValorDescuento(60)
        }
        if(descuento === "70% OFF"){
          setValorDescuento(70)
        }
      }, [descuento])
    
      // Envía el formulario
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch(`https://eaty-three.vercel.app/api/productos/${id}`, {
            method: "PUT",
            body: JSON.stringify({nombre: nombreProducto, desc: "", precio: precioProducto, off: valorDescuento, stock: stockProducto, img1: imagen1, img2: imagen2, img3: imagen3, img4: imagen4, vencimiento: fechaProducto, estado: estadoProducto, categoria: categoriaProducto}),
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          });
    
          console.log({nombre: nombreProducto, desc: "", precio: precioProducto, off: valorDescuento, stock: stockProducto, img1: imagen1, img2: imagen2, img3: imagen3, img4: imagen4, vencimiento: fechaProducto, estado: estadoProducto, categoria: categoriaProducto});

        } catch (err) {
          console.error("Error al agregar producto:", err);
          setError("Ocurrió un error al enviar los datos.");
        }
      };

    return (

        <form onSubmit={handleSubmit} >
            <Texto level={'h2'} texto={'Editar producto'} />
            <AgregarImg
              evento1={setImagen1}
              evento2={setImagen2}
              evento3={setImagen3}
              evento4={setImagen4}
              estado1={imagen1}
              estado2={imagen2}
              estado3={imagen3}
              estado4={imagen4}
            />
            {/* <AgregarImg evento1={setImagen1} evento2={setImagen2} evento3={setImagen3} evento4={setImagen4} estado1={imagen1} estado2={imagen2} estado3={imagen3} estado4={imagen4}/> */}
            <div className="seccion">
              <InputTit
                titulo={"Nombre del producto"}
                modo={"input"}
                type={"text"}
                placeholder={formData.nombre}
                value={nombreProducto}
                evento={setNombreProducto}
              />
              <InputTit
                titulo={"Precio"}
                modo={"input"}
                type={"number"}
                placeholder={formData.precio}
                value={precioProducto}
                evento={setPrecioProducto}
              />
              <InputTit
                titulo={"Descuento"}
                modo={"selector"}
                placeholder={formData.off}
                categorias={["20% OFF", "30% OFF", "40% OFF", "50% OFF", "60% OFF", "70% OFF"]}
                value={descuento}
                evento={setDescuento}
              />
              <InputTit
                titulo={"Stock"}
                modo={"input"}
                placeholder={formData.stock}
                type={"number"}
                value={stockProducto}
                evento={setStockProducto}
              />

                {/* <InputTit titulo={'Precio'} modo={'input'} type={'number'} placeholder={'$'} 
                evento={setPrecioProducto}/>
                <InputTit titulo={'Descuento'} modo={'selector'} placeholder={'Selecciona un descuento'}
                categorias={['20% OFF', '30% OFF', '40% OFF', '50% OFF', '60% OFF', '70% OFF']}
                evento={setDescuento}/>
                <InputTit titulo={'Stock'} modo={'input'} placeholder={'unidades'} type={'number'} 
                evento={setStockProducto}/>  */}
            </div>
            
            <Texto level={'h2'} texto={'Detalle de alimento'} />
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
                value={categoriaProducto}
                evento={setCategoriaProducto}
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
                value={estadoProducto}
                evento={setEstadoProducto}
              />
              <InputTit
                titulo={"Fecha de vencimiento"}
                modo={"input"}
                placeholder={formData.vencimiento}
                type={"date"}
                value={fechaProducto}
                evento={setFechaProducto}
              />
                {/* <InputTit titulo={'Categoría'} modo={'selector'} placeholder={'Selecciona una categoría'}
                categorias={['Frutas y Verduras', 'Carnes y Pescados', 'Lácteos', 'Panadería y Pastelería', 'Snacks y Golosinas', 'Bebidas', 'Alimentos no perecederos', 'Otros']}
                evento={setCategoriaProducto}/>
                <InputTit titulo={'Estado del producto'} modo={'selector'} placeholder={'Estado'} 
                categorias={['Próximo consumo recomendado', 'Exceso de inventario', 'Defecto de empaque', 'Producto reempacado']}
                evento={setEstadoProducto}/>
                <InputTit titulo={'Fecha de vencimiento'} modo={'input'} placeholder={'dd/mm/aaaa'} type={'date'}
                evento={setFechaProducto}/> */}
            </div>

            {error && <p className="error">{error}</p>}
            <div className="botones">
                <Boton texto={'Cargar producto'} variante={'orange'} onClick={handleSubmit} />
                <Boton texto={'Cancelar'} variante={'green'} onClick={() => setFormData({ ...formData, img: [] })} />
            </div>        
        </ form>
    )
}

export default FormProductos;
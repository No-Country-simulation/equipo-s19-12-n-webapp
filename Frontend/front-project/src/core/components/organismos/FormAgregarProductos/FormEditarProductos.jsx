import React, { useContext, useState, useEffect } from 'react'; //agregado por gpt
import Texto from "../../atomos/Textos/Texto";
import AgregarImg from "../../moleculas/AgregarImg/AgregarImg";
import InputTit from "../../moleculas/InputTit/InputTit";
import Boton from '../../atomos/Button/Button'
import './style.css'
import { Context } from '../../../context/Context';

const FormEditarProductos = () => {

      const { actualProduct, datosUsuario, setPanelPerfil } = useContext(Context)
    
      const [error, setError] = useState(null);
      const [nombreProducto, setNombreProducto] = useState(actualProduct.nombre)
      const [precioProducto, setPrecioProducto] = useState(actualProduct.precio)
      const [descuento, setDescuento] = useState("")
      const [descripcion, setDescripcion] = useState(actualProduct.desc)
      const [valorDescuento, setValorDescuento] = useState(actualProduct.off)
      const [stockProducto, setStockProducto] = useState(actualProduct.stock)
      const [fechaProducto, setFechaProducto] = useState(actualProduct.vencimiento)
      const [estadoProducto, setEstadoProducto] = useState(actualProduct.estado)
      const [categoriaProducto, setCategoriaProducto] = useState(actualProduct.categoria)
      const [imagen1, setImagen1] = useState(actualProduct.img1);
      const [imagen2, setImagen2] = useState(actualProduct.img2);
      const [imagen3, setImagen3] = useState(actualProduct.img3);
      const [imagen4, setImagen4] = useState(actualProduct.img4);
      
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

      function reiniciarDatos () {
        setNombreProducto("");
        setPrecioProducto(0);
        setDescripcion("")
        setDescuento("");
        setValorDescuento(0);
        setStockProducto(0);
        setFechaProducto(null);
        setEstadoProducto("");
        setCategoriaProducto("");
        setImagen1("");
        setImagen2("");
        setImagen3("");
        setImagen4("");
      }
    
      // Envía el formulario
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch(`https://eaty-three.vercel.app/api/productos/${actualProduct._id}`, {
            method: "PUT",
            body: JSON.stringify({nombre: nombreProducto, desc: descripcion, comerciante: datosUsuario.cuit, precio: precioProducto, off: valorDescuento, stock: stockProducto, img1: imagen1, img2: imagen2, img3: imagen3, img4: imagen4, vencimiento: fechaProducto, estado: estadoProducto, categoria: categoriaProducto}),
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          });
    
          console.log({nombre: nombreProducto, desc: descripcion, comerciante: datosUsuario.cuit , precio: precioProducto, off: valorDescuento, stock: stockProducto, img1: imagen1, img2: imagen2, img3: imagen3, img4: imagen4, vencimiento: fechaProducto, estado: estadoProducto, categoria: categoriaProducto});
          alert("Se ha actualizado el producto");
          reiniciarDatos();
          setPanelPerfil(0);

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
                <Boton texto={'Actualizar producto'} variante={'orange'} onClick={handleSubmit} />
                <Boton texto={'Cancelar'} variante={'green'} onClick={() => setFormData({ ...formData, img: [] })} />
            </div>        
        </ form>
    )
}

export default FormEditarProductos;
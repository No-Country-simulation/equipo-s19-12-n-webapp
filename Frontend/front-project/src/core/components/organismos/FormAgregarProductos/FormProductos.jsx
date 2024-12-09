import React, { useContext, useState, useEffect } from 'react'; //agregado por gpt
import Texto from "../../atomos/Textos/Texto";
import AgregarImg from "../../moleculas/AgregarImg/AgregarImg";
import InputTit from "../../moleculas/InputTit/InputTit";
import Boton from '../../atomos/Button/Button'
import './style.css'
import { Context } from '../../../context/Context';

const FormProductos = () => {

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

      const { datosUsuario } = useContext(Context)
    
      const [error, setError] = useState(null);
      const [nombreProducto, setNombreProducto] = useState("")
      const [precioProducto, setPrecioProducto] = useState(0)
      const [descuento, setDescuento] = useState("")
      const [valorDescuento, setValorDescuento] = useState(0)
      const [stockProducto, setStockProducto] = useState(0)
      const [fechaProducto, setFechaProducto] = useState(null)
      const [estadoProducto, setEstadoProducto] = useState("")
      const [categoriaProducto, setCategoriaProducto] = useState("")
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
          const response = await fetch("https://eaty-three.vercel.app/api/productos/", {
            method: "POST",
            body: JSON.stringify({nombre: nombreProducto, desc: "", precio: precioProducto, off: valorDescuento, stock: stockProducto, img1: imagen1, img2: imagen2, img3: imagen3, img4: imagen4, comerciante: datosUsuario.cuit, vencimiento: fechaProducto, estado: estadoProducto, categoria: categoriaProducto}),
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          });
    
          console.log({nombre: nombreProducto, desc: "", precio: precioProducto, off: valorDescuento, stock: stockProducto, img1: imagen1, img2: imagen2, img3: imagen3, img4: imagen4, comerciante: datosUsuario.cuit, vencimiento: fechaProducto, estado: estadoProducto, categoria: categoriaProducto});

        } catch (err) {
          console.error("Error al agregar producto:", err);
          setError("Ocurrió un error al enviar los datos.");
        }
      };

    return (

        <form onSubmit={handleSubmit} >
            <Texto level={'h2'} texto={'Cargar producto'} />
            <AgregarImg evento1={setImagen1} evento2={setImagen2} evento3={setImagen3} evento4={setImagen4} estado1={imagen1} estado2={imagen2} estado3={imagen3} estado4={imagen4}/>
            <div className="seccion">
                <InputTit titulo={'Nombre del producto'} modo={'input'} type={'text'} 
                evento={setNombreProducto}/> 
                <InputTit titulo={'Precio'} modo={'input'} type={'number'} placeholder={'$'} 
                evento={setPrecioProducto}/>
                <InputTit titulo={'Descuento'} modo={'selector'} placeholder={'Selecciona un descuento'}
                categorias={['20% OFF', '30% OFF', '40% OFF', '50% OFF', '60% OFF', '70% OFF']}
                evento={setDescuento}/>
                <InputTit titulo={'Stock'} modo={'input'} placeholder={'unidades'} type={'number'} 
                evento={setStockProducto}/> 
            </div>
            
            <Texto level={'h2'} texto={'Detalle de alimento'} />
            <div className="seccion"> 
                <InputTit titulo={'Categoría'} modo={'selector'} placeholder={'Selecciona una categoría'}
                categorias={['Frutas y Verduras', 'Carnes y Pescados', 'Lácteos', 'Panadería y Pastelería', 'Snacks y Golosinas', 'Bebidas', 'Alimentos no perecederos', 'Otros']}
                evento={setCategoriaProducto}/>
                <InputTit titulo={'Estado del producto'} modo={'selector'} placeholder={'Estado'} 
                categorias={['Próximo consumo recomendado', 'Exceso de inventario', 'Defecto de empaque', 'Producto reempacado']}
                evento={setEstadoProducto}/>
                <InputTit titulo={'Fecha de vencimiento'} modo={'input'} placeholder={'dd/mm/aaaa'} type={'date'}
                evento={setFechaProducto}/>
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
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
      
    
      // Maneja las imágenes
      /*const cargarImagen1 = async (event) => {
        const file = event.target.files[0];
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "EatyPreset");

        const response = await fetch("https://api.cloudinary.com/v1_1/dabb8jxxh/image/upload", {
          method: "POST",
          body: data
        });

        if (response.ok) {
          const result = await response.json();
          setImagen1(result.secure_url)
        } else {
          console.error("Error al subir la imagen:", response.statusText);
        }
      }

      function cargarImagen2(event) {
        const fileP = event.target.files[0]
        const preset = {file: fileP, upload_preset: "EatyPreset"}

        fetch("https://api/coudinary.com/v1_1/dabb8jxxh/image/upload", {
          method: "POST",
          body: JSON.stringify(preset),
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            Accept: "application/json",
          },
        })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
      }

      function cargarImagen3(event) {
        const fileP = event.target.files[0]
        const preset = {file: fileP, upload_preset: "EatyPreset"}

        fetch("https://api/coudinary.com/v1_1/dabb8jxxh/image/upload", {
          method: "POST",
          body: JSON.stringify(preset),
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            Accept: "application/json",
          },
        })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        }) 
      }
      function cargarImagen4(event) {
        const fileP = event.target.files[0]
        const preset = {file: fileP, upload_preset: "EatyPreset"}

        fetch("https://api/coudinary.com/v1_1/dabb8jxxh/image/upload", {
          method: "POST",
          body: JSON.stringify(preset),
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            Accept: "application/json",
          },
        })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
      }*/

      /*const handleImageChange = (event, number) => {
        const files = Array.from(event.target.files); // Convertir FileList a un array
        setFormData((prevData) => ({
          ...prevData,
          img: [...prevData.img, ...files], // Agregar las nuevas imágenes
        }));
      };
    
      // Maneja otros campos
      const handleChange = (field, value) => {
        setFormData((prevData) => ({
          ...prevData,
          [field]: value, // Actualiza dinámicamente el campo correspondiente
        }));
      };*/
    
      // Envía el formulario
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Validación
        /*if (nombreProducto === "" || precioProducto === 0 || categoriaProducto === "") {
          setError("Por favor completa los campos obligatorios");
          return;
        }
        setError(null);*/
    
        try {
          const response = await fetch("https://eaty-three.vercel.app/api/productos/", {
            method: "POST",
            body: JSON.stringify({nombre: nombreProducto, desc: "", precio: precioProducto, off: valorDescuento, stock: stockProducto, img1: imagen1, img2: imagen2, img3: imagen3, img4: imagen4, comerciante: datosUsuario.cuit, vencimiento: fechaProducto, estado: estadoProducto, categoria: categoriaProducto}),
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          });
    
          //const data = await response.json();
          console.log("Producto agregado:", response);
    
          // Limpiar el formulario
          /*setFormData({
            nombre: "",
            precio: "",
            stock: "",
            categoria: "",
            vencimiento: "",
            estado: "",
            off: "",
            img: [],
          });*/
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
                evento={() => setNombreProducto()}/> 
                <InputTit titulo={'Precio'} modo={'input'} type={'number'} placeholder={'$'} 
                evento={() => setPrecioProducto()}/>
                <InputTit titulo={'Descuento'} modo={'selector'} placeholder={'Selecciona un descuento'}
                categorias={['20% OFF', '30% OFF', '40% OFF', '50% OFF', '60% OFF', '70% OFF']}
                evento={() => setDescuento()}/>
                <InputTit titulo={'Stock'} modo={'input'} placeholder={'unidades'} type={'number'} 
                evento={() => setStockProducto()}/> 
            </div>
            
            <Texto level={'h2'} texto={'Detalle de alimento'} />
            <div className="seccion"> 
                <InputTit titulo={'Categoría'} modo={'selector'} placeholder={'Selecciona una categoría'}
                categorias={['Frutas y Verduras', 'Carnes y Pescados', 'Lácteos', 'Panadería y Pastelería', 'Snacks y Golosinas', 'Bebidas', 'Alimentos no perecederos', 'Otros']}
                evento={() => setCategoriaProducto()}/>
                <InputTit titulo={'Estado del producto'} modo={'selector'} placeholder={'Estado'} 
                categorias={['Próximo consumo recomendado', 'Exceso de inventario', 'Defecto de empaque', 'Producto reempacado']}
                evento={() => setEstadoProducto()}/>
                <InputTit titulo={'Fecha de vencimiento'} modo={'input'} placeholder={'dd/mm/aaaa'} type={'date'}
                evento={() => setFechaProducto()}/>
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
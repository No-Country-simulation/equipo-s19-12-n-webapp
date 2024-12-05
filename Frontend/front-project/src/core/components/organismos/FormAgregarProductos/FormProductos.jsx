import React, { useState } from 'react'; //agregado por gpt
import Texto from "../../atomos/Textos/Texto";
import AgregarImg from "../../moleculas/AgregarImg/AgregarImg";
import InputTit from "../../moleculas/InputTit/InputTit";
import Boton from '../../atomos/Button/Button'
import './style.css'

const FormProductos = () => {

    const [formData, setFormData] = useState({
        nombre: "",
        precio: "",
        stock: "",
        categoria: "",
        vencimiento: "",
        estado: "",
        almacenamiento: "",
        img: [],
      });
    
      const [error, setError] = useState(null);
    
      // Maneja las imágenes
      const handleImageChange = (event) => {
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
      };
    
      // Envía el formulario
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Validación
        if (!formData.nombre || !formData.precio || !formData.categoria) {
          setError("Por favor completa los campos obligatorios");
          return;
        }
        setError(null);
    
        try {
          const response = await fetch("https://eaty-three.vercel.app/api/productos/", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          });
    
          const data = await response.json();
          console.log("Producto agregado:", data);
    
          // Limpiar el formulario
          setFormData({
            nombre: "",
            precio: "",
            stock: "",
            categoria: "",
            vencimiento: "",
            estado: "",
            almacenamiento: "",
            img: [],
          });
        } catch (err) {
          console.error("Error al agregar producto:", err);
          setError("Ocurrió un error al enviar los datos.");
        }
      };

    /*
    //desde aca hasta mas abajo, proximo comentario, agregado por gpt
    const [formData, setFormData] = useState ({
        nombre: '',
        precio: '',
        stock: '',
        categoria: '',
        vencimiento: '',
        estado: '',
        almacenamiento: '',
        img: [],
    });

    const [error, setError] = useState(null);

    const handleImageChange = (event) => {
        const files = event.target.files;
        setFormData((prevData) => ({
          ...prevData,
          img: [...prevData.img, ...Array.from(files)], // Agregar las imágenes seleccionadas
        }));
    };

    const handleChange = (field, value) => {
        setFormData ({ ...formData, img: images });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.nombre || !formData.precio || !formData.categoria){
            setError ("Por favor completa los campos obligatorios");
            return;
        }
        setError(null);

        try {
            const response = await fetch("https://eaty-three.vercel.app/api/productos/", {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            });

            const data = await response.json();
            console.log("Producto agregado:", data);

            setFormData({
                nombre: '',
                precio: '',
                stock: '',
                categortia: '',
                vencimiento: '',
                estado: '',
                almacenamiento: '',
                img: [],
            });
        } catch (err) {
            console.error("Error al agregar producto:", err);
            setError ("Ocurrió un error al enviar los datos.");
        }
    };

    //Hasta acá todo agregado con gpt*/

    return (
        //onSubmit={handleSubmit}  --------agregado con gpt
        //onImageChange={handleImageChange} ---------agregado con gpt
        //value={formData.nombre} onChange={(e) => handleChange('nombre', e.target.value)}
        //value={formData.precio} onChange={(e) => handleChange('precio', e.target.value)}
        //value={formData.categoria} onChange={(e) => handleChange('categoria', e.target.value)}
        //value={formData.stock} onChange={(e) => handleChange('stock', e.target.value)}

        //value={formData.almacenamiento} onChange={(e) => handleChange('almacenamiento', e.target.value)}
        //value={formData.estado} onChange={(e) => handleChange('estado', e.target.value)}
        //value={formData.vencimiento} onChange={(e) => handleChange('vencimiento', e.target.value)}

        //{error && <p className="error">{error}</p>}
        //onClick={handleSubmit}
        //onClick={() => setFormData({ ...formData, img: [] })}
        <form onSubmit={handleSubmit} >
                <Texto level={'h2'} texto={'Cargar producto'} />
                <AgregarImg onImageChange={handleImageChange} />
            <div className="seccion">
                <InputTit titulo={'Nombre del producto'} modo={'input'} type={'text'} value={formData.nombre}
                onChange={(e) => handleChange('nombre', e.target.value)} />
                <InputTit titulo={'Precio'} modo={'input'} type={'number'} placeholder={'$'} value={formData.precio} 
                onChange={(e) => handleChange('precio', e.target.value)} />
                <InputTit modo={'selector'} placeholder={'Categorías'}
                categorias={['Frutas y verduras', 'Carnes y pescados', 'Lacteos', 'Panadería y pastelería', 'Snacks y golosinas', 'Bebidas', 'No perecederos']}
                value={formData.categoria}
                onChange={(e) => handleChange('categoria', e.target.value)} />
                <InputTit titulo={'Stock'} modo={'input'} placeholder={'unidades'} type={'number'} value={formData.stock}
                onChange={(e) => handleChange('stock', e.target.value)}/> 
            </div>
            
            <Texto level={'h2'} texto={'Detalle del alimento'} />
            <div className="seccion"> 
                <InputTit titulo={'Cond. de almacenamiento'} modo={'selector'} placeholder={'Condiciones'}
                categorias={['Refrigerado (0-5 °C)', 'Ambiente seco', 'Temperatura ambiente (15-25 °C)', 'Congelado (-18 °C o menos)', 'Congelado sin descongelar previamente', 'Lugar fresco y seco']}
                value={formData.almacenamiento}
                onChange={(e) => handleChange('almacenamiento', e.target.value)} />
                <InputTit titulo={'Estado del producto'} modo={'selector'} placeholder={'Estado'}
                categorias={['Próximo consumo recomendado', 'Exceso de inventario', 'Defecto de empaque', 'Producto reempacado']}
                value={formData.estado}
                onChange={(e) => handleChange('estado', e.target.value)} />
                <InputTit titulo={'Fecha de vencimiento'} modo={'input'} placeholder={'dd/mm/aaaa'} type={'date'} value={formData.vencimiento}
                onChange={(e) => handleChange('vencimiento', e.target.value)} />
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
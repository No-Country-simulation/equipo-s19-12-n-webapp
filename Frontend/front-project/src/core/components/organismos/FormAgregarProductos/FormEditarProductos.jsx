import React, { useContext, useState, useEffect } from 'react'; //agregado por gpt
import { useParams } from "react-router-dom";
import Texto from "../../atomos/Textos/Texto";
import AgregarImg from "../../moleculas/AgregarImg/AgregarImg";
import InputTit from "../../moleculas/InputTit/InputTit";
import Boton from '../../atomos/Button/Button'
import './style.css'
import { Context } from '../../../context/Context';
import Modal from '../modal/ModalEditarProducto'


const FormEditarProductos = () => {

    const { actualProduct } = useContext(Context)
    const id = actualProduct._id

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
    
      const [error, setError] = useState(null);
      // const [nombreProducto, setNombreProducto] = useState(formData.nombre)
      // const [precioProducto, setPrecioProducto] = useState(formData.precio)
      const [descuento, setDescuento] = useState(formData.off)
      const [valorDescuento, setValorDescuento] = useState(0)
      // const [stockProducto, setStockProducto] = useState(formData.stock)
      // const [fechaProducto, setFechaProducto] = useState(formData.vencimiento)
      // const [estadoProducto, setEstadoProducto] = useState(formData.estado)
      // const [categoriaProducto, setCategoriaProducto] = useState(formData.categoria)
      // const [imagen1, setImagen1] = useState("");
      // const [imagen2, setImagen2] = useState("");
      // const [imagen3, setImagen3] = useState("");
      // const [imagen4, setImagen4] = useState("");
      
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

      const handleChange = (key, value) => {
        setFormData((prev) => ({ ...prev, [key]: value }));
      };

      const { setPanelPerfil } = useContext(Context);
      const [isModalVisible, setModalVisible] = useState(false);

      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch(`https://eaty-three.vercel.app/api/productos/${actualProduct._id}`, {
            method: "PUT",
            body: JSON.stringify({
              ...formData,
              img1: formData.img[0],
              img2: formData.img[1],
              img3: formData.img[2],
              img4: formData.img[3],
            }), 
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          });

          console.log("Datos enviados:", formData);

          if (response.ok) {
            setModalVisible(true);
          } else {
            setError("Ocurrió un error al enviar los datos.");
          }
    
        } catch (err) {
          console.error("Error al agregar producto:", err);
          setError("Ocurrió un error al enviar los datos.");
        }
      };
      
      const handleAccept = () => {
        setPanelPerfil(0);
      };

    return (
      <>
        <form onSubmit={handleSubmit}>
          <Texto level="h2" texto="Editar producto" />
          <AgregarImg
            evento1={(img) => handleChange("img", [img, formData.img[1], formData.img[2], formData.img[3]])}
            evento2={(img) => handleChange("img", [formData.img[0], img, formData.img[2], formData.img[3]])}
            evento3={(img) => handleChange("img", [formData.img[0], formData.img[1], img, formData.img[3]])}
            evento4={(img) => handleChange("img", [formData.img[0], formData.img[1], formData.img[2], img])}
            estado1={formData.img[0]}
            estado2={formData.img[1]}
            estado3={formData.img[2]}
            estado4={formData.img[3]}
          />
          <div className="seccion">
            <InputTit
              titulo="Nombre del producto"
              modo="input"
              type="text"
              placeholder={formData.nombre}
              value={formData.nombre}
              evento={(value) => handleChange("nombre", value)}
            />
            <InputTit
              titulo="Precio"
              modo="input"
              type="number"
              placeholder={formData.precio}
              value={formData.precio}
              evento={(value) => handleChange("precio", value)}
            />
            <InputTit
              titulo="Descuento"
              modo="selector"
              placeholder={formData.off}
              categorias={["20% OFF", "30% OFF", "40% OFF", "50% OFF", "60% OFF", "70% OFF"]}
              value={formData.off}
              evento={(value) => handleChange("off", value)}
            />
            <InputTit
              titulo="Stock"
              modo="input"
              type="number"
              placeholder={formData.stock}
              value={formData.stock}
              evento={(value) => handleChange("stock", value)}
            />
          </div>
          <Texto level="h2" texto="Detalle de alimento" />
          <div className="seccion">
            <InputTit
              titulo="Categoría"
              modo="selector"
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
              evento={(value) => handleChange("categoria", value)}
            />
            <InputTit
              titulo="Estado del producto"
              modo="selector"
              placeholder={formData.estado}
              categorias={[
                "Próximo consumo recomendado",
                "Exceso de inventario",
                "Defecto de empaque",
                "Producto reempacado",
              ]}
              value={formData.estado}
              evento={(value) => handleChange("estado", value)}
            />
            <InputTit
              titulo="Fecha de vencimiento"
              modo="input"
              type="date"
              placeholder={formData.vencimiento}
              value={formData.vencimiento}
              evento={(value) => handleChange("vencimiento", value)}
            />
          </div>

          {error && <p className="error">{error}</p>}
          <div className="botones">
            <Boton texto="Guardar cambios" variante="orange" onClick={handleSubmit} />
            <Boton texto="Cancelar" variante="green" onClick={() => setFormData({ ...formData, img: ["", "", "", ""] })} />
          </div>
        </form>

        {isModalVisible && (
          <Modal
            onClose={() => setModalVisible(false)}
            onAccept={handleAccept}
          />
        )}
      </>
    )
}

export default FormEditarProductos;
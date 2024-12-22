import { useContext, useState, useEffect } from "react";
import { Context } from "../../../context/Context";
import styles from "../RestaurantImage/Rest.module.css";
import { Edit } from "@mui/icons-material";
import "./RestaurantImage.css";

const RestaurantImage = () => {
    const { datosUsuario } = useContext(Context);
    const [image, setImage] = useState(datosUsuario.img1 || "")

    const handleFileChange = async (event) => {
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
          setImage(result.secure_url)
        } else {
          console.error("Error al subir la imagen 1:", response.statusText);
        }
    };

    useEffect(() => {
      if(image !== "") {
        fetch(`https://eaty-three.vercel.app/api/comerciante/${datosUsuario.id}`, {
          method: "PUT",
          body: JSON.stringify({nombre: datosUsuario.nombre, direccion: datosUsuario.direccion, ciudad: datosUsuario.ciudad, rubro: datosUsuario.rubro, desc: datosUsuario.desc, telefono: datosUsuario.telefono, logo: datosUsuario.logo, pass: datosUsuario.pass, img1: image}),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
      }
    }, [image])
    


  return (
    <div className={styles.contImagenPortada}>
      <div className={styles.imagenPortada} style={image === "" ? {backgroundImage: "url(fondoNulo.webp)"} : {backgroundImage: `url(${image})`}}>
        <input type="file" accept="image/*" className={styles.inImage} multiple onChange={(e) => handleFileChange(e)} style={{display: "block"}}/>
        <Edit
         sx={{
          backgroundColor: "#76B939",
          borderRadius: "50%",
          color: "white",
          border: "8px solid #76B939",
          cursor: "pointer",
          marginBottom: {xs: "4px", md: "12px", lg: "12px"},
          marginRight: {xs: "4px", md: "12px", lg: "12px"},
          scale: {xs: 0.7, md: 1, lg: 1}
        }}>
        </Edit>       
      </div>
    </div>
  );
};

export default RestaurantImage;

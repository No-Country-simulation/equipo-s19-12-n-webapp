import "./RestaurantLogo.css";
import { useContext, useState, useEffect } from "react";
import { Context } from "../../../context/Context";
import PhotoCameraOutlinedIcon from "@mui/icons-material/PhotoCameraOutlined";

const RestaurantLogo = () => {
  const { datosUsuario, usuario } = useContext(Context);
  const [logo0, setLogo0] = useState(datosUsuario.logo || "")

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
      setLogo0(result.secure_url)
      console.log(result.secure_url)
    } else {
      console.error("Error al subir la imagen 1:", response.statusText);
    }
  };

  useEffect(() => {
    console.log(`logo: ${logo0}`)
    if(logo0 !== "") {
      fetch(`https://eaty-three.vercel.app/api/comerciante/${datosUsuario.id}`, {
        method: "PUT",
        body: JSON.stringify({nombre: datosUsuario.nombre, direccion: datosUsuario.direccion, ciudad: datosUsuario.ciudad, rubro: datosUsuario.rubro, desc: datosUsuario.desc, telefono: datosUsuario.telefono, logo: logo0, pass: datosUsuario.pass, img1: datosUsuario.img1}),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
    }
  }, [logo0])

  return (
    <div className="contenedorLogoEn">
      <img
        className="imgLogoEn"
        src={logo0 === "" ? "fondoNulo.webp" : logo0}
        alt=""
      />
      <div className="contenedor-btn-imagen-perfil">
        <PhotoCameraOutlinedIcon
          sx={{
            backgroundColor: "#76B939",
            borderRadius: "50%",
            color: "white",
            border: "8px solid #76B939",
            cursor: "pointer",
            position: "relative"
          }}
          fontSize="large"
          style={usuario === "comerciante" ? {opacity: 1} : {opacity: 0}}
        />
        <input type="file" accept="image/*" className="inImageLogo" multiple onChange={(e) => handleFileChange(e)} style={{display: "block"}}/>
      </div>
    </div>
  );
};

export default RestaurantLogo;

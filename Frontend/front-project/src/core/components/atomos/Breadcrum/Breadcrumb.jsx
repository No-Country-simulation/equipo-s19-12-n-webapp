import styles from "../Breadcrum/Breadcrumb.module.css";
import { Context } from "../../../context/Context";
import { useContext } from "react";

const Breadcrumb = () => {
  const { datosUsuario } = useContext(Context);

  return (
    <div className={styles.Breadcrumb}>
      <div className={styles.titulo2}>Perfil de Negocio</div>
      <div className={styles.titulo}>{datosUsuario.rubro}: {datosUsuario.nombre}</div>
    </div>
  );
};

export default Breadcrumb;

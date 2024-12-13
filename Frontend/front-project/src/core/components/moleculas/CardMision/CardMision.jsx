import "./CardMision.css";

const CardMision = ({ icon, title, description }) => {
  return (
    <div className="card-mision-container">
      <div className="contenedor-img-card-mision">
        <img
          src={icon}
          alt={title}
          className="card-mision-icon"
        />
      </div>
      <div className="contenedor-titulo-y-parrafo">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CardMision;

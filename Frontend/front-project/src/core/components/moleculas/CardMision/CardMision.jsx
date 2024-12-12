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
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default CardMision;

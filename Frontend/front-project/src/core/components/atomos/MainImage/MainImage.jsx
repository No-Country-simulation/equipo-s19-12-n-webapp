import "./MainImage.css";
import girlImage from "../../../../assets/images/girl-image.svg";

const MainImage = () => {
  return (
    <img
      src={girlImage}
      alt="Mujer con productos"
      className="image"
    />
  );
};

export default MainImage;

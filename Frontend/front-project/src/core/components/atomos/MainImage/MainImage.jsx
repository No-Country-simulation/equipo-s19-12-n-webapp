import "./MainImage.css";
import girlImage from "../../../../assets/images/girl-image.svg";
import food from "../../../../assets/images/food-plate-1.svg";

const MainImage = () => {
  return (
    <>
      <img
        src={girlImage}
        alt="Mujer con productos"
        className="image main-image-desktop"
      />
      <img
        src={food}
        alt="Mujer con productos"
        className="image main-image-tablet"
      />
    </>
  );
};

export default MainImage;

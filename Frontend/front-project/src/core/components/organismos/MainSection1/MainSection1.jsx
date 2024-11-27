import MainTitle from "../../atomos/MainTitle/Maintitle";
import MainSubtitle from "../../atomos/MainSubtitle/MainSubtitle";
import MainImage from "../../atomos/MainImage/MainImage";
import Button from "../../atomos/Button/Button";
import "./MainSection1.css";

const MainSection1 = () => {
  return (
    <div className="main-banner">
      <div className="text-content">
        <MainTitle />
        <MainSubtitle />
        <Button
          variante={"orange"}
          texto={"Ver productos"}
        />
      </div>
      <div className="image-content">
        <MainImage />
      </div>
    </div>
  );
};

export default MainSection1;

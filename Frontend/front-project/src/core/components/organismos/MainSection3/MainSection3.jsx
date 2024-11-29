import Button from "../../atomos/Button/Button";
import MainSubtitleTablet from "../../atomos/MainSubtitleTablet/MainSubtitleTablet";
import MainTitleTablet from "../../atomos/MainTitleTablet/MainTitleTablet";

const MainSection3 = () => {
  return (
    <div className="main-banner">
        <div className="text-content">

      <MainTitleTablet />
      <MainSubtitleTablet />
      <Button
        variante={"orange"}
        texto={"Reservá ahora"}
        />
        </div>
    </div>
  );
};

export default MainSection3;

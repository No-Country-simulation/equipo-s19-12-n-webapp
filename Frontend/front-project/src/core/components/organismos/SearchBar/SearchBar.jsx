import SearchInput from "../../atomos/SearchInput/SearchInput";
import Button from "../../atomos/Button/Button";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="sectionSearch">
        <SearchInput />
      </div>
      <div className="sectionButtons">
        <Button texto={"Ordenar por"} />
        <Button
          texto={"Mapa"}
          variante={"white"}
          icon={"carrito"}
          className="btns-search-bar"
        />
        <Button
          texto={"Carrito"}
          variante={"white"}
          icon={"carrito"}
          className="btns-search-bar"
        />
      </div>
    </div>
  );
};

export default SearchBar;

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
        <Button texto={"Mapa"} />
        <Button texto={"Carrito"} />
      </div>
    </div>
  );
};

export default SearchBar;

import "./SearchInput.css";
import searchIcon from "../../../../assets/images/search-icon.svg";

const SearchInput = () => {
  return (
    <div className="search-input-container">
      <input
        type="text"
        placeholder="Buscar"
        className="search-input"
      />
      <img
        src={searchIcon}
        alt="Buscar"
        className="search-icon"
      />
    </div>
  );
};

export default SearchInput;

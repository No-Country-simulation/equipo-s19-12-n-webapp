import './style.css'

const Inputs = ({ type, placeholder, value, onChange}) => {
    return (
      <input
        type={type}
        placeholder={placeholder}
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        // handleInputChange={(valor) => handleInputChange("nombre", valor)}
      />
    );
};

export default Inputs;
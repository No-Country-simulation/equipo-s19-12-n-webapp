import './style.css'

// const Inputs = ({ type, placeholder }) => {

//     return(
//         <>
//             <input type= {type} placeholder= {placeholder} required />
//         </>
//     )
// }

const Inputs = ({ type, placeholder, value, onChange }) => {
    return (
      <input
        type={type}
        placeholder={placeholder}
        required
        value={value}
        onChange={onChange}
      />
    );
};

export default Inputs;
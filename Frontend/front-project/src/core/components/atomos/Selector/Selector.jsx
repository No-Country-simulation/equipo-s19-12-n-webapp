import React from 'react'
import './style_selector.css'

const Selector = ({ options, selectedValue, handleChange, borderType  }) => {
    const borderClass = borderType === 'rounded' ? 'rounded' : 'square';

    return (
        <select value={selectedValue} onChange={handleChange} className={`desk-selector ${borderClass}`}>
            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default Selector
// ejemplo de llamado
/* const options = [
    { value: '', label: 'Selecciona una opción' },
    { value: 'option1', label: 'Opción 1' },
    { value: 'option2', label: 'Opción 2' },
    { value: 'option3', label: 'Opción 3' }
];
<Selector options={options} 
                selectedValue={"elegir"} 
                handleChange={handleSelectChange}
                borderType="rounded"  //rounded square
                > 
    </Selector> */
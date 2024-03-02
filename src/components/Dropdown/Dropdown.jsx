import React, { useState } from 'react';
import './Dropdown.css';
import dropdownarrow from '../../assets/dropdownarrow.png';

function Dropdown({options}) {
    const [isActive, setIsActive] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Select your option');
  
    const handleSelect = (optionText) => {
      setSelectedOption(optionText);
      setIsActive(false);
    };
  return (
    <div className={`select-menu ${isActive ? 'active' : ''}`}>
      <div className="select-btn" onClick={() => setIsActive(!isActive)}>
        <span className="sBtn-text">{selectedOption}</span>
        <img src={dropdownarrow} alt='arrow' />
      </div>
      <ul className="options">
        {options.map((option, index) => (
          <li className="option" key={index} onClick={() => handleSelect(option)}>
            <span className="option-text">{option}</span>
          </li>
        ))}
      </ul>
    </div>  )
}

export default Dropdown
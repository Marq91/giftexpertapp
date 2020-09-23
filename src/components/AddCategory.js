import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInput = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      // esto inserta el ultimo en buscar y el resto al final
      setCategories(cats => [inputValue, ...cats]);
      setInputValue('');
    }
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="...Search Gifs"
        value={inputValue}
        onChange={handleInput}
      />
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}

export default AddCategory

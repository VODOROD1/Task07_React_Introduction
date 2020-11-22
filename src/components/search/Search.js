import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Search.css';

function Search({searchTaskHandler}) {

  const [fieldValue, setFieldValue] = useState('');

  const handleInputChange = ({ target: { value } }) => {
    setFieldValue(value);
  }

  return  (
    <div className="search-wrapper">
      <form className="search-form">
        <button type="submit" className="search-button" onClick={(e) => searchTaskHandler(e, fieldValue)}><i className="fas fa-search"></i></button>
        <input type="text" className="search-field" value={fieldValue} onChange={handleInputChange} placeholder='Поиск' />
      </form>
    </div>
  )

}

export default Search;

Search.propTypes = {
  searchTaskHandler: PropTypes.func,
}

Search.defaultProps = {
  searchTaskHandler: () => {},
}


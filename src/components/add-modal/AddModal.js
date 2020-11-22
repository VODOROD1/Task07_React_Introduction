import React from 'react';
import PropTypes from 'prop-types';
import {isValidTitle, isCommonValidate, commonValidate } from './validation.js';

import './AddModal.css'

const AddModal = function ({valueTitle, valueText, titleOnChange, textOnChange, title, text, clickToAdd, isOpen, close, open}) {
  let [state, setState] = React.useState({ isOpen: false });

  let clickAddHandler = () => {
    commonValidate(valueTitle, valueText);
    return isValidTitle && isCommonValidate;
  }

  return (
    <React.Fragment>
      <button className="openModalButton" onClick={() => open()}>
        +
      </button>

      {isOpen && (
        <div className='modal'>
          <div className='modal-body'>
            <div 
              className={isCommonValidate && isValidTitle ? 'field' : 'error field'}
              contentEditable="true"
              className="field"
              data-placeholder="Введите заголовок"
              onInput={titleOnChange}
              innerText={valueTitle}
            >
            </div>
            <br/>
            <div 
              contentEditable="true"
              className={isCommonValidate ? 'field' : 'error field'}
              data-placeholder="Текст заметки"
              onInput={textOnChange}
              innerText={valueText}
            >
            </div>

            <br/>
            <div className='buttons-wrapper'>
              <button onClick={() => clickToAdd(clickAddHandler())} className='create-button'>Создать</button>
              <button onClick={() => close()}>Закрыть</button>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  )
}

AddModal.propTypes = {
  titleOnChange: PropTypes.func,
  textOnChange: PropTypes.func,
  clickToAdd: PropTypes.func,
  valueText: PropTypes.string,
  valueTitle: PropTypes.string,
}

AddModal.defaultProps = {
  titleOnChange: () => {},
  textOnChange: () => {},
  clickToAdd: () => {},
  valueText: '',
  valueTitle: '',
}

export default AddModal;
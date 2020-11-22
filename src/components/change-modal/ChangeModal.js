import React from 'react';
import PropTypes from 'prop-types';

import './ChangeModal.css'

const ChangeModal = function ({valueTitle, valueText, titleOnChange, textOnChange, clickToChange, isOpen, close}) {
  return (
    <React.Fragment>

      {isOpen && (
        <div className='modal'>
          <div className='modal-body'>
            <div 
                contentEditable="true"
                className="field"
                placeholder={valueTitle}
                onInput={titleOnChange}
                // innerText={valueTitle}
            >
              {valueTitle}
            </div>
            <br/>
            <div 
                contentEditable="true"
                className="field"
                placeholder={textOnChange}
                onInput={textOnChange}
                // innerText={valueText}
            >
              {valueText}
            </div>
            <br/>
            <div className='buttons-wrapper'>
              <button onClick={clickToChange}>Сохранить</button>
              <button onClick={() => close()}>Закрыть</button>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  )
}

ChangeModal.propTypes = {
  titleOnChange: PropTypes.func,
  textOnChange: PropTypes.func,
  clickToChange: PropTypes.func,
  valueText: PropTypes.string,
  valueTitle: PropTypes.string,
}

ChangeModal.defaultProps = {
  titleOnChange: () => {},
  textOnChange: () => {},
  clickToChange: () => {},
  valueText: '',
  valueTitle: '',
}

export default ChangeModal;
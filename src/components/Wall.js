import React  from 'react';
import Input from '../components/Input'
import PropTypes from 'prop-types';

// testId, type, name, value, change, inputclass 
function Wall( { Style, InputClass, valueW, setterW, valueH, setterH } ) {


  return (
    <div className={ Style }>
      <Input 
      type='number'
      name='Altura'
      inputclass={ InputClass }
      value={valueW}
      change={setterW}
      />
      <Input 
      type='number'
      name='Largura'
      inputclass={ InputClass }
      value={valueH}
      change={setterH}
      />
    </div>
  );
}

export default Wall;

Wall.propTypes = {
    Style: PropTypes.string.isRequired,
    InputClass:PropTypes.string.isRequired,
    valueW:PropTypes.string.isRequired,
    setterW:PropTypes.string.isRequired,
    valueH:PropTypes.string.isRequired,
    setterH:PropTypes.string.isRequired,
  };
  
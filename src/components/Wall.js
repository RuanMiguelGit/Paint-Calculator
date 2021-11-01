import React from 'react';
import Input from '../components/Input'
import PropTypes from 'prop-types';

// testId, type, name, value, change, inputclass 
function Wall( { Style, InputClass } ) {
  return (
    <div className={ Style }>
      <Input 
      type='number'
      name='Altura'
      inputclass={ InputClass }
      />
      <Input 
      type='number'
      name='Largura'
      inputclass={ InputClass }
      />
    </div>
  );
}

export default Wall;

Wall.propTypes = {
    Style: PropTypes.string.isRequired,
    InputClass:PropTypes.string.isRequired,
  };
  
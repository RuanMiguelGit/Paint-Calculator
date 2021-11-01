import React, { useState } from 'react';
import Input from './Input';
import PropTypes from 'prop-types';

function Window( { InputClass } ) {
const [window, setWindow] = useState(0)

  return (
    <div>
    <Input 
      type='number'
      name='Janelas'
      inputclass={ InputClass }
      value={ window }
      change={ setWindow }
      />
    </div>
  );
}

export default Window;

Window.propTypes = {
    InputClass:PropTypes.string.isRequired,
  };
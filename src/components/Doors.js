import React, { useState } from 'react';
import Input from './Input';
import PropTypes from 'prop-types';

function Doors( { InputClass } ) {
const [doors, setDoors] = useState(0)

  return (
    <div>
    <Input 
      type='number'
      name='Portas'
      inputclass={ InputClass }
      value={ doors }
      change={ setDoors }
      />
    </div>
  );
}

export default Doors;

Doors.propTypes = {
    InputClass:PropTypes.string.isRequired,
  };
import React, { useState }  from 'react';
import Input from '../components/Input'
import PropTypes from 'prop-types';
import Doors from './Doors';

// testId, type, name, value, change, inputclass 
function Wall( { Style, InputClass } ) {
  const [wallWid, setWallWid] = useState(0)
  const [wallHeig, setWallHeig] = useState(0)

  return (
    <div className={ Style }>
      <div>
      <Doors
      Style='wall-holder' 
      InputClass='input-door'
      />
      <Doors
      Style='wall-holder' 
      InputClass='input-door'
      />
      </div>
      <Input 
      type='number'
      name='Altura'
      inputclass={ InputClass }
      value={wallWid}
      change={setWallWid}
      />
      <Input 
      type='number'
      name='Largura'
      inputclass={ InputClass }
      value={wallHeig}
      change={setWallHeig}
      />
     

    </div>
  );
}

export default Wall;

Wall.propTypes = {
    Style: PropTypes.string.isRequired,
    InputClass:PropTypes.string.isRequired,
  };
  
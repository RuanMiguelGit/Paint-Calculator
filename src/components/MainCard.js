import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Wall from './Wall';
import Doors from './Doors';

function MainCard( { Style } ) {
  const [item, setItem] = useState(4)
  const [loading, setLoading] = useState(false)
  
  return (
    <div className={ Style }>
      { loading  ? "Carregando" :[...Array(item)].map((data) =>
          <Wall 
           key={ data }
           Style='wall-holder' 
           InputClass='input-height' 
           />
      )
      }

    </div>
  );
}

export default MainCard;

MainCard.propTypes = {
    Style: PropTypes.string.isRequired,
  };

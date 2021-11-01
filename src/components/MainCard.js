import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Wall from './Wall';
import Button from '../components/Button';

function MainCard( { Style } ) {
  const [item] = useState(4)
  const [loading] = useState(false)
  
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
    <Button
    Title="CALCULAR"
    Style="btn"
    onClick={()=>  console.log('data')}
    />
    </div>
  );
}

export default MainCard;

MainCard.propTypes = {
    Style: PropTypes.string.isRequired,
  };

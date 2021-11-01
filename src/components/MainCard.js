import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Wall from './Wall';
import appContext from '../context/appContext';

function MainCard( { Style } ) {
  
  const 
  { 
    wallOne,
    wallTwo,
    wallThree,
    wallFour,
    setWallOne,
    setwallTwo,
    setwallThree,
    setwallFour,
    wallOneH,
    wallTwoH,
    wallThreeH,
    wallFourH,
    setWallOneH,
    setwallTwoH,
    setwallThreeH,
    setwallFourH
  } = useContext(appContext)

  return (
    <div className={ Style }>
      <Wall 
      Style='wall-holder' 
      InputClass='input-height' 
      valueW={ wallOne } 
      setterW={ setWallOne }
      valueH={ wallOneH } 
      setterH={ setWallOneH }/>
      <Wall 
      Style='wall-holder' 
      InputClass='input-height' 
      valueW={ wallTwo } 
      setterW={ setwallTwo }
      valueH={ wallTwoH } 
      setterH={ setwallTwoH }
      />
      <Wall 
      Style='wall-holder' 
      InputClass='input-height' 
      valueW={ wallThree } 
      setterW={ setwallThree}
      valueH={ wallThreeH } 
      setterH={ setwallThreeH }
      />
      <Wall 
      Style='wall-holder' 
      InputClass='input-height' 
      valueW={ wallFour } 
      setterW={ setwallFour } 
      valueH={ wallFourH } 
      setterH={ setwallFourH }
      />
    </div>
  );
}

export default MainCard;

MainCard.propTypes = {
    Style: PropTypes.string.isRequired,
  };

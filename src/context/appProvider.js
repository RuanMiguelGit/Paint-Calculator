import React, { useState } from 'react';
import PropTypes from 'prop-types';
import appContext from './appContext';

function Provider({ children }) {

  const [wallOne, setWallOne] = useState(0)
  const [wallTwo, setwallTwo] = useState(0)
  const [wallThree, setwallThree] = useState(0)
  const [wallFour, setwallFour] = useState(0)
  const [wallOneH, setWallOneH] = useState(0)
  const [wallTwoH, setwallTwoH] = useState(0)
  const [wallThreeH, setwallThreeH] = useState(0)
  const [wallFourH, setwallFourH] = useState(0)

  const contextValue = {
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
  };

  return (
    <appContext.Provider value={ contextValue }>
      {children}
    </appContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

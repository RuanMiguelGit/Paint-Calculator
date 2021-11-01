import React, { useState } from 'react';
import PropTypes from 'prop-types';
import appContext from './appContext';

function Provider({ children }) {

  const [wallOne, setWallOne] = useState(0)
  const [wallOneH, setWallOneH] = useState(0)
 

  const contextValue = {
    wallOne,
    setWallOne,
    setWallOneH,
    wallOneH,
 
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

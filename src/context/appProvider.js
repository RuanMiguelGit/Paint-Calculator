/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import appContext from './appContext';

function Provider({ children }) {


  const contextValue = {
  
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

/* eslint-disable */
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

import React from 'react';
import PropTypes from 'prop-types';
import Wall from './Wall';

function MainCard( { Style } ) {
  return (
    <div className={ Style }>
      <Wall Style='wall-holder' InputClass='input-height'/>
      <Wall Style='wall-holder' InputClass='input-height'/>
      <Wall Style='wall-holder' InputClass='input-height'/>
      <Wall Style='wall-holder' InputClass='input-height'/>
    </div>
  );
}

export default MainCard;

MainCard.propTypes = {
    Style: PropTypes.string.isRequired,
  };

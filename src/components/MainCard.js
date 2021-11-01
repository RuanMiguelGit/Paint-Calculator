import React from 'react';
import PropTypes from 'prop-types';
import Button from '../components/Button'
function MainCard( { Style } ) {
  return (
    <div className={Style}>
        {/* <Button /> */}
    </div>
  );
}

export default MainCard;

MainCard.propTypes = {
    Style: PropTypes.string.isRequired,
  };

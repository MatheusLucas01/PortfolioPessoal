// import React from "react";
import PropTypes from "prop-types";

const Effects = ({ left, right, top, size = 500 }) => {
  const positionStyles = {
    top: `${top}px`,
    width: `${size}px`,
    height: `${size}px`,
    zIndex: -1,
  };

  if (left !== undefined) {
    positionStyles.left = `${left}px`;
  }

  if (right !== undefined) {
    positionStyles.right = `${right}px`;
  }
  return <div className="effects" style={positionStyles}></div>;
};
Effects.propTypes = {
  left: PropTypes.number,
  right: PropTypes.number,
  top: PropTypes.number.isRequired,
  size: PropTypes.number,
};

export default Effects;

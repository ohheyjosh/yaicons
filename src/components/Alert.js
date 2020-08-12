import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const Alert = forwardRef(
  ({ color = "currentColor", size = 32, strokeWidth = 4, ...rest }, ref) => {
    return (
      <svg
        ref={ref}
        className="yaicons"
        width={size}
        height={size}
        viewBox="0 0 96 96"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        overflow="visible"
        {...rest}
      >
        <g fill="none" fillRule="evenodd" stroke={color}>
          <path d="M43.767.611a4.371 4.371 0 013.334.575 4.432 4.432 0 011.373 1.38h0l40.339 64.1a4.466 4.466 0 01.58 3.353 4.436 4.436 0 01-1.94 2.787 4.39 4.39 0 01-2.385.694h0l-80.17-.308a4.384 4.384 0 01-3.118-1.317 4.476 4.476 0 01-.601-5.503h0L41.008 2.58A4.401 4.401 0 0143.767.611z" />
          <path strokeLinecap="round" d="M45 19v24M45 55v.5" />
        </g>
      </svg>
    );
  }
);

Alert.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Alert.displayName = "Alert";

export default Alert;

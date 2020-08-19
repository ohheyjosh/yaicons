import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const Download = forwardRef(
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
        <g strokeLinecap="round" transform="translate(16 20)">
          <line x1="32.25" x2="32.25" y2="48" />
          <line x1="32" x2="32" y1="23" y2="87" transform="rotate(-90 32 55)" />
          <path d="M51.4264069,29.6 L33.627417,47.3989899 C32.8463684,48.1800385 31.5800385,48.1800385 30.7989899,47.3989899 L13,29.6" />
        </g>
      </svg>
    );
  }
);

Download.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Download.displayName = "Download";

export default Download;

import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const Forward = forwardRef(
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
        <g strokeLinecap="round" transform="matrix(-1 0 0 1 84 16)">
          <path d="M1,21 L61.7142857,21 C67.3949289,21 72,25.5890813 72,31.25 L72,64" />
          <polyline
            strokeLinejoin="round"
            points="-9 9 12 33 33 9"
            transform="rotate(90 12 21)"
          />
        </g>
      </svg>
    );
  }
);

Forward.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Forward.displayName = "Forward";

export default Forward;

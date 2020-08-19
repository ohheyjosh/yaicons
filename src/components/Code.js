import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const Code = forwardRef(
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
        <g
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="rotate(90 31.5 48.5)"
        >
          <polyline points="15 48 31 64 47 48" />
          <polyline points="15 0 31 16 47 0" transform="rotate(-180 31 8)" />
          <line
            x1=".386"
            x2="61.76"
            y1="23.24"
            y2="41.386"
            transform="rotate(-1.44 31.073 32.313)"
          />
        </g>
      </svg>
    );
  }
);

Code.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Code.displayName = "Code";

export default Code;

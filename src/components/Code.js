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
          transform="rotate(90 34 50)"
        >
          <polyline points="16 54 32 72 48 54" />
          <polyline
            points="16.484 0 32.484 18 48.484 0"
            transform="rotate(-180 32.484 9)"
          />
          <line
            x1=".633"
            x2="63.491"
            y1="25.509"
            y2="45.633"
            transform="rotate(-2.44 32.062 35.571)"
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

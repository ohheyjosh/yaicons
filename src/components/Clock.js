import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const Clock = forwardRef(
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
          transform="translate(8 8)"
        >
          <circle cx="40" cy="40" r="40" />
          <line x1="40" x2="40" y1="10.909" y2="40" />
          <line
            x1="40.171"
            x2="55.566"
            y1="39.716"
            y2="49.386"
            transform="rotate(-2.09 47.869 44.551)"
          />
        </g>
      </svg>
    );
  }
);

Clock.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Clock.displayName = "Clock";

export default Clock;

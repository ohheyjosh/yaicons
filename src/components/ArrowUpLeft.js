import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const ArrowUpLeft = forwardRef(
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
        <g fill="none" fillRule="evenodd" stroke={color} strokeLinecap="round">
          <path d="M70.303 70.851L25.05 25.596" />
          <path
            strokeLinejoin="round"
            d="M24.5 52.167V26.995a2 2 0 012-2H51.67"
          />
        </g>
      </svg>
    );
  }
);

ArrowUpLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

ArrowUpLeft.displayName = "ArrowUpLeft";

export default ArrowUpLeft;

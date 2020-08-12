import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const ArrowUpRight = forwardRef(
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
          <path d="M25.05 71.204L70.305 25.95" />
          <path
            strokeLinejoin="round"
            d="M43.734 25.4h25.172a2 2 0 012 2v25.172"
          />
        </g>
      </svg>
    );
  }
);

ArrowUpRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

ArrowUpRight.displayName = "ArrowUpRight";

export default ArrowUpRight;

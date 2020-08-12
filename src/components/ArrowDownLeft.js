import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const ArrowDownLeft = forwardRef(
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
          <path d="M69.95 25.596L24.697 70.851" />
          <path
            strokeLinejoin="round"
            d="M51.266 71.4H26.095a2 2 0 01-2-2V44.228"
          />
        </g>
      </svg>
    );
  }
);

ArrowDownLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

ArrowDownLeft.displayName = "ArrowDownLeft";

export default ArrowDownLeft;

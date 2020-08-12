import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const ArrowLeft = forwardRef(
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
          <path d="M79.5 48.15h-64" />
          <path
            strokeLinejoin="round"
            d="M33.9 67.326L16.101 49.527a2 2 0 010-2.828L33.9 28.9"
          />
        </g>
      </svg>
    );
  }
);

ArrowLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

ArrowLeft.displayName = "ArrowLeft";

export default ArrowLeft;

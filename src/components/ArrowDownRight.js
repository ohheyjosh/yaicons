import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const ArrowDownRight = forwardRef(
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
          <path d="M24.696 25.95L69.95 71.205" />
          <path
            strokeLinejoin="round"
            d="M70.5 44.634v25.172a2 2 0 01-2 2H43.328"
          />
        </g>
      </svg>
    );
  }
);

ArrowDownRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

ArrowDownRight.displayName = "ArrowDownRight";

export default ArrowDownRight;

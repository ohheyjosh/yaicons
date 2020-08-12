import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const ArrowUp = forwardRef(
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
          <path d="M47.75 80.4v-64" />
          <path
            strokeLinejoin="round"
            d="M28.574 34.8l17.799-17.799a2 2 0 012.828 0L67 34.8"
          />
        </g>
      </svg>
    );
  }
);

ArrowUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

ArrowUp.displayName = "ArrowUp";

export default ArrowUp;

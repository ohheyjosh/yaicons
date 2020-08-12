import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const ArrowDown = forwardRef(
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
          <path d="M47.25 16.4v64" />
          <path
            strokeLinejoin="round"
            d="M66.426 62L48.627 79.799a2 2 0 01-2.828 0L28 62"
          />
        </g>
      </svg>
    );
  }
);

ArrowDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

ArrowDown.displayName = "ArrowDown";

export default ArrowDown;

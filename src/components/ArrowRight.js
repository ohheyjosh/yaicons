import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const ArrowRight = forwardRef(
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
          <path d="M15.5 48.65h64" />
          <path
            strokeLinejoin="round"
            d="M61.1 29.474l17.799 17.799a2 2 0 010 2.828L61.1 67.9"
          />
        </g>
      </svg>
    );
  }
);

ArrowRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

ArrowRight.displayName = "ArrowRight";

export default ArrowRight;

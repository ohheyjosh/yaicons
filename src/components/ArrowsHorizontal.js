import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const ArrowsHorizontal = forwardRef(
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
          <path d="M79.5 47.75h-63" />
          <path
            strokeLinejoin="round"
            d="M34.885 66.926l-17.8-17.799a2 2 0 010-2.828l17.8-17.799M61.15 28.5l17.798 17.799a2 2 0 010 2.828L61.15 66.926"
          />
        </g>
      </svg>
    );
  }
);

ArrowsHorizontal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

ArrowsHorizontal.displayName = "ArrowsHorizontal";

export default ArrowsHorizontal;

import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const ChevronRight = forwardRef(
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
        <polyline
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          points="0 0 28 28 56 0"
          transform="rotate(-90 55 21)"
        />
      </svg>
    );
  }
);

ChevronRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

ChevronRight.displayName = "ChevronDown";

export default ChevronRight;

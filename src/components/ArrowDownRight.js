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
        <g
          fill="none"
          stroke={color}
          strokeLinecap="round"
          transform="rotate(-45 53.297 6.401)"
        >
          <line x1="19.25" x2="19.25" y2="64" />
          <path
            StrokeLinejoin="round"
            d="M38.4264069,45.6 L20.627417,63.3989899 C19.8463684,64.1800385 18.5800385,64.1800385 17.7989899,63.3989899 L-3.90798505e-14,45.6"
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

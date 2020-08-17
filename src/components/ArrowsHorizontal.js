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
        <g
          fill="none"
          fillRule="evenodd"
          strokeLinecap="round"
          transform="rotate(90 25.5 54)"
        >
          <line x1="19.25" x2="19.25" y1="1" y2="64" />
          <path
            strokeLineJoin="round"
            d="M38.4264069,45.6152237 L20.627417,63.4142136 C19.8463684,64.1952621 18.5800385,64.1952621 17.7989899,63.4142136 L0,45.6152237"
          />
          <path
            strokeLineJoin="round"
            d="M38.4264069,0.965223689 L20.627417,18.7642136 C19.8463684,19.5452621 18.5800385,19.5452621 17.7989899,18.7642136 L1.13686838e-13,0.965223689"
            transform="rotate(-180 19.213 10.158)"
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

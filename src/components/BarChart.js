import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const BarChart = forwardRef(
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
          transform="translate(10 12)"
        >
          <line x1=".5" x2=".5" y2="72" />
          <line
            x1="36.5"
            x2="36.5"
            y1="36"
            y2="108"
            transform="rotate(-90 36.5 72)"
          />
          <line x1="16.5" x2="16.5" y1="32" y2="56" />
          <line x1="36.5" x2="36.5" y1="20" y2="56" />
          <line x1="56.5" x2="56.5" y2="56" />
        </g>
      </svg>
    );
  }
);

BarChart.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

BarChart.displayName = "BarChart";

export default BarChart;

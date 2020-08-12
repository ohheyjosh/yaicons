import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const BatteryCharging = forwardRef(
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
          stroke={color}
          transform="translate(8 30)"
        >
          <rect width={73} height={37} x={-0.5} y={-0.5} rx={4} />
          <path strokeLinecap="round" d="M41 8l-8 8M39 20l-6-4M39 20l-8 8" />
          <path d="M72 10h6c1.105 0 2 .597 2 1.333v13.334c0 .736-.895 1.333-2 1.333h-6" />
        </g>
      </svg>
    );
  }
);

BatteryCharging.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

BatteryCharging.displayName = "BatteryCharging";

export default BatteryCharging;

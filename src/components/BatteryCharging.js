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
        <g fill="none" transform="translate(8 30)">
          <rect width="73" height="37" x="-.5" y="-.5" rx="4" />
          <line x1="41" x2="33" y1="8" y2="16" strokeLinecap="round" />
          <line x1="39" x2="33" y1="20" y2="16" strokeLinecap="round" />
          <line x1="39" x2="31" y1="20" y2="28" strokeLinecap="round" />
          <path d="M72,10 L78,10 C79.1045695,10 80,10.5969537 80,11.3333333 L80,24.6666667 C80,25.4030463 79.1045695,26 78,26 L72,26" />
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

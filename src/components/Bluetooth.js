import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const Bluetooth = forwardRef(
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
          strokeLinecap="round"
          StrokeLinejoin="round"
          transform="translate(18 9)"
        >
          <polygon
            fill="none"
            points="45 5 65 35 25 35"
            transform="rotate(90 45 20)"
          />
          <polygon
            fill="none"
            points="45 5 65 35 25 35"
            transform="rotate(90 45 20)"
          />
          <polygon
            fill="none"
            points="45 45 65 75 25 75"
            transform="rotate(90 45 60)"
          />
          <polyline
            fill="none"
            points="15 5 35 35 -5 35"
            transform="matrix(0 1 1 0 -5 5)"
          />
          <polyline
            fill="none"
            points="35 75 -5 75 15 45"
            transform="matrix(0 1 1 0 -45 45)"
          />
        </g>
      </svg>
    );
  }
);

Bluetooth.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Bluetooth.displayName = "Bluetooth";

export default Bluetooth;

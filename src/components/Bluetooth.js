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
          fillOpacity={0}
          fillRule="evenodd"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M79 28L49 48V8z" />
          <path d="M79 28L49 48V8zM79 68L49 88V48zM19 28l30 20V8M49 88V48L19 68" />
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

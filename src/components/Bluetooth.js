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
          <path d="M81 27L49 48V6z" />
          <path d="M81 27L49 48V6zM81 69L49 90V48zM17 27l32 21V6M49 90V48L17 69" />
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

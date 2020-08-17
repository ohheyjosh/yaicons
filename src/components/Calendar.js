import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const Calendar = forwardRef(
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
        <g fill="none" stroke={color} transform="translate(12 6)">
          <rect
            width="72"
            height="72"
            y="12"
            fill="none"
            strokeLinejoin="round"
            rx="2"
          />
          <path
            fill="none"
            d="M14,2 L22,2 L22,2 L22,10 L14,10 C11.790861,10 10,8.209139 10,6 C10,3.790861 11.790861,2 14,2 Z"
            transform="rotate(90 16 6)"
          />
          <path
            fill="none"
            d="M54,2 L62,2 L62,2 L62,10 L54,10 C51.790861,10 50,8.209139 50,6 C50,3.790861 51.790861,2 54,2 Z"
            transform="rotate(90 56 6)"
          />
          <line x2="72" y1="28" y2="28" fill="none" />
        </g>
      </svg>
    );
  }
);

Calendar.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Calendar.displayName = "Calendar";

export default Calendar;

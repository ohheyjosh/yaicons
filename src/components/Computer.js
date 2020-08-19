import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const Computer = forwardRef(
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
        <g transform="translate(6 12)">
          <rect width="84" height="60" rx="2" />
          <line x2="84" y1="48" y2="48" />
          <circle cx="42" cy="54" r="2" />
          <path d="M32.1935484,60 L32.1935484,62.4104405 L32.1935484,63.5003501 C32.1935484,66.3732934 29.9402845,68.8521459 26.8901841,70 C26.3216553,70.2005958 26,70.5101283 26,71.0402072 C26,71.5702861 26.4765555,72 27.0644165,72 C33.9318443,72 39.0824151,72 42.516129,72 L41.483871,72 C44.9175849,72 50.0681557,72 56.9355835,72 C57.5234445,72 58,71.5702861 58,71.0402072 C58,70.5101283 57.6783447,70.2005958 57.1098159,70 C54.0597155,68.8521459 51.8064516,66.3732934 51.8064516,63.5003501 L51.8064516,62.4104405 L51.8064516,60" />
        </g>
      </svg>
    );
  }
);

Computer.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Computer.displayName = "Computer";

export default Computer;

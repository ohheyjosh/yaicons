import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const Mail = forwardRef(
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
        <g strokeLinejoin="round" transform="translate(4 19)">
          <rect width="88" height="56"/>
          <path d="M0,0.5 L43.6116949,27.8241492 C44.2698391,28.236498 45.1071946,28.230546 45.7594105,27.8088831 L88,0.5 L88,0.5"/>
        </g>
      </svg>
    );
  }
);

Mail.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Mail.displayName = "Mail";

export default Mail;

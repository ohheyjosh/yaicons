import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const Inbox = forwardRef(
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
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="translate(12 12)"
        >
          <circle cx="36" cy="36" r="36" />
          <line x1="36.5" x2="36.5" y1="32.25" y2="48.25" />
          <line x1="36.5" x2="36.5" y1="23.25" y2="23.75" />
        </g>
      </svg>
    );
  }
);

Inbox.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Inbox.displayName = "Inbox";

export default Inbox;

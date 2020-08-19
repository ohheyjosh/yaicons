import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const Database = forwardRef(
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
          transform="translate(16 11)"
        >
          <ellipse cx="32" cy="12" rx="32" ry="12" />
          <path d="M64,36.5555556 C64,43.1955556 49.7777778,48.5555556 32,48.5555556 C14.2222222,48.5555556 0,43.1955556 0,36.5555556" />
          <path d="M0,11.6666667 L0,61.4444444 C0,67.3466667 14.2222222,75 32,75 C49.7777778,75 64,67.3466667 64,61.4444444 L64,11.6666667" />
        </g>
      </svg>
    );
  }
);

Database.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Database.displayName = "Database";

export default Database;

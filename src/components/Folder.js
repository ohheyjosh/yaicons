import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const Folder = forwardRef(
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
        <g transform="translate(12 13)">
          <rect width="72" height="56" y="16" rx="4" />
          <path
            strokeLinecap="round"
            d="M33.3424508,8 L68,8 C70.209139,8 72,9.790861 72,12 L72,68 C72,70.209139 70.209139,72 68,72 L4,72 C1.790861,72 0,70.209139 0,68 L0,12"
          />
          <path d="M9.23705556e-14,12 L9.23705556e-14,4 C9.23705556e-14,1.790861 1.790861,0 4,0 L25.859265,0 C27.1966777,0 28.445603,0.668404541 29.1874661,1.78119922 C31.034126,4.55118895 32.4191208,6.62868126 33.3424508,8.01367613" />
        </g>
      </svg>
    );
  }
);

Folder.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Folder.displayName = "Folder";

export default Folder;

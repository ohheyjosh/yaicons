import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const Building = forwardRef(
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
          fillRule="evenodd"
          stroke={color}
          StrokeLinejoin="round"
          transform="translate(4 8)"
        >
          <line x2="88" y1="80" y2="80" strokeLinecap="round" />
          <path d="M16,0 L72,0 C73.1045695,-4.1271253e-15 74,0.8954305 74,2 L74,80 L74,80 L14,80 L14,2 C14,0.8954305 14.8954305,2.02906125e-16 16,0 Z" />
          <rect width="16" height="20" x="36" y="60" />
          <rect width="8" height="8" x="24" y="9" />
          <rect width="8" height="8" x="40" y="9" />
          <rect width="8" height="8" x="56" y="9" />
          <rect width="8" height="8" x="24" y="25" />
          <rect width="8" height="8" x="40" y="25" />
          <rect width="8" height="8" x="56" y="25" />
          <rect width="8" height="8" x="24" y="42" />
          <rect width="8" height="8" x="40" y="41" />
          <rect width="8" height="8" x="56" y="41" />
        </g>
      </svg>
    );
  }
);

Building.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Building.displayName = "Building";

export default Building;

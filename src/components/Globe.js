import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const Globe = forwardRef(
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
        <g transform="translate(12 12)">
          <circle cx="36" cy="36" r="36" />
          <ellipse cx="36" cy="36" rx="24" ry="36" />
          <ellipse cx="36" cy="36" rx="8" ry="36" />
          <line x2="72" y1="36" y2="36" />
        </g>
      </svg>
    );
  }
);

Globe.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Globe.displayName = "Globe";

export default Globe;

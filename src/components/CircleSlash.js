import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const CircleSlash = forwardRef(
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
        <circle cx="36" cy="36" r="36" />
        <line x1="11" x2="61.205" y1="11" y2="61.205" />
      </svg>
    );
  }
);

CircleSlash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

CircleSlash.displayName = "CircleSlash";

export default CircleSlash;

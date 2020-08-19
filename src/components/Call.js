import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const Call = forwardRef(
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
        <g fill="none" stroke={color} transform="rotate(-45 43.799 13.9)">
          <path d="M18,0 C8.0588745,0 0,17.90861 0,40 C0,62.09139 8.0588745,80 18,80" />
          <path d="M18 24C15.790861 24 14 31.163444 14 40 14 48.836556 15.790861 56 18 56M18 0L30 0C32.209139 0 34 1.790861 34 4L34 20C34 22.209139 32.209139 24 30 24L18 24 18 24M18 56L30 56C32.209139 56 34 57.790861 34 60L34 76C34 78.209139 32.209139 80 30 80L18 80 18 80" />
        </g>
      </svg>
    );
  }
);

Call.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Call.displayName = "Call";

export default Call;

import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const Battery = forwardRef(
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
        <g fill="none" fillOpacity={0} fillRule="evenodd" stroke={color}>
          <path d="M76.4 29.5c1.13 0 2.15.438 2.89 1.142a3.836 3.836 0 011.21 2.787h0V62.57c0 1.088-.46 2.074-1.21 2.787A4.18 4.18 0 0176.4 66.5h0-64.8a4.18 4.18 0 01-2.89-1.142A3.836 3.836 0 017.5 62.57h0V33.43c0-1.088.46-2.074 1.21-2.787A4.18 4.18 0 0111.6 29.5h64.8z" />
          <path d="M80 40h6c1.105 0 2 .597 2 1.333v13.334c0 .736-.895 1.333-2 1.333h-6" />
        </g>
      </svg>
    );
  }
);

Battery.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Battery.displayName = "Battery";

export default Battery;

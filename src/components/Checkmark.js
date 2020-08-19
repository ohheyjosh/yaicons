import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const Checkmark = forwardRef(
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
        <polyline
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          points="72 0 22.5 48 0 26.182"
          transform="translate(12 26)"
        />
      </svg>
    );
  }
);

Checkmark.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Checkmark.displayName = "Checkmark";

export default Checkmark;

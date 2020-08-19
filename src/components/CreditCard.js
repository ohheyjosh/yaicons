import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const CreditCard = forwardRef(
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
        <g transform="translate(8 22)">
          <rect width="80" height="52" rx="4" />
          <line x2="80" y1="16" y2="16" />
          <line x1="8" x2="40" y1="26" y2="26" strokeLinecap="round" />
        </g>
      </svg>
    );
  }
);

CreditCard.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

CreditCard.displayName = "CreditCard";

export default CreditCard;

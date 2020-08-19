import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const Cash = forwardRef(
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
        <g fill="none" transform="translate(4 26)">
          <rect width="88" height="44" strokeLinejoin="round" />
          <ellipse cx="44" cy="22" strokeLinejoin="round" rx="12" ry="16" />
          <path d="M0 12C6.627417 12 12 6.627417 12 0M76 0C76 6.627417 81.372583 12 88 12M88 32C81.372583 32 76 37.372583 76 44M12 44C12 37.372583 6.627417 32 0 32" />
        </g>
      </svg>
    );
  }
);

Cash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Cash.displayName = "Cash";

export default Cash;

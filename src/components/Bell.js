import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const Bell = forwardRef(
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
        <g fill="none" fillRule="evenodd" transform="translate(17.75 13)">
          <rect width="60" height="6" y="49.25" fill="none" rx="3" />
          <path
            fill="none"
            d="M49.5 29.375C49.5 18.3983406 40.6016594 9.5 29.625 9.5 18.6483406 9.5 9.75 18.3983406 9.75 29.375M3 49.25C6.72792206 49.25 9.75 40.1837662 9.75 29"
          />
          <path
            fill="none"
            d="M49.5,49.25 C53.2279221,49.25 56.25,40.1837662 56.25,29"
            transform="matrix(-1 0 0 1 105.75 0)"
          />
          <circle cx="29.75" cy="4.5" r="4.5" fill="none" />
          <circle cx="29.75" cy="63.5" r="7.5" fill="none" />
        </g>
      </svg>
    );
  }
);

Bell.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Bell.displayName = "Bell";

export default Bell;

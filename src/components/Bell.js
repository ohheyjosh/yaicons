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
        <g
          fill="none"
          fillOpacity={0}
          fillRule="evenodd"
          stroke={color}
          transform="translate(17.75 13)"
        >
          <rect width={60} height={6} y={49.25} rx={3} />
          <path d="M49.5 29.375C49.5 18.398 40.602 9.5 29.625 9.5S9.75 18.398 9.75 29.375M3 49.25c3.728 0 6.75-9.066 6.75-20.25M56.25 49.25c-3.728 0-6.75-9.066-6.75-20.25" />
          <circle cx={29.75} cy={4.5} r={4.5} />
          <circle cx={29.75} cy={63.5} r={7.5} />
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

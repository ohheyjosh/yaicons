import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const Eye = forwardRef(
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
        <g transform="translate(4 22)">
          <circle cx="44" cy="26" r="8" />
          <circle cx="44" cy="26" r="18" />
          <path d="M44,52 C60.2003527,52 74.8670193,43.3333333 88,26 C74.8670193,8.66666667 60.2003527,0 44,0 C27.7996473,0 13.1329807,8.66666667 0,26 C13.1329807,43.3333333 27.7996473,52 44,52 Z" />
        </g>
      </svg>
    );
  }
);

Eye.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Eye.displayName = "Eye";

export default Eye;

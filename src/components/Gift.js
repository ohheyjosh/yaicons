import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const Gift = forwardRef(
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
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="translate(8 7)"
        >
          <rect width="80" height="16" y="16" rx="1" />
          <path d="M76 33L76 80.0769231C76 80.5867244 75.5522847 81 75 81L5 81C4.44771525 81 4 80.5867244 4 80.0769231L4 33M26 16C28.6619247 16 33.3285914 16 40 16 40 11.8122335 40 9.14556681 40 8 40 4 33.7319865 0 26 0 18.2680135 0 12 3.581722 12 8 12 12.418278 19 16 26 16z" />
          <path
            d="M54,16 C56.6619247,16 61.3285914,16 68,16 C68,11.8122335 68,9.14556681 68,8 C68,4 61.7319865,0 54,0 C46.2680135,0 40,3.581722 40,8 C40,12.418278 47,16 54,16 Z"
            transform="matrix(-1 0 0 1 108 0)"
          />
        </g>
      </svg>
    );
  }
);

Gift.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Gift.displayName = "Gift";

export default Gift;

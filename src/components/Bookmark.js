import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const Bookmark = forwardRef(
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
        <g fill="none" fillRule="evenodd" stroke={color} strokeLinejoin="round">
          <path
            fill="none"
            stroke={color}
            strokeLinejoin="round"
            d="M30 16h38a2 2 0 012 2v58.23a2 2 0 01-3.122 1.656L50.122 66.537a2 2 0 00-2.244 0L31.122 77.886A2 2 0 0128 76.23V18a2 2 0 012-2z"
          />
        </g>
      </svg>
    );
  }
);

Bookmark.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Bookmark.displayName = "Bookmark";

export default Bookmark;

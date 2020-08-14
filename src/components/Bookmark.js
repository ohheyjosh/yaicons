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
        <path
          fill="none"
          stroke={color}
          strokeLinejoin="round"
          d="M68 15.5c.69 0 1.315.28 1.768.732.452.453.732 1.078.732 1.768h0v58.23c0 .69-.28 1.315-.732 1.768a2.5 2.5 0 01-3.17.302h0L49.841 66.951a1.498 1.498 0 00-1.682 0h0L31.402 78.3a2.492 2.492 0 01-1.874.385A2.5 2.5 0 0127.5 76.23h0V18c0-.69.28-1.315.732-1.768A2.492 2.492 0 0130 15.5h0z"
        />
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

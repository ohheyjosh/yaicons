import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const Clipboard = forwardRef(
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
        <g transform="translate(20 13)">
          <path d="M40,6 L52,6 C54.209139,6 56,7.790861 56,10 L56,66 C56,68.209139 54.209139,70 52,70 L4,70 C1.790861,70 0,68.209139 0,66 L0,10 C0,7.790861 1.790861,6 4,6 L16,6" />
          <rect width="24" height="12" x="16" rx="2" />
        </g>
      </svg>
    );
  }
);

Clipboard.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Clipboard.displayName = "Clipboard";

export default Clipboard;

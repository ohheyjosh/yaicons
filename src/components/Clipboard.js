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
        <g transform="translate(12 4)">
          <path d="M52.4431818,7.66666667 L66.8571429,7.66666667 C69.6974644,7.66666667 72,9.90524292 72,12.6666667 L72,82.6666667 C72,85.4280904 69.6974644,87.6666667 66.8571429,87.6666667 L5.14285714,87.6666667 C2.30253557,87.6666667 0,85.4280904 0,82.6666667 L0,12.6666667 C0,9.90524292 2.30253557,7.66666667 5.14285714,7.66666667 L20.1704545,7.66666667" />
          <rect width="32" height="16" x="20" rx="2" />
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

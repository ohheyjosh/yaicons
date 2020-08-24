import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const Inbox = forwardRef(
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
        <g transform="translate(10 4)">
          <rect width="76" height="88" rx="4" />
          <path d="M53.3787322,58.4850713 L50.3787322,70.4850713 C50.1561487,71.3754053 49.3561825,72 48.4384472,72 L27.5615528,72 C26.6438175,72 25.8438513,71.3754053 25.6212678,70.4850713 L22.6212678,58.4850713 M52.0023633,64 L53.6215806,57.5154683 C53.8439668,56.6248713 54.6440578,56 55.5620004,56 L76,56 M0,56 L20.4379996,56 C21.3019456,56 22.0614971,56.5535192 22.3332714,57.3611356 L22.3784194,57.5154683 L23.9976367,64" />
        </g>
      </svg>
    );
  }
);

Inbox.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Inbox.displayName = "Inbox";

export default Inbox;

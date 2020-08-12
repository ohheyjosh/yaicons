import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const Archive = forwardRef(
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
          fillRule="evenodd"
          stroke={color}
          transform="translate(3 9)"
        >
          <rect width={89} height={17} x={-0.5} y={-0.5} rx={1} />
          <path d="M84 17v58.846c0 .637-.497 1.154-1.111 1.154H5.11C4.497 77 4 76.483 4 75.846V17" />
          <path d="M60 17v14c0 1.105-.597 2-1.333 2H29.333C28.597 33 28 32.105 28 31V17" />
          <path strokeLinecap="round" d="M28 47h32" />
        </g>
      </svg>
    );
  }
);

Archive.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Archive.displayName = "Archive";

export default Archive;

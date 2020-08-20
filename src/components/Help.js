import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const Help = forwardRef(
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
        <g strokeLinecap="round" transform="translate(27 12)">
          <line x1="17.3" x2="17.3" y1="70.956" y2="71.456" />
          <path d="M0.566636029,17.6343936 C1.04284496,11.2214482 6.28114325,0.690716912 21.6558889,0.690716912 C32.6086944,0.690716912 41.8607537,6.69863413 41.8607537,17.7018982 C41.8607537,25.5999467 38.1871419,30.5277889 29.9555303,36.7382202 C19.4109039,44.7037734 17.3700084,49.9016343 17.3700084,57.8671875" />
        </g>
      </svg>
    );
  }
);

Help.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Help.displayName = "Help";

export default Help;

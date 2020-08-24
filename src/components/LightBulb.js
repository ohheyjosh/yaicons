import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const LightBulb = forwardRef(
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
        <g transform="translate(17 2)">
          <path d="M8.18911767,50.1218742 C13.2746405,55.5047957 16.0564649,62.6963788 16.0564649,70.1032787 L16.0347319,81.7734524 C16.0347319,86.4888916 19.9684055,90.3 24.8365983,90.3 L36.1812261,90.3 C41.0494189,90.3 44.9830925,86.4888916 44.9830925,81.7734524 L45.0048255,70.1032787 C45.0048255,62.4810619 47.5475869,55.5047957 52.4157797,50.5740396" />
          <line x1="16.5" x2="44.5" y1="74.5" y2="74.5" />
          <path d="M52.4157797,50.5740396 C57.4006593,45.2175716 60.5,37.894328 60.5,30 C60.5,13.4314575 47.0685425,0 30.5,0 C13.9314575,0 0.5,13.4314575 0.5,30 C0.5,37.7128568 3.4063508,44.8071067 8.18911767,50.1218742" />
        </g>
      </svg>
    );
  }
);

LightBulb.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

LightBulb.displayName = "LightBulb";

export default LightBulb;

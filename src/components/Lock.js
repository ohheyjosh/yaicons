import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const Lock = forwardRef(
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
        <g transform="translate(1 1)">
          <path strokeLinejoin="round" d="M4 38.5714286L64 38.5714286C66.209139 38.5714286 68 40.3622896 68 42.5714286L68 74C68 82.836556 60.836556 90 52 90L16 90C7.163444 90 1.082166e-15 82.836556 0 74L0 42.5714286C-2.705415e-16 40.3622896 1.790861 38.5714286 4 38.5714286zM59.5 25.7142857C59.5 11.5126779 48.0832611 0 34 0 19.9167389 0 8.5 11.5126779 8.5 25.7142857L8.66139241 38.5714286C8.66139241 38.5714286 59.5 38.5714286 59.5 38.5714286L59.5 25.7142857z"/>
          <path strokeLinejoin="round" d="M52.59375,25.1785714 C52.59375,14.8232324 44.2690446,6.42857143 34,6.42857143 C23.7309554,6.42857143 15.40625,14.8232324 15.40625,25.1785714 L15.523932,38.5714286 C15.523932,38.5714286 52.59375,38.5714286 52.59375,38.5714286 L52.59375,25.1785714 Z"/>
          <path d="M34,51.4285714 C38.6944204,51.4285714 42.5,54.9709338 42.5,59.3406593 C42.5,62.2694595 40.79041,64.8265812 38.2494519,66.1945458 L38.25,73.1428571 C38.25,75.3519961 36.459139,77.1428571 34.25,77.1428571 L33.75,77.1428571 C31.540861,77.1428571 29.75,75.3519961 29.75,73.1428571 L29.7495546,66.1940109 C27.2091444,64.8259147 25.5,62.2690778 25.5,59.3406593 C25.5,54.9709338 29.3055796,51.4285714 34,51.4285714 Z"/>
        </g>
      </svg>
    );
  }
);

Lock.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Lock.displayName = "Lock";

export default Lock;

import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const Battery = forwardRef(
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
        <g fill="none" transform="translate(8 30)">
          <path
            fill="none"
            d="M68.4,-0.5 C69.5292899,-0.5 70.5506911,-0.0623597749 71.290412,0.642136356 C72.0391785,1.35524728 72.5,2.34104834 72.5,3.42857143 L72.5,3.42857143 L72.5,32.5714286 C72.5,33.6589517 72.0391785,34.6447527 71.290412,35.3578636 C70.5506911,36.0623598 69.5292899,36.5 68.4,36.5 L68.4,36.5 L3.6,36.5 C2.47071014,36.5 1.44930894,36.0623598 0.709588002,35.3578636 C-0.0391784663,34.6447527 -0.5,33.6589517 -0.5,32.5714286 L-0.5,32.5714286 L-0.5,3.42857143 C-0.5,2.34104834 -0.0391784663,1.35524728 0.709588002,0.642136356 C1.44930894,-0.0623597749 2.47071014,-0.5 3.6,-0.5 L3.6,-0.5 L68.4,-0.5 Z"
          />
          <path
            fill="none"
            d="M72,10 L78,10 C79.1045695,10 80,10.5969537 80,11.3333333 L80,24.6666667 C80,25.4030463 79.1045695,26 78,26 L72,26"
          />
        </g>
      </svg>
    );
  }
);

Battery.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Battery.displayName = "Battery";

export default Battery;

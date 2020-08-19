import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const Copy = forwardRef(
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
        <g strokeLinejoin="round" transform="translate(18 12)">
          <path d="M19,0 L42.8571429,0 L42.8571429,0 L60,16.9411765 L60,55.2941176 C60,57.5032566 58.209139,59.2941176 56,59.2941176 L19,59.2941176 C16.790861,59.2941176 15,57.5032566 15,55.2941176 L15,4 C15,1.790861 16.790861,4.05812251e-16 19,0 Z" />
          <path d="M42.8571429 0L60 16.9411765 44.8571429 16.9411765C43.7525734 16.9411765 42.8571429 16.045746 42.8571429 14.9411765L42.8571429 0 42.8571429 0zM45 59.2941176L45 68.0672269C45 70.2392375 43.0812204 72 40.7142857 72L4.28571429 72C1.91877964 72 0 70.2392375 0 68.0672269L0 20.8739496C0 18.701939 1.91877964 16.9411765 4.28571429 16.9411765L15 16.9411765" />
        </g>
      </svg>
    );
  }
);

Copy.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Copy.displayName = "Copy";

export default Copy;

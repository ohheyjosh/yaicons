import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const Cloud = forwardRef(
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
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="translate(3 12)"
        >
          <path d="M24.2758621 21.6296968C23.8966433 21.6099755 23.5150261 21.6 23.1312257 21.6 10.3562025 21.6 0 32.6521707 0 46.2857143 0 59.9192578 10.3562025 70.9714286 23.1312257 70.9714286M67.7502682 37.0285714C70.4536706 33.2764419 72.8275862 28.2214357 72.8275862 23.3250226 72.8275862 10.4429684 61.8763286 0 48.3672677 0 35.8632339 0 25.7411057 10.0532492 24.2758621 21.6M71.8147636 70.9714286C80.7528892 70.9714286 87.9986716 63.1428076 87.9986716 53.4857143 87.9986716 43.8286209 80.7528892 36.4968079 71.8147636 36.4968079 70.4181678 36.4968079 69.0430431 36.6691965 67.7502682 37.0285714" />
          <line x1="23.264" x2="71.816" y1="70.971" y2="70.971" />
        </g>
      </svg>
    );
  }
);

Cloud.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Cloud.displayName = "Cloud";

export default Cloud;

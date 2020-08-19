import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const Bell = forwardRef(
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
        <g fill="none" stroke={color} transform="translate(11 9)">
          <path
            fill="none"
            d="M68.25 56C70.4318657 56 72.25 57.7687516 72.25 59.9506173 72.25 62.132483 70.4812484 63.9012346 68.2993827 63.9012346L4.20061728 63.9012346C2.01875161 63.9012346.25 62.132483.25 59.9506173.25 57.7687516 2.06813432 56 4.25 56M60.25 32C60.25 18.745166 49.504834 8 36.25 8 22.995166 8 12.25 18.745166 12.25 32M4.25 56C8.668278 56 12.25 45.254834 12.25 32M68.25 56C63.831722 56 60.25 45.254834 60.25 32"
          />
          <path
            fill="none"
            strokeLinejoin="round"
            d="M26.9746673,64 C26.5073157,65.178044 26.25,66.4654633 26.25,67.8140991 C26.25,73.4396168 30.7271525,78 36.25,78 C41.7728475,78 46.25,73.4396168 46.25,67.8140991 C46.25,66.4880903 46.0012462,65.2212612 45.5486784,64.0593869"
          />
          <path
            fill="none"
            d="M36.25,0 C37.3545695,-2.02906125e-16 38.25,0.8954305 38.25,2 L38.25,8 L38.25,8 L34.25,8 L34.25,2 C34.25,0.8954305 35.1454305,2.02906125e-16 36.25,0 Z"
          />
        </g>
      </svg>
    );
  }
);

Bell.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Bell.displayName = "Bell";

export default Bell;

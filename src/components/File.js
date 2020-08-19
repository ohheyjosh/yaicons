import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const File = forwardRef(
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
        <g strokeLinejoin="round" transform="translate(20 12)">
          <path d="M4,1.15107923e-13 L34.6666667,1.15107923e-13 L34.6666667,1.15107923e-13 L56,20.3294118 L56,67.1529412 C56,69.3620802 54.209139,71.1529412 52,71.1529412 L4,71.1529412 C1.790861,71.1529412 2.705415e-16,69.3620802 0,67.1529412 L0,4 C-2.705415e-16,1.790861 1.790861,1.15513735e-13 4,1.15107923e-13 Z" />
          <path d="M34.6666667,3.02691205e-13 L56,20.3294118 L36.6666667,20.3294118 C35.5620972,20.3294118 34.6666667,19.4339813 34.6666667,18.3294118 L34.6666667,3.02691205e-13 L34.6666667,3.02691205e-13 Z" />
        </g>
      </svg>
    );
  }
);

File.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

File.displayName = "File";

export default File;

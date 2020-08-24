import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const Hot = forwardRef(
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
        <path
          d="M22.0194426,0 L29.8723257,6.5836229 C39.0892266,15.1708524 44.8642306,24.3953104 44.7379151,34.7123311 C46.1936173,33.6845193 47.6187735,31.4644082 49.0133835,28.0519976 L50.4807654,24.1508367 C52.0956734,25.3473037 53.2709779,26.3101723 54.0066789,27.0394425 L54.4785451,27.5172246 C54.5569875,27.5983388 54.6353183,27.6801896 54.7135217,27.7627694 L55.1810848,28.2669322 C59.9165032,33.4802405 64.059207,41.3475982 63.9993595,50.0953943 L63.993012,50.5263158 L63.9808919,50.5268026 C63.5098831,66.8801675 49.370288,80 31.996506,80 C14.6167641,80 0.473428338,66.8711647 0.0116401954,50.5099718 L0,50.5102119 L0.00229288447,50.1253612 L0,49.6842105 L0.0105459845,49.6848007 C0.129262539,45.0386642 1.24869371,40.4564434 3.28861805,36.2905088 C5.44925599,31.9102605 8.56311655,28.0775432 12.3918941,25.0983302 C13.4510303,24.2609298 14.8914556,22.8437906 16.71317,20.8469127 C19.775841,17.4645994 21.4313183,10.2033727 22.0194426,0 Z"
          transform="translate(16 8)"
        />
      </svg>
    );
  }
);

Hot.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Hot.displayName = "Hot";

export default Hot;

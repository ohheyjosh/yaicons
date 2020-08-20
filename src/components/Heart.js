import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const Heart = forwardRef(
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
          strokeLinecap="round"
          d="M43,7.4036188 C46.8693516,2.86527628 52.548428,0 58.878136,0 C70.5374807,0 79.9892471,9.72181686 79.9892471,21.7142857 C79.9892471,27.1587121 78.0006802,32.1887517 74.7824099,36 M74.8878173,35.8850511 C67.514021,43.4826833 56.4087323,55.0875638 41.6611398,70.2828282 C40.7948108,71.1754552 39.3902139,71.1754552 38.5238849,70.2828282 C23.9828794,55.3004218 12.47734,43.4912032 5.20683721,36 C1.98856696,32.1887517 0,27.1587121 0,21.7142857 C0,9.72181686 9.45176639,0 21.1111111,0 C27.4408191,0 33.1198955,2.86527628 36.9892471,7.4036188 M36.8435705,7.23728499 C37.6580111,8.18795191 38.6712652,8.57142857 40,8.57142857 C41.2187412,8.57142857 42.3515628,8.05440192 43.1544806,7.23728499"
          transform="translate(8 12)"
        />
      </svg>
    );
  }
);

Heart.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Heart.displayName = "Heart";

export default Heart;

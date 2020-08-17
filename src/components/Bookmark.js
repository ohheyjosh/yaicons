import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const Bookmark = forwardRef(
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
          fill="none"
          StrokeLinejoin="round"
          d="M40,-0.5 C40.6903559,-0.5 41.3153559,-0.220177969 41.767767,0.232233047 C42.220178,0.684644063 42.5,1.30964406 42.5,2 L42.5,2 L42.5,60.2299979 C42.5,60.9203539 42.220178,61.5453539 41.767767,61.9977649 C41.3153559,62.4501759 40.6903559,62.7299979 40,62.7299979 C39.5002274,62.7299979 39.0119257,62.5802068 38.5981218,62.2999587 L38.5981218,62.2999587 L21.8411269,50.951306 C21.587135,50.7792904 21.2935675,50.6932825 21,50.6932825 C20.7064325,50.6932825 20.412865,50.7792904 20.1588731,50.951306 L20.1588731,50.951306 L3.40187819,62.2999587 C2.83027431,62.6870767 2.15587356,62.8058579 1.52759428,62.6849588 C0.899315008,62.5640596 0.317157212,62.20348 -0.0699607603,61.6318761 C-0.350208865,61.2180723 -0.5,60.7297705 -0.5,60.2299979 L-0.5,60.2299979 L-0.5,2 C-0.5,1.30964406 -0.220177969,0.684644063 0.232233047,0.232233047 C0.684644063,-0.220177969 1.30964406,-0.5 2,-0.5 L2,-0.5 Z"
          transform="translate(27 17)"
        />
      </svg>
    );
  }
);

Bookmark.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Bookmark.displayName = "Bookmark";

export default Bookmark;

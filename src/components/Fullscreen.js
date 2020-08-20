import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const Fullscreen = forwardRef(
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
          d="M56,0 L68,0 C74.627417,0 80,5.372583 80,12 C80,17.4170802 80,21.4170802 80,24 M80,56 C80,58.6763172 80,62.6763172 80,68 C80,74.627417 74.627417,80 68,80 L56,80 M24,80 L12,80 C5.372583,80 0,74.637121 0,68.0216744 C0,62.5870949 0,58.5798701 0,56 M0,24 C0,21.3269526 0,17.3269526 0,12 C0,5.372583 5.372583,-2.27373675e-13 12,-2.27373675e-13 L24,-2.27373675e-13"
          transform="translate(8 8)"
        />
      </svg>
    );
  }
);

Fullscreen.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Fullscreen.displayName = "Fullscreen";

export default Fullscreen;

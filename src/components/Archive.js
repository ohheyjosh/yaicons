import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const Archive = forwardRef(
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
        <g fill="none" stroke={color} transform="translate(4 9)">
          <rect width="89" height="17" x="-.5" y="-.5" rx="1" />
          <path d="M84,17 L84,75.8461538 C84,76.4834055 83.5025386,77 82.8888889,77 L5.11111111,77 C4.49746139,77 4,76.4834055 4,75.8461538 L4,17" />
          <path d="M60,17 L60,31 C60,32.1045695 59.4030463,33 58.6666667,33 L29.3333333,33 C28.5969537,33 28,32.1045695 28,31 L28,17" />
          <line
            x1="44"
            x2="44"
            y1="31"
            y2="63"
            strokeLinecap="round"
            transform="rotate(-90 44 47)"
          />
        </g>
      </svg>
    );
  }
);

Archive.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Archive.displayName = "Archive";

export default Archive;

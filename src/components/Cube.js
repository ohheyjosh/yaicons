import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const Cube = forwardRef(
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
          fill="none"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLineJoin="round"
          transform="translate(12 8)"
        >
          <line x1="1.473" x2="1.473" y1="58.177" y2="21.281" />
          <line
            x1="18.961"
            x2="19.089"
            y1="51.463"
            y2="11.527"
            transform="rotate(120 19.025 31.495)"
          />
          <line
            x1="53.886"
            x2="54.015"
            y1="51.462"
            y2="11.527"
            transform="scale(1 -1) rotate(-60 -.6 0)"
          />
          <line
            x1="18.969"
            x2="19.194"
            y1="31.32"
            y2="-9.431"
            transform="scale(-1 1) rotate(-60 0 43.994)"
          />
          <line
            x1="53.872"
            x2="54.321"
            y1="31.207"
            y2="-9.276"
            transform="rotate(-60 54.096 10.966)"
          />
          <line
            x1="18.912"
            x2="19.011"
            y1="88.748"
            y2="48.318"
            transform="rotate(120 18.962 68.533)"
          />
          <line
            x1="53.919"
            x2="54.13"
            y1="88.741"
            y2="48.246"
            transform="scale(1 -1) rotate(-60 -64.61 0)"
          />
          <line x1="36.493" x2="36.493" y1="78.708" y2="41.79" />
          <line x1="71.514" x2="71.514" y1="58.198" y2="21.281" />
        </g>
      </svg>
    );
  }
);

Cube.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Cube.displayName = "Cube";

export default Cube;

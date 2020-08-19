import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const Camera = forwardRef(
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
          stroke={color}
          strokeLinejoin="round"
          transform="translate(4 12)"
        >
          <path d="M62,12 L80,12 C84.418278,12 88,15.581722 88,20 L88,64 C88,68.418278 84.418278,72 80,72 L8,72 C3.581722,72 0,68.418278 0,64 L0,20 C0,15.581722 3.581722,12 8,12 L26,12" />
          <circle cx="44" cy="42" r="18" />
          <path
            strokeLinecap="round"
            d="M26,12 L29.5441518,1.36754447 C29.8163799,0.55086019 30.5806576,0 31.4415184,0 L56.5584816,0 C57.4193424,0 58.1836201,0.55086019 58.4558482,1.36754447 L62,12"
          />
        </g>
      </svg>
    );
  }
);

Camera.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Camera.displayName = "Bell";

export default Camera;

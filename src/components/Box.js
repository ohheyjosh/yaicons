import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const Box = forwardRef(
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
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12.973 65.677V28.781M13.264 28.956l34.522 20.078M82.71 28.955l-34.52 20.08M12.992 28.73L48.17 8.158M83.013 28.78L48.178 8.15M12.98 65.882l34.964 20.3M83.006 65.779l-34.964 20.43M47.993 86.208V49.29M83.014 65.698V28.781" />
        </g>
      </svg>
    );
  }
);

Box.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Box.displayName = "Box";

export default Box;

import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const Basket = forwardRef(
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
        <g fill="none" fillRule="evenodd" transform="translate(4 10)">
          <rect width="89" height="9" x="-.5" y="26.5" rx="1" />
          <path d="M82,36 L77.8821099,75.0115906 C77.8227135,75.5742936 77.3708679,76 76.8330104,76 L11.1669896,76 C10.6291321,76 10.1772865,75.5742936 10.1178901,75.0115906 L6,36 L6,36" />
          <line x1="20" x2="20" y1="49" y2="65" strokeLinecap="round" />
          <line x1="36" x2="36" y1="49" y2="65" strokeLinecap="round" />
          <line x1="52" x2="52" y1="49" y2="65" strokeLinecap="round" />
          <line x1="68" x2="68" y1="49" y2="65" strokeLinecap="round" />
          <path
            strokeLineJoin="round"
            d="M56,2 L67.381966,2 C67.7607381,2 68.1070012,2.21400238 68.2763932,2.5527864 L80,26 M8,26 L19.7236068,2.5527864 C19.8929988,2.21400238 20.2392619,2 20.618034,2 L32,2"
          />
          <rect
            width="25"
            height="5"
            x="31.5"
            y="-.5"
            strokeLineJoin="round"
            rx="1"
          />
        </g>
      </svg>
    );
  }
);

Basket.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Basket.displayName = "Basket";

export default Basket;

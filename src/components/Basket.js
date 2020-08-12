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
        <g
          fill="none"
          fillRule="evenodd"
          stroke={color}
          transform="translate(4 10)"
        >
          <rect width={89} height={9} x={-0.5} y={26.5} rx={1} />
          <path d="M82 36l-4.118 39.012c-.06.562-.511.988-1.049.988H11.167c-.538 0-.99-.426-1.05-.988L6 36h0" />
          <path
            strokeLinecap="round"
            d="M20 49v16M36 49v16M52 49v16M68 49v16"
          />
          <path
            strokeLinejoin="round"
            d="M56 2h11.382a1 1 0 01.894.553L80 26M8 26L19.724 2.553A1 1 0 0120.618 2H32"
          />
          <rect
            width={25}
            height={5}
            x={31.5}
            y={-0.5}
            strokeLinejoin="round"
            rx={1}
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

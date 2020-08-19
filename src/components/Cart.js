import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const Cart = forwardRef(
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
        <g fill="none" strokeLinejoin="round" transform="translate(10 12)">
          <path d="M14.7331526,10.1828571 L73.7422708,10.1828571 C74.8615679,10.1828571 75.7689375,11.1038714 75.7689375,12.24 C75.7689375,12.4081957 75.7486154,12.5757566 75.7084263,12.7389304 L68.615093,41.5389304 C68.3895417,42.4547025 67.5789092,43.0971429 66.6489375,43.0971429 L19.7206122,43.0971429 L19.7206122,43.0971429" />
          <path
            strokeLinecap="round"
            d="M70.2579777,55.44 L25.0954092,55.44 C23.0948011,55.44 21.3934161,53.9583999 21.0892092,51.951321 L13.2579777,1.95428571"
          />
          <circle cx="28.334" cy="65.9" r="6" />
          <circle cx="64.334" cy="65.9" r="6" />
          <path
            strokeLinecap="round"
            d="M5.76013311e-14,2.00982088e-14 L10.9753763,2.00982088e-14 C12.1925407,2.00982088e-14 13.0485165,0.6149906 13.2579777,1.95428571 L14.5723522,10.1828571"
          />
        </g>
      </svg>
    );
  }
);

Cart.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Cart.displayName = "Cart";

export default Cart;

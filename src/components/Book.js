import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const Book = forwardRef(
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
        <g fill="none" strokeLinejoin="round" transform="translate(8 11)">
          <path
            strokeLinecap="round"
            d="M47.2727273,72.4267631 L47.2727273,74.2133816 C47.2727273,75.2001037 46.4586995,76 45.4545455,76 L34.5454545,76 C33.5413005,76 32.7272727,75.2001037 32.7272727,74.2133816 L32.7272727,72.4267631 L32.7272727,72.4267631"
          />
          <path d="M32.7157828,72.4267631 L1.81818182,72.4267631 C0.814027728,72.4267631 0,71.7068564 0,70.8188065 L0,9.7164557 C0,8.82840579 0.814027728,8.1084991 1.81818182,8.1084991 C2.60928685,8.1084991 4.48249627,8.1084991 4.87804878,8.1084991 M75.1219512,8.1084991 C75.5226902,8.1084991 77.3747889,8.1084991 78.1818182,8.1084991 C79.1859723,8.1084991 80,8.82840579 80,9.7164557 L80,70.8188065 C80,71.7068564 79.1859723,72.4267631 78.1818182,72.4267631 L47.2910318,72.4267631" />
          <path
            strokeLinecap="round"
            d="M75.1219512,7.69620253 L75.1219512,67.3 M4.9,7.69620253 L4.9,67.3"
          />
          <path d="M40.2439024 8C40.2439024 3.581722 32.3269864 0 22.5609756 0 12.7949648 0 4.87804878 3.581722 4.87804878 8M75.1219512 8C75.1219512 3.581722 67.3142341 0 57.6829268 0 48.0516196 0 40.2439024 3.581722 40.2439024 8" />
          <path
            strokeLinecap="round"
            d="M75.1219512,67.3 C75.1219512,62.881722 67.3322709,59.3 57.7232133,59.3 C48.9279184,59.3 41.4184442,63.4036051 40.25,67.3"
            transform="matrix(-1 0 0 1 115.372 0)"
          />
          <path
            strokeLinecap="round"
            d="M40.1219512,67.3 C40.1219512,62.881722 32.3322709,59.3 22.7232133,59.3 C13.9279184,59.3 6.0684442,63.4036051 4.9,67.3"
          />
          <line
            x1="40.244"
            x2="40.244"
            y1="67.342"
            y2="7.696"
            strokeLinecap="round"
          />
        </g>
      </svg>
    );
  }
);

Book.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Book.displayName = "Book";

export default Book;

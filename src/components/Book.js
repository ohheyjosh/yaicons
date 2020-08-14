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
        <g fill="none" fillRule="evenodd" stroke={color} strokeLinejoin="round">
          <path
            strokeLinecap="round"
            d="M55.455 83.286v1.857A1.86 1.86 0 0153.59 87H42.409a1.86 1.86 0 01-1.864-1.857v-1.857h0"
          />
          <path d="M40.534 83.286H8.864c-1.03 0-1.864-.749-1.864-1.672V18.1c0-.923.834-1.671 1.864-1.671h1.824m74.591 0h1.857c1.03 0 1.864.748 1.864 1.671v63.514c0 .923-.834 1.672-1.864 1.672H55.473" />
          <path d="M85.273 16.429v61.285a1.86 1.86 0 01-1.864 1.857H12.591a1.86 1.86 0 01-1.864-1.857V16.43h0m37.273 0C48 12.326 39.656 9 29.364 9c-10.293 0-18.637 3.326-18.637 7.429m74.546 0C85.273 12.326 76.929 9 66.636 9 56.344 9 48 12.326 48 16.429" />
          <path d="M48 79.571c0-4.102-8.383-7.428-18.725-7.428-9.465 0-17.29 2.786-18.548 6.404M48 79.571c0-4.102 8.384-7.428 18.725-7.428 9.465 0 17.29 2.786 18.548 6.404" />
          <path strokeLinecap="round" d="M48 79.107V15.964" />
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

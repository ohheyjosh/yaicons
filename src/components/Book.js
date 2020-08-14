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
            d="M56 86v2a2 2 0 01-2 2H42a2 2 0 01-2-2v-2h0"
          />
          <path d="M39.987 86H6c-1.105 0-2-.806-2-1.8V15.8c0-.994.895-1.8 2-1.8h1.958m80.05 0H90c1.105 0 2 .806 2 1.8v68.4c0 .994-.895 1.8-2 1.8H56.02" />
          <path d="M88 14v66a2 2 0 01-2 2H10a2 2 0 01-2-2V14h0m40 0c0-4.418-8.954-8-20-8S8 9.582 8 14m80 0c0-4.418-8.954-8-20-8s-20 3.582-20 8" />
          <path d="M48 82c0-4.418-8.997-8-20.095-8C17.747 74 9.35 77 8 80.897M48 82c0-4.418 8.997-8 20.095-8C78.253 74 86.65 77 88 80.897" />
          <path strokeLinecap="round" d="M48 81.5v-68" />
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

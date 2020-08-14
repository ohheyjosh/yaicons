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
            d="M55.273 82.427v1.786c0 .987-.814 1.787-1.818 1.787h-10.91c-1.004 0-1.818-.8-1.818-1.787v-1.786h0"
          />
          <path d="M40.716 82.427H9.818c-1.004 0-1.818-.72-1.818-1.608V19.716c0-.888.814-1.608 1.818-1.608h3.06m70.244 0h3.06c1.004 0 1.818.72 1.818 1.608V80.82c0 .888-.814 1.608-1.818 1.608H55.29" />
          <path d="M83.122 17.696v57.891c0 .97-.786 1.755-1.756 1.755H14.634c-.97 0-1.756-.786-1.756-1.755v-57.89" />
          <path d="M48.244 18c0-4.418-7.917-8-17.683-8s-17.683 3.582-17.683 8m70.244 0c0-4.418-7.808-8-17.44-8-9.63 0-17.438 3.582-17.438 8M48.55 77.3c0-4.418 7.567-8 16.902-8 8.544 0 15.963 3.472 17.098 7.368M47.9 77.3c0-4.418-7.567-8-16.902-8-8.544 0-15.963 3.472-17.098 7.368" />
          <path strokeLinecap="round" d="M48.244 77.342V17.696" />
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

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
            d="M55.455 84.286v1.857A1.86 1.86 0 0153.59 88H42.409a1.86 1.86 0 01-1.864-1.857v-1.857h0"
          />
          <path d="M40.534 84.286H8.864c-1.03 0-1.864-.749-1.864-1.672V19.1c0-.923.834-1.671 1.864-1.671H12m72 0h3.136c1.03 0 1.864.748 1.864 1.671v63.514c0 .923-.834 1.672-1.864 1.672H55.473" />
          <path d="M84 17v60.176A1.812 1.812 0 0182.2 79H13.8c-.994 0-1.8-.816-1.8-1.824V17m36.25 0c0-4.418-8.115-8-18.125-8S12 12.582 12 17m72 0c0-4.418-8.003-8-17.875-8S48.25 12.582 48.25 17" />
          <path d="M48 79c0-4.418-7.79-8-17.399-8-8.795 0-16.433 3.472-17.601 7.368M48.5 79c0-4.418 7.79-8 17.399-8 8.795 0 16.433 3.472 17.601 7.368" />
          <path strokeLinecap="round" d="M48.25 79V17" />
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

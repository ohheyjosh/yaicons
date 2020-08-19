import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const Conversation = forwardRef(
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
        <g strokeLinejoin="round" transform="translate(4 12)">
          <path d="M9.77777778,40.5 L4.88888889,40.5 C2.18883011,40.5 0,38.4852814 0,36 L0,4.5 C0,2.01471863 2.18883011,0 4.88888889,0 L53.7777778,0 C56.4778366,0 58.6666667,2.01471863 58.6666667,4.5 L58.6666667,36 C58.6666667,38.4852814 56.4778366,40.5 53.7777778,40.5 L24.4444444,40.5" />
          <polyline
            strokeLinecap="round"
            points="9.778 40.5 9.778 54 24.444 40.5"
          />
          <path
            d="M39.1111111,58.5 L34.2222222,58.5 C31.5221634,58.5 29.3333333,56.4852814 29.3333333,54 L29.3333333,22.5 C29.3333333,20.0147186 31.5221634,18 34.2222222,18 C40.7216822,18 55.3680478,18 58.6177778,18 M88,40.5 C88,42.5005885 88,49.998823 88,54 C88,56.4852814 85.8111699,58.5 83.1111111,58.5 L53.7777778,58.5"
            transform="matrix(-1 0 0 1 117.333 0)"
          />
          <polyline
            strokeLinecap="round"
            points="63.556 58.5 63.556 72 78.222 58.5"
            transform="matrix(-1 0 0 1 141.778 0)"
          />
        </g>
      </svg>
    );
  }
);

Conversation.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Conversation.displayName = "Conversation";

export default Conversation;

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
        <g strokeLinejoin="round" transform="translate(12 16)">
          <path d="M8,36 L4,36 C1.790861,36 0,34.209139 0,32 L0,4 C0,1.790861 1.790861,0 4,0 L44,0 C46.209139,0 48,1.790861 48,4 L48,32 C48,34.209139 46.209139,36 44,36 L20,36" />
          <polyline strokeLinecap="round" points="8 36 8 48 20 36" />
          <path
            d="M32,52 L28,52 C25.790861,52 24,50.209139 24,48 L24,20 C24,17.790861 25.790861,16 28,16 C33.31774,16 45.30113,16 47.96,16 M72,36 C72,37.7783009 72,44.4433982 72,48 C72,50.209139 70.209139,52 68,52 L44,52"
            transform="matrix(-1 0 0 1 96 0)"
          />
          <polyline
            strokeLinecap="round"
            points="52 52 52 64 64 52"
            transform="matrix(-1 0 0 1 116 0)"
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

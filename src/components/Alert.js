import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const Alert = forwardRef(
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
          transform="translate(4 12)"
        >
          <path d="M42.7674992,-0.388867349 C43.8701002,-0.641409288 45.0682428,-0.469738211 46.1005147,0.186397868 C46.6539302,0.538161638 47.1229857,1.00960264 47.4735972,1.56673479 L47.4735972,1.56673479 L87.8127905,65.6669237 C88.4650608,66.7034008 88.63938,67.9085018 88.3936179,69.019062 C88.1476476,70.1305636 87.481029,71.1470397 86.4529582,71.8056621 C85.7401224,72.2623326 84.912483,72.5032065 84.0680999,72.4999963 L84.0680999,72.4999963 L3.89776595,72.1921118 C2.67822668,72.1874287 1.57581368,71.6847932 0.779578598,70.8752936 C-0.0150575458,70.0674195 -0.504613123,68.953789 -0.499996369,67.7255586 C-0.496821524,66.8925479 -0.261724131,66.0772176 0.178343145,65.3724194 L0.178343145,65.3724194 L40.0094839,1.58008634 C40.6592731,0.539403876 41.6658651,-0.136546864 42.7674992,-0.388867349 Z" />
          <line x1="44" x2="44" y1="18" y2="42" strokeLinecap="round" />
          <line x1="44" x2="44" y1="54" y2="54.5" strokeLinecap="round" />
        </g>
      </svg>
    );
  }
);

Alert.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Alert.displayName = "Alert";

export default Alert;

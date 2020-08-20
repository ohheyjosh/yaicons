import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const Home = forwardRef(
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
        <path
          strokeLinejoin="round"
          d="M41.2355859,0.986864089 L78.6962536,38.5257952 C79.5302923,39.191943 79.6532235,40.391987 78.9708282,41.2061676 C78.6002351,41.6483303 78.045903,41.9047619 77.4606677,41.9047619 L71.2195122,41.9047619 L71.2195122,76.1904762 C71.2195122,78.2944181 69.4723307,80 67.3170732,80 L54.7317073,80 C52.5225683,80 50.7317073,78.209139 50.7317073,76 L50.7317073,55.2380952 L50.7317073,55.2380952 C50.7317073,54.2339411 49.9364486,53.4155706 48.9268293,53.3428571 L48.7804878,53.3333333 L33.1707317,53.3333333 C32.1420861,53.3333333 31.2993514,54.1103601 31.2248644,55.095941 L31.2195122,55.2380952 L31.2195122,76 C31.2195122,78.209139 29.4286512,80 27.2195122,80 L12.6829268,80 L12.6829268,80 C10.5276693,80 8.7804878,78.2944181 8.7804878,76.1904762 L8.7804878,41.9047619 L2.53933234,41.9047619 C1.46170356,41.9047619 0.588112825,41.051971 0.588112825,40 C0.588112825,39.4286988 0.850799218,38.885579 1.3037464,38.5238095 L38.7644141,0.986864089 C39.4831768,0.412787388 40.5168232,0.412787388 41.2355859,0.986864089 Z"
          transform="translate(8 8)"
        />
      </svg>
    );
  }
);

Home.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Home.displayName = "Home";

export default Home;

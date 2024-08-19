import React from "react";

const CallColoredIcon = ({ color = '#eab308', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    version="1.1"
    width={50}
    height={50}
    viewBox="0 0 256 256"
    {...props}
  >
    <g
      style={{
        stroke: 'none',
        strokeWidth: 0,
        strokeDasharray: 'none',
        strokeLinecap: 'butt',
        strokeLinejoin: 'miter',
        strokeMiterlimit: 10,
        fill: 'none',
        fillRule: 'nonzero',
        opacity: 1,
      }}
      transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
    >
      <path
        d="M 45 0 C 20.147 0 0 20.147 0 45 c 0 24.853 20.147 45 45 45 s 45 -20.147 45 -45 C 90 20.147 69.853 0 45 0 z M 67.263 70.889 l -5.959 3.006 c -2.785 1.405 -6.068 1.482 -8.894 0.164 c -16.58 -7.733 -28.736 -19.889 -36.469 -36.469 c -1.318 -2.827 -1.241 -6.109 0.164 -8.894 l 3.006 -5.959 c 1.43 -2.834 5.342 -3.174 7.239 -0.629 l 6.706 8.995 c 1.011 1.357 1.127 3.182 0.294 4.655 l -1.477 2.613 c -0.708 1.253 -0.755 2.788 -0.079 4.059 c 3.654 6.864 8.913 12.123 15.777 15.777 c 1.271 0.676 2.806 0.63 4.059 -0.079 l 2.613 -1.477 c 1.473 -0.833 3.298 -0.717 4.655 0.294 l 8.995 6.706 C 70.438 65.547 70.098 69.459 67.263 70.889 z M 39.581 28.623 c 0 -1.505 1.22 -2.724 2.724 -2.724 c 12.019 0 21.796 9.778 21.796 21.796 c 0 1.505 -1.22 2.725 -2.725 2.725 s -2.724 -1.22 -2.724 -2.725 c 0 -9.014 -7.333 -16.347 -16.347 -16.347 C 40.801 31.347 39.581 30.127 39.581 28.623 z M 72.275 50.419 c -1.505 0 -2.724 -1.22 -2.724 -2.725 c 0 -15.023 -12.222 -27.245 -27.245 -27.245 c -1.505 0 -2.724 -1.22 -2.724 -2.725 S 40.801 15 42.306 15 C 60.333 15 75 29.667 75 47.694 C 75 49.199 73.78 50.419 72.275 50.419 z"
        style={{
          stroke: 'none',
          strokeWidth: 1,
          strokeDasharray: 'none',
          strokeLinecap: 'round',
          strokeLinejoin: 'miter',
          strokeMiterlimit: 10,
          fill: color,
          fillRule: 'nonzero',
          opacity: 1,
        }}
      />
    </g>
  </svg>
);

export default CallColoredIcon;
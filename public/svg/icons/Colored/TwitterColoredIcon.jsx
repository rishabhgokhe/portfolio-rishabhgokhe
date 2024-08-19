import React from "react";

const TwitterColoredIcon = ({ color = '#ffffff', width = 50, height = 50, ...props }) => (
  <svg
    clipRule="evenodd"
    fillRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit="2"
    viewBox="0 0 560 400"
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    {...props}
  >
    <path
      d="m178.57 127.15 111.7-127.15h-26.46l-97.03 110.38-77.44-110.38h-89.34l117.13 166.93-117.13 133.32h26.46l102.4-116.59 81.8 116.59h89.34m-263.99-280.71h40.65l187.13 262.13h-40.66"
      fillRule="nonzero"
      fill={color}
      transform="matrix(.9 0 0 .9 145 64.8875)"
    />
  </svg>
);

export default TwitterColoredIcon;
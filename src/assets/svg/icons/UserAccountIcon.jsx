import React from "react"; 

const UserAccountIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={28} height={28} color={"#4a4a4a"} fill={"none"} {...props}>
    <path d="M14 9H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M14 12.5H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <rect x="2" y="3" width="20" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M5 16C6.20831 13.4189 10.7122 13.2491 12 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10.5 9C10.5 10.1046 9.60457 11 8.5 11C7.39543 11 6.5 10.1046 6.5 9C6.5 7.89543 7.39543 7 8.5 7C9.60457 7 10.5 7.89543 10.5 9Z" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export default UserAccountIcon;
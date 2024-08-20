import React from 'react'

export const Loader = () => {
  return (
    <svg
    className="motion-safe:animate-spin h-5 w-5 mr-3 text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="#374151"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="#000000"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
    ></path>
  </svg>
  )
}

export default Loader;
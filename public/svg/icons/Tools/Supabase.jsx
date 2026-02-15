import React from "react";

const SupabaseLogo = (props) => {
  return (
    <svg
      width={50}
      height={50}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient
          id="supabaseGradient"
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >
          <stop offset="0%" stopColor="#249361" />
          <stop offset="100%" stopColor="#3ECF8E" />
        </linearGradient>
      </defs>

      {/* Right Shape */}
      <path
        d="M37.41219 62.9367c-1.634985 2.05896-4.950068 0.93085-4.989463-1.69817L31.846665 22.786035h25.855406c4.683108 0 7.294967 5.409033 4.382927 9.07673z"
        fill="url(#supabaseGradient)"
      />

      {/* Left Shape */}
      <path
        d="M26.89694 1.06341c1.634986-2.059185 4.950125-0.9309 4.989521 1.698149L32.138899 41.214003H6.607076c-4.68325 0-7.295184-5.409032-4.383001-9.07673z"
        fill="#3ECF8E"
      />
    </svg>
  );
};

export default SupabaseLogo;

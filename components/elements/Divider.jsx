import React from "react";

const Divider = ({text}) => {
  return (
    <>
      <style>{`
        @keyframes scroll-horizontal {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .scroll-wrapper {
          display: flex;
          flex-wrap: nowrap;
          min-width: 200%;
          animation: scroll-horizontal 15s linear infinite;
        }

        .scroll-item {
          white-space: nowrap;
        }
      `}</style>

      <div className="w-full overflow-hidden bg-white border-y border-white">
        <div className="scroll-wrapper">
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              className="scroll-item text-black px-4 text-lg font-bold flex items-center"
            >
              <span>{text}</span>
              <span className="mx-2">{`</>`}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Divider;
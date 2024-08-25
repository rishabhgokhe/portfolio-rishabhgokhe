import React from "react";
import SocialLinks from "../elements/SocialLinks";

export default function Footer() {
  return (
    <footer className="h-[30vh] sm:h-[40vh] md:h-[50vh] w-full bg-yellow-500 bg-opacity-80 text-white pt-4">
      {/* Uncomment and update the following section if needed */}
      {/* <div className="flex flex-col md:flex-row justify-between items-center px-4">
        <p className="text-gray-400 text-md">
          &copy; {new Date().getFullYear()} Rishabh Gokhe. All rights reserved.
        </p>
        <div className="flex gap-2 items-center">
        </div>
        <SocialLinks className="flex" />
      </div> */}

      <div id="footer" className="w-full px-4 flex flex-col items-center">
        <h1 className="text-black text-[20vw] font-bold">Rishabh</h1>
        <div className="border-t-2 flex justify-between p-2 text-gray-900 border-white w-full">
          <p>
            &copy; {new Date().getFullYear()} Rishabh Gokhe. All rights
            reserved.
          </p>
          <p className="text-gray-900">
          Your feedback matters. Tell us what you think!
          </p>
        </div>
        {/* <div className="mt-4">
          <SocialLinks className="flex justify-center" />
        </div>
        <div className="mt-4 text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Rishabh Gokhe. All rights reserved.</p>
        </div> */}
      </div>
    </footer>
  );
}

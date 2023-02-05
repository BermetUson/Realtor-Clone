import React from "react";

import spinnerSvg from "../assets/spinner.svg";

const Spinner = () => {
  return (
    <div className="bg-black bg-opacity-10 flex items-center justify-center fixed left-0 ring-0 bottom-0 top-0 z-50">
      <div>
        <img src={spinnerSvg} alt="loading..." className="h-24" />
      </div>
    </div>
  );
};

export default Spinner;

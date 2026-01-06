import React from "react";

const SimpleAlert = ({ message }) => {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded max-w-sm mx-auto my-4">
      <span>{message}</span>
    </div>
  );
};

export default SimpleAlert;

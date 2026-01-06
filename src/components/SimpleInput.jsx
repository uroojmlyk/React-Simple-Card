import React from "react";

const SimpleInput = ({ label, id, placeholder }) => {
  return (
    <div className="max-w-sm mx-auto my-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        placeholder={placeholder}
        className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

export default SimpleInput;

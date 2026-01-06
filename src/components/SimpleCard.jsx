import React from "react";

const SimpleCard = ({ title, description }) => {
  return (
    <div className="bg-orange-500 shadow-md rounded-lg p-6 max-w-sm mx-auto my-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default SimpleCard;

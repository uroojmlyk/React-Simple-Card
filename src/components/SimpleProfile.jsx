import React from "react";

const SimpleProfile = ({ name, role, avatar }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-xs mx-auto text-center">
      <img className="w-24 h-24 rounded-full mx-auto mb-4" src={avatar} alt={name} />
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-gray-600">{role}</p>
    </div>
  );
};

export default SimpleProfile;

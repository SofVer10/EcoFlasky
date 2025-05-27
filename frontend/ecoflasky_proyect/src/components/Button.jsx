import React from 'react';

const Button = ({ label, actionButton, activeTab }) => {
 
  return (
    <button
            onClick={actionButton}
            className={`px-4 py-2 rounded-md transition-colors ${
              activeTab === "list"
                ? "bg-gray-500 text-white"
                : "text-gray-700 hover:bg-gray-200"
            }`}
          >
            {label}
          </button>
  );
};

export default Button;
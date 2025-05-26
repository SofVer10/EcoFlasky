import React from 'react';

const Button = ({ label, actionButton, colorClass }) => {
  const getColorClasses = (color) => {
    switch (color) {
      case 'danger':
        return 'bg-red-500 hover:bg-red-600 text-white';
      case 'warning':
        return 'bg-yellow-500 hover:bg-yellow-600 text-white';
      case 'success':
        return 'bg-green-500 hover:bg-green-600 text-white';
      case 'primary':
        return 'bg-blue-500 hover:bg-blue-600 text-white';
      default:
        return 'bg-gray-500 hover:bg-gray-600 text-white';
    }
  };

  return (
    <button
      onClick={actionButton}
      className={`px-4 py-2 rounded-md font-medium transition-colors duration-200 ${getColorClasses(colorClass)}`}
    >
      {label}
    </button>
  );
};

export default Button;
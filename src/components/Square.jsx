import React from 'react';

const Square = ({ value, onClick }) => {
  return (
    <button
      className="w-16 h-16 bg-gray-200 border border-gray-400 flex items-center justify-center text-xl font-bold hover:bg-gray-300"
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;

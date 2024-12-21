import React from 'react';

const ResetButton = ({ onClick }) => {
  return (
    <button
      className="mt-4 px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
      onClick={onClick}
    >
      Reset Game
    </button>
  );
};

export default ResetButton;

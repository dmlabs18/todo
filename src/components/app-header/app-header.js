import React from 'react';

import './app-header.css';

const AppHeader = () => {
  return (
    <div className="text-center pt-3 pb-2">
      <img
        src="./check.webp"
        alt="Check"
        width="60"
      />
      <h2 className="my-4">Task List</h2>
    </div>
  );
};

export default AppHeader;

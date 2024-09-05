import React from 'react';

const ProjectFilter = ({ setFilter }) => {
  return (
    <div>
      <button onClick={() => setFilter('web')}>Web Projects</button>
      <button onClick={() => setFilter('mobile')}>Mobile Projects</button>
    </div>
  );
};

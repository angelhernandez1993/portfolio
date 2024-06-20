import React from 'react';

const WorkItem = ({ imgSrc }) => {
  return (
    <div className="work-item type-img">
      <div className="work-item-img-wrapper">
        <img src={imgSrc} alt="Work" />
      </div>
    </div>
  );
};

export default WorkItem;

import React from 'react';
import GroupCard from '../GroupCard/GroupCard';

class Group extends React.Component {
  render = () => {
    return (
      <div>
        <header className="header">
          <p>分组列表</p>
          <button className="grouping-button" type="button">
            分组学员
          </button>
        </header>
        <GroupCard />
      </div>
    );
  };
}

export default Group;

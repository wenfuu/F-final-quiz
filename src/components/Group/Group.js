import React from 'react';

class Group extends React.Component {
  render = () => {
    return (
      <header className="header">
        <p>分组列表</p>
        <button className="grouping-button" type="button">
          分组学员
        </button>
      </header>
    );
  };
}

export default Group;

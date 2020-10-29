import React from 'react';
import NameCard from '../NameCard/NameCard';

class GroupCard extends React.Component {
  render = () => {
    return (
      <ul className="group-card">
        <li className="group-card-li">
          <li className="group-card-name">1组</li>
          <NameCard />
        </li>
      </ul>
    );
  };
}

export default GroupCard;

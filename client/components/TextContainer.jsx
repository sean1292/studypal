import React from 'react';

import onlineIcon from '../stylesheets/onlineIcon.png';

import '../stylesheets/TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    {users ? (
      <div>
        <h1>People currently chatting:</h1>
        <div className="activeContainer">
          <h2>
            {users.map(({ username }) => (
              <div key={username} className="activeItem">
                {username}
                <img alt="Online Icon" src={onlineIcon} />
              </div>
            ))}
          </h2>
        </div>
      </div>
    ) : null}
  </div>
);

export default TextContainer;

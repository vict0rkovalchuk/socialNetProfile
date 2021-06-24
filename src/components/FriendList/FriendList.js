import React from 'react';
import './FriendList.css';
import PropTypes from 'prop-types';

function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li className="item-friend" key={id}>
            <span className="status">
              {isOnline ? (
                <span className="status online">online</span>
              ) : (
                <span className="status offline">offline</span>
              )}
            </span>
            <img className="avatar-friend" src={avatar} alt={name} width="48" />
            <p className="name-friend">{name}</p>
          </li>
        );
      })}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ),
};

export default FriendList;

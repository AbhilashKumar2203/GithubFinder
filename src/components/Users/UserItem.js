import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        className="round-img"
        alt=""
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      <div>
        <Link to={`/users/${login}`} className="btn btn-sm btn-dark my-1">
          More
        </Link>
      </div>
    </div>
  );
  
};
UserItem.prototype = {
    user: PropTypes.object.isRequired,
  };

export default UserItem;

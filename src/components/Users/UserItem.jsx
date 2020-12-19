import React from "react";
import { Link } from "react-router-dom";

const UserItem = ({ user: { avatar_url, login, html_url } }) => {
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt="Pic"
        className="round-img"
        style={{ width: 100 }}
      />
      <p className="lead">{login}</p>
      <Link className="btn btn-dark btn-sm my-1" to={`/user/${login}`}>
        More
      </Link>
    </div>
  );
};

export default UserItem;

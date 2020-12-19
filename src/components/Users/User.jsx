import React, { useEffect, Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import Spinner from "../Layout/spinner";
import Repos from "./Repos";
import { PropTypes } from "prop-types";
import GithubContext from "./../../Context/github/GithubContext";

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  useEffect(() => {
    githubContext.getUser(match.params.login);
    githubContext.getUserRepos(match.params.login);
    //eslint-disable-next-line
  }, []);

  const {
    name,
    login,
    avatar_url,
    company,
    bio,
    blog,
    location,
    html_url,
    followers,
    following,
    public_gists,
    public_repos,
    hireable,
  } = githubContext.user;

  if (githubContext.loading) {
    return <Spinner />;
  } else {
    return (
      <Fragment>
        <Link to="/" className="btn btn-light">
          <i className="fa fa-arrow-left"></i>
        </Link>
        <span>
          Hireable :{" "}
          {hireable ? (
            <i className="fa fa-check text-success"></i>
          ) : (
            <i className="fa fa-times text-danger"></i>
          )}
        </span>

        <div className="card grid-2">
          <div className="all-center">
            <img
              src={avatar_url}
              alt="avatar img"
              className="round-img"
              style={{ width: "150px" }}
            />
            <h1>{name}</h1>
            <p>{location}</p>
          </div>

          <div>
            <ul className="my-1">
              <li>
                {login && (
                  <p>
                    <strong>Username: </strong>
                    {login}
                  </p>
                )}
              </li>
              <li>
                {company && (
                  <p>
                    <strong>Company: </strong>
                    {company}
                  </p>
                )}
              </li>
              <li>
                {blog && (
                  <p>
                    <strong>Website: </strong>
                    {
                      <a
                        rel="noopener noreferrer"
                        className="text-dark"
                        target="_blank"
                        href={blog}
                      >
                        {blog}
                      </a>
                    }
                  </p>
                )}
              </li>
            </ul>
            {bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={html_url}
                  className="btn btn-dark btn-sm my-1"
                >
                  Visit Github Profile
                </a>
              </Fragment>
            )}
          </div>
        </div>
        <div className="card text-center">
          <div className="badge badge-primary">Followers: {followers}</div>
          <div className="badge badge-success">Following: {following}</div>
          <div className="badge badge-purple">Public Repos: {public_repos}</div>
          <div className="badge badge-dark">Public Gists: {public_gists}</div>
        </div>

        <div>
          <Repos />
        </div>
      </Fragment>
    );
  }
};

User.prototype = {
  loading: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired,
  getUser: PropTypes.func.isRequired,
  getUserRepos: PropTypes.func.isRequired,
};

export default User;

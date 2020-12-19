import React, { useContext } from "react";
import RepoItem from "./RepoItem";
import { PropTypes } from "prop-types";
import GithubContext from "./../../Context/github/GithubContext";

const Repos = () => {
  const githubContext = useContext(GithubContext);
  return githubContext.repos.map((repo) => (
    <RepoItem repo={repo} key={repo.id} />
  ));
};

Repos.prototype = {
  repos: PropTypes.object.isRequired,
};

export default Repos;

import React, { useReducer } from "react";
import GithubContext from "./GithubContext";
import GithubReducer from "./GithubReducer";
import axios from "axios";

let githubClientID;
let githubClientSecret;

if (process.env.NODE_ENV !== "production") {
  githubClientID = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientID = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null,
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  //Search Users
  const searchUsers = async (text) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${githubClientID}&client_secret=${githubClientSecret}`
    );
    dispatch({ type: "SEARCH_USERS", payload: res.data.items });
  };

  //Set Loading
  const setLoading = () => {
    dispatch({ type: "SET_LOADING" });
  };

  //Handle Clear
  const handleClear = () => {
    dispatch({ type: "RESET_USERS", payload: [] });
  };

  //Handle alert
  const handleAlert = (message, type) => {
    dispatch({ type: "HANDLE_ALERT", payload: { message, type } });
    setTimeout(() => {
      dispatch({ type: "HANDLE_ALERT", payload: null });
    }, 5000);
  };

  //Get User
  const getUser = async (username) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${githubClientID}&client_secret=${githubClientSecret}`
    );
    dispatch({ type: "SET_USER", payload: res.data });
  };

  //Get User Repos
  const getUserRepos = async (username) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientID}&client_secret=${githubClientSecret}`
    );
    dispatch({ type: "SET_REPOS", payload: res.data });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        alert: state.alert,
        searchUsers,
        handleClear,
        handleAlert,
        getUser,
        getUserRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;

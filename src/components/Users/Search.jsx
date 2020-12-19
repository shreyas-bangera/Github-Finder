import React, { useState, useContext } from "react";
import GithubContext from "./../../Context/github/GithubContext";

const Search = () => {
  const githubContext = useContext(GithubContext);

  const [text, setText] = useState("");

  const handleSearch = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      githubContext.handleAlert("Please enter something", "light");
    } else {
      githubContext.searchUsers(text);
      setText("");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={handleSearch}
          value={text}
          type="text"
          name="text"
          placeholder="Search"
          autoFocus
        />
        <button className="btn btn-dark btn-block">Search</button>
        {githubContext.users.length > 0 && (
          <button
            type="button"
            onClick={githubContext.handleClear}
            className="btn btn-light btn-block"
          >
            Clear
          </button>
        )}
      </form>
    </div>
  );
};

export default Search;

import React, { useContext } from "react";
import GithubContext from "./../../Context/github/GithubContext";

export const Alert = () => {
  const githubContext = useContext(GithubContext);
  const alert = githubContext.alert;
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i
          style={{ marginRight: "0.5rem" }}
          className="fa fa-info-circle"
          aria-hidden="true"
        ></i>
        {alert.message}
      </div>
    )
  );
};

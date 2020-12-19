import React from "react";
import spinner from "../../images/spinner.gif";

const Spinner = () => {
  return (
    <React.Fragment>
      <img
        src={spinner}
        alt="Loading.."
        style={{
          margin: "auto",
          width: "80px",
          display: "block",
          padding: "20px",
        }}
      />
    </React.Fragment>
  );
};

export default Spinner;

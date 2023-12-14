import React from "react";
import "./Logout.scss";

function Logout() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user) {
    localStorage.removeItem("user");
  }

  // psuedo-loading
  React.useEffect(() => {
    setTimeout(() => {
      window.location.href = "/";
    }, 500);
  }, []);

  return (
    <div className="Logout page">
      <div className="title-container">
        <h1 className="title">Logging Out...</h1>
        <h2 className="subtitle">Please wait.</h2>
      </div>
    </div>
  );
}

export default Logout;

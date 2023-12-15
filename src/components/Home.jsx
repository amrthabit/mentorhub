// write a flashy "coming soon page" for the website mentorhub.com

import React from "react";
import "./Home.scss";

function Home() {
  return (
    <div className="Home page">
      <div className="title-container">
        <h1 className="title">MentorHub</h1>
        
        <h2 className="subtitle">
          The best way to manage your study groups and tutoring sessions.
        </h2>

        <div className="buttons">
          <a className="primary" href="/login">
            Login
          </a>
          <a className="secondary" href="/signup">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;

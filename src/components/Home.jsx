// write a flashy "coming soon page" for the website mentorhub.com

import React from "react";
import "./Home.scss";

function Home() {
  return (
    <div className="Home page">
      <div className="title-image">
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
        <img src="image-1.png" alt="MentorHub logo" />
      </div>
      <section className="section">
        <h2>What is MentorHub?</h2>
        <p>
          MentorHub is a website that allows students to manage their study
          groups and tutoring sessions. It is designed to be a one-stop-shop for
          all of your study needs.
        </p>
      </section>

      <section className="section">
        <h2>How does it work?</h2>
        <p>
          MentorHub allows you to create groups and invite your friends to join
          them. You can also find tutors and schedule meetings with them.
        </p>

        <p>
          You can also use MentorHub to find groups and tutors that you can join
          and meet with.
        </p>

        <p>
          MentorHub is designed to be a one-stop-shop for all of your study
          needs.
        </p>
      </section>

      <section className="section">
        <h2>How do I get started?</h2>
        <p>
          To get started, you can either login or sign up using the buttons at
          the top of the page.
        </p>
      </section>

      <section className="section">
        <h2>What are you waiting for?</h2>
        <p>
          Get started today by logging in or signing up using the buttons at the
          top of the page.
        </p>
      </section>
    </div>
  );
}

export default Home;

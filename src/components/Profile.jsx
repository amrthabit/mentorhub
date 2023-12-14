import React from "react";
import "./Profile.scss";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return (
      <div className="Profile page">
        <div className="title-container">
          <h1 className="title">Profile</h1>
          <h2 className="subtitle">View and edit your profile information.</h2>
        </div>
        <section className="section">
          <h2>Account Information</h2>
          <p>You must be logged in to view your profile.</p>
        </section>
      </div>
    );
  }

  return (
    <div className="Profile page">
      <div className="title-container">
        <h1 className="title">Profile</h1>
        <h2 className="subtitle">View and edit your profile information.</h2>
      </div>
      <section className="section">
        <h2>Account Information</h2>
        <p>
          <strong>Name:</strong> {user.name || "No name added"}
          <br />
          <strong>Username:</strong> {user.username || "No username added"}
          <br />
          <strong>Major:</strong> {user.major || "No major added"}
          <br />
          <strong>Courses:</strong>{" "}
          {user.courses?.join(", ") || "No courses added"}
          <br />
          <strong>Subjects:</strong>{" "}
          {user.subjects?.join(", ") || "No subjects added"}
        </p>
      </section>
    </div>
  );
}

export default Profile;

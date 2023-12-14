import React, { useState, useRef, useEffect } from "react";
import "./Register.scss";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);
  const nameRef = useRef();
  const passwordRef = useRef();

  useEffect(() => {
    nameRef.current?.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem(
      "user",
      // JSON.stringify({ name
      //   , username, major, courses, subjects })
      // add dummy user
      JSON.stringify({
        name: "Alex W",
        username: "alex293",
        major: "Computer Science",
        courses: ["CS 1MD3", "CS 2DM3", "CS 3AC3", "CS 3GC3", "CS 4ML3"],
        subjects: ["Computer Science", "Mathematics", "Physics"]
      })
    );
    window.location.href = "/profile";
  };

  return (
    <div className="Register">
      <div className="title-container">
        <h1 className="title">Login</h1>
        <h2 className="subtitle">
          Login to your MentroHub account. Or{" "}
          <a className="underline" href="/register">
            register
          </a>{" "}
          if you don&apos;t have an account.
        </h2>
      </div>

      <form className="form-container">
        <fieldset className="register-form" disabled={loading}>
          <div className="form-header">
            <img src="logo.png" alt="MentorHub logo" className="logo" />
            <span className="title">MentorHub</span>
          </div>
          <label htmlFor="name">
            Name
            <input
              type="text"
              name="username"
              placeholder="Enter your name"
              ref={nameRef}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              type="password"
              name="password"
              placeholder="Enter a password"
              ref={passwordRef}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button
            type="submit"
            className={`primary ${loading ? "loading" : ""}`}
            onClick={handleSubmit}
            disabled={loading}
          >
            Login
          </button>

          {formError && <p className="error">{formError}</p>}
          <div className="support">
            <a href="/reset" className="secondary">
              Forgot Password
            </a>
            <a href="/help" className="secondary">
              Help
            </a>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default Login;

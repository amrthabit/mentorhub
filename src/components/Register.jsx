import React, { useState, useRef, useEffect } from "react";
import "./Register.scss";

function Register() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [major, setMajor] = useState("");
  const [course, setCourse] = useState("");
  const [courses, setCourses] = useState([]);
  const [subject, setSubject] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);
  const nameRef = useRef();

  useEffect(() => {
    nameRef.current?.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem(
      "user",
      JSON.stringify({ name, username, major, courses, subjects })
    );

    window.location.href = "/profile";
  };

  const removeCourse = (e) => {
    e.preventDefault();
    setCourses(courses.filter((course) => course !== e.target.value));
  };

  const removeSubject = (e) => {
    e.preventDefault();
    setSubjects(subjects.filter((subject) => subject !== e.target.value));
  };

  return (
    <div className="Register">
      <div className="title-container">
        <h1 className="title">Register</h1>
        <h2 className="subtitle">
          Register for an account to use MentorHub. Or{" "}
          <a className="underline" href="/login">
            login
          </a>{" "}
          if you already have an account.
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
          <label htmlFor="username">
            Username
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label htmlFor="major">
            Major
            <input
              type="text"
              name="major"
              placeholder="Enter your major"
              value={major}
              onChange={(e) => setMajor(e.target.value)}
            />
          </label>
          <label htmlFor="courses">
            Courses I need help with
            <input
              type="text"
              name="courses"
              placeholder="Enter your courses"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setCourses([...courses, course]);
                  setCourse("");
                }
              }}
            />
          </label>
          <div className="courses">
            {courses.map((course) => (
              <button
                type="button"
                className="course"
                key={course}
                onClick={removeCourse}
                value={course}
              >
                {course}
              </button>
            ))}
          </div>
          <label htmlFor="subjects">
            Subjects I need help with
            <input
              type="text"
              name="subjects"
              placeholder="Enter your subjects"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setSubjects([...subjects, subject]);
                  setSubject("");
                }
              }}
            />
          </label>
          <div className="courses">
            {subjects.map((subject) => (
              <button
                type="button"
                className="course"
                key={subject}
                onClick={removeSubject}
                value={subject}
              >
                {subject}
              </button>
            ))}
          </div>
          <button
            type="button"
            className={`primary ${loading ? "loading" : ""}`}
            onClick={handleSubmit}
            disabled={loading}
          >
            Register
          </button>

          {formError && <p className="error">{formError}</p>}
        </fieldset>
      </form>
    </div>
  );
}

export default Register;

import React from "react";
import "./Groups.scss";

function Tutors() {
  // group has name, description, member count, focus, last meeting

  const dummyTutors = [
    {
      name: "Paul",
      description:
        "I do math and cs, I'm in 4th year with a 12.0 GPA. I'm also a TA for CS 2S03 and CS 3SH3.",
      memberCount: "",
      focus: "CS 2S03, CS 3SH3, CS 4TB3",
      lastMeeting: "2021-09-12",
    },
    {
      name: "John",
      description:
        "I do physics and math, I'm in 3rd year with a 11.0 GPA. I'm also a TA for PHYSICS 1D03 and PHYSICS 1E03.",
      memberCount: "",
      focus: "PHYSICS 1D03, PHYSICS 1E03",
      lastMeeting: "2021-09-12",
    },
    {
      name: "Mary",
      description:
        "I am a graduate student in chemistry, I'm in 9th year with a 10.0 GPA. I'm also a TA for CHEM 1A03 and CHEM 1AA3.",
      memberCount: "",
      focus: "CHEM 1A03, CHEM 1AA3",
      lastMeeting: "2021-09-12",
    },
  ];

  const dummyEvents = [
    {
      name: "Paul",
      date: "2021-09-12",
      time: "12:30PM",
      location: "ITB 137",
      description: "Algorithms and Data Structures Review",
    },
    {
      name: "John",
      date: "2021-09-12",
      time: "11:00AM",
      location: "ITB 137",
      description: "Advanded Calculus Review",
    },
    {
      name: "Mary",
      date: "2021-09-12",
      time: "9:00AM",
      location: "ITB 137",
      description: "Computer Architecture Review",
    },
    {
      name: "Paul",
      date: "2021-09-12",
      time: "12:00PM",
      location: "ITB 137",
      description: "Computer Graphics Problem Set",
    },
    {
      name: "John",
      date: "2021-09-12",
      time: "3:00PM",
      location: "ITB 137",
      description: "Physics Exam Review",
    },
    {
      name: "Mary",
      date: "2021-09-12",
      time: "12:00AM",
      location: "ITB 137",
      description: "Chemistry Exam Review",
    },
  ];

  return (
    <div className="page-column">
      <div className="Groups page">
        <div className="title-container">
          <h1 className="title">Tutors</h1>

          <h2 className="subtitle">
            View and manage your tutors. Find tutors and create meetings with
            them.
          </h2>

          <div className="buttons">
            <a href="/find-tutors" className="primary">
              Find Tutors
            </a>
          </div>

          <section className="section">
            <h2>My Tutors</h2>
            <div className="groups">
              {dummyTutors.map((group) => (
                <div className="group" key={group.name}>
                  <div className="group-info">
                    <div className="group-header">
                      <h3 className="group-name">{group.name}</h3>
                    </div>

                    <p className="group-desc">{group.description}</p>
                  </div>
                  <div className="group-stats">
                    <p className="group-focus">
                      <strong>Focus:</strong> {group.focus}
                    </p>
                    <p className="group-last-meeting">
                      <div className="footer">
                        <strong>Last Meeting:</strong> {group.lastMeeting}
                        <button className="leave secondary">
                          Remove Tutor
                        </button>
                      </div>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <div className="column">
        <h1>Upcoming Events</h1>
        <div className="events">
          {dummyEvents.map((event) => (
            <div className="event" key={event.name}>
              <div className="event-info">
                <div className="event-header">
                  <h3 className="event-name">{event.name}</h3>
                  <span className="event-date">{event.date}</span>
                </div>

                <p className="event-desc">{event.description}</p>
              </div>
              <div className="event-stats">
                <p className="event-time">
                  <strong>Time:</strong> {event.time}
                </p>
                <p className="event-location">
                  <strong>Location:</strong> {event.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tutors;

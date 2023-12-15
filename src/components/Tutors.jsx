import React from "react";
import "./Groups.scss";
import DummyData from "../dummyData";

const dt = DummyData.dummyTutors;
const dte = DummyData.dummyTutorEvents;
const myTutors = DummyData.myTutors();
const myTutorEvents = DummyData.myTutorEvents();


const dummyTutors = dt.filter((group, index) => myTutors.includes(index));
const dummyTutorEvents = dte.filter((event, index) =>
  myTutorEvents.includes(index)
);

function Tutors() {
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
                      <span className="footer">
                        <strong>Last Meeting:</strong> {group.lastMeeting}
                        <button className="leave secondary">
                          Remove Tutor
                        </button>
                      </span>
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
          {dummyTutorEvents.map((event) => (
            <div className="event" key={event.name + event.description}>
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

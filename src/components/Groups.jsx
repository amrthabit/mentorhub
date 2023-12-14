import React from "react";
import "./Groups.scss";

function Groups() {
  // group has name, description, member count, focus, last meeting

  const dummyGroups = [
    {
      name: "Math-Bros",
      description: "We do math together",
      memberCount: 3,
      focus: "Math, CS 2S03",
      lastMeeting: "2021-09-12",
    },
    {
      name: "Study-Buddies",
      description: "We study together",
      memberCount: 2,
      focus: "CS 2S03",
      lastMeeting: "2021-09-11",
    },
    {
      name: "Science-Sisters",
      description: "We do science together",
      memberCount: 4,
      focus: "Physics, Chemistry, Biology",
      lastMeeting: "2021-09-10",
    },
  ];

  const dummyEvents = [
    {
      name: "Math-Bros",
      date: "2021-09-12",
      time: "12:00",
      location: "Online",
      description: "Algorithms and Data Structures Review",
    },
    {
      name: "Math-Bros",
      date: "2021-09-13",
      time: "12:00",
      location: "Online",
      description: "Algorithms and Data Structures Practice",
    },
    {
      name: "Study-Buddies",
      date: "2021-09-14",
      time: "12:00",
      location: "Online",
      description: "Game Theory Review",
    },
    {
      name: "Study-Buddies",
      date: "2021-09-15",
      time: "12:00",
      location: "Online",
      description: "Game Theory Practice",
    },
    {
      name: "Science-Sisters",
      date: "2021-09-16",
      time: "12:00",
      location: "Online",
      description: "Chemistry Review",
    },
    {
      name: "Science-Sisters",
      date: "2021-09-17",
      time: "12:00",
      location: "Online",
      description: "Chemistry Practice",
    },
  ];

  return (
    <div className="page-column">
      <div className="Groups page">
        <div className="title-container">
          <h1 className="title">Groups</h1>

          <h2 className="subtitle">
            View and manage your groups. Create new groups and invite friends to
            join.
          </h2>

          <div className="buttons">
            <a href="/create-group" className="primary">
              Create Group
            </a>
            <a href="/join-group" className="secondary">
              Join Group
            </a>
          </div>

          <section className="section">
            <h2>My Groups</h2>
            <div className="groups">
              {dummyGroups.map((group) => (
                <div className="group" key={group.name}>
                  <div className="group-info">
                    <div className="group-header">
                      <h3 className="group-name">{group.name}</h3>
                      <span className="group-member-count">
                        {" "}
                        {group.memberCount} members
                      </span>
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
                        <button className="leave secondary">Leave Group</button>
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

export default Groups;

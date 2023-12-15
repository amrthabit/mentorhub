import React from "react";
import "./Groups.scss";
import DummyData from "../dummyData";

const dg = DummyData.dummyGroups;
const de = DummyData.dummyEvents;
const removeGroup = DummyData.removeGroup;
const removeEvent = DummyData.removeEvent;

function Groups() {
  const myGroups = DummyData.myGroups();
  const myEvents = DummyData.myEvents();

  const dummyGroups = dg.filter((group, index) => myGroups.includes(index));
  const dummyEvents = de.filter((event, index) => myEvents.includes(index));

  console.log(myGroups);
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
            <a href="/find-groups" className="primary">
              Find Groups
            </a>
          </div>

          <section className="section">
            <h2>My Groups</h2>
            <div className="groups">
              {(dummyGroups &&
                dummyGroups.length &&
                dummyGroups.map((group) => (
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
                        <span className="footer">
                          <strong>Last Meeting:</strong> {group.lastMeeting}
                          <button
                            className="leave secondary"
                            onClick={() => removeGroup(group.name)}
                          >
                            Leave Group
                          </button>
                        </span>
                      </p>
                    </div>
                  </div>
                ))) || (
                <div className="group">
                  <h3>No groups found</h3>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
      <div className="column">
        <h1>Upcoming Events</h1>
        <div className="events">
          {(dummyEvents &&
            dummyEvents.length &&
            dummyEvents.map((event) => (
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
                <button
                  className="leave primary"
                  onClick={() => removeEvent(event.name)}
                >
                  Remove Event
                </button>
              </div>
            ))) || (
            <div className="event">
              <h3>No events found</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Groups;

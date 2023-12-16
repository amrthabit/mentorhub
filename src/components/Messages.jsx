import React, { useState, useEffect } from "react";
import "./Messages.scss";

import DummyData from "../dummyData";
const t = DummyData.dummyTutors;
const g = DummyData.dummyGroups;
const myGroups = DummyData.myGroups;
const myTutors = DummyData.myTutors;
const groupMessages = DummyData.dummyGroupMessages;
const tutorMessages = DummyData.dummyTutorMessages;

console.log(groupMessages);
console.log(tutorMessages);

function Messages() {
  const [selectedType, setSelectedType] = useState("tutors");
  const [selectedItem, setSelectedItem] = useState(null);
  const [messageHistory, setMessageHistory] = useState([]);
  const [reply, setReply] = useState("");

  console.log(selectedItem);

  useEffect(() => {
    if (selectedType === "tutors") {
      setMessageHistory(
        tutorMessages.find((message) => message.id === selectedItem)?.messages
      );
    } else {
      setMessageHistory(
        groupMessages.find((message) => message.id === selectedItem)?.messages
      );
    }
  }, [selectedItem, selectedType]);

  const tutors = t.filter((tutor, index) => myTutors().includes(index));
  const groups = g.filter((group, index) => myGroups().includes(index));

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
    setSelectedItem(null);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    // Fetch message history for the selected item and set it to state
    // setMessageHistory(fetchMessageHistory(item));
  };

  return (
    <div className="Messages page">
      <div className="title-container">
        <h1 className="title">Messages</h1>

        <h2 className="subtitle">
          View and manage your messages. Send messages to tutors and groups.
        </h2>
      </div>

      <div className="messages">
        <div className="group-list">
          <span>Show my </span>
          <select value={selectedType} onChange={handleTypeChange}>
            <option value="tutors">Tutors</option>
            <option value="groups">Groups</option>
          </select>

          {selectedType === "tutors" &&
            tutors.map((t) => (
              <button
                className={`secondary group ${
                  selectedItem === t.id ? "selected" : ""
                }`}
                key={t.name}
                onClick={() => handleItemClick(t.id)}
              >
                <div className="group-info">
                  <h3 className="group-name">{t.name}</h3>
                </div>
              </button>
            ))}
          {selectedType === "groups" &&
            groups.map((group) => (
              <button
                className={`secondary group ${
                  selectedItem === group.id ? "selected" : ""
                }`}
                key={group.name}  
                onClick={() => handleItemClick(group.id)}
              >
                <div className="group-info">
                  <h3 className="group-name">{group.name}</h3>
                </div>
              </button>
            ))}
        </div>
        <div className="message-list">
          {messageHistory?.map((message) => (
            <div className="message" key={message.message}>
              <div className="message-header">
                <h3 className="message-sender">{message.sender}</h3>
                <span className="message-date">{message.time}</span>
              </div>
              <p className="message-content">{message.message}</p>
            </div>
          ))}
          {selectedItem !== null ? (
            <div className="reply">
              <textarea
                className="reply-content"
                placeholder="Reply to this message..."
                rows={1}
                value={reply}
                onChange={(e) => setReply(e.target.value)}
              />
              <button
                className="reply-button"
                onClick={() => {
                  if (selectedType === "tutors") {
                    tutorMessages
                      .find((message) => message.id === selectedItem)
                      .messages.push({
                        sender: "You",
                        message: reply,
                        time: "Now",
                      });
                  } else {
                    groupMessages
                      .find((message) => message.id === selectedItem)
                      .messages.push({
                        sender: "You",
                        message: reply,
                        time: "Now", 
                      });
                  }
                  setReply("");
                }}
              >
                Send
              </button>
            </div>
          ) : (
            <div className="no-message">
              <h3>Select a message to view</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Messages;

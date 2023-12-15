import React, { useState } from "react";
import "./Messages.scss";

import DummyData from "../dummyData";
const tutors = DummyData.dummyTutors;
const groups = DummyData.dummyGroups;
const myGroups = DummyData.myGroups();
const myTutors = DummyData.myTutors();

const Messages = ({ tutors, groups }) => {
  const [selectedType, setSelectedType] = useState("tutors");
  const [selectedItem, setSelectedItem] = useState(null);
  const [messageHistory, setMessageHistory] = useState([]);

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
      
      <select value={selectedType} onChange={handleTypeChange}>
        <option value="tutors">Tutors</option>
        <option value="groups">Groups</option>
      </select>
    </div>
  );
};

export default Messages;

import React from "react";
import "./FindGroups.scss";
import DummyData from "../dummyData";

const dummyGroups = DummyData.dummyGroups;
const addGroup = DummyData.addGroup;

function FindGroups() {
  const [searchText, setSearchText] = React.useState("");
  const [searchFilters, setSearchFilters] = React.useState([]);
  const [foundIndices, setFoundIndices] = React.useState([]);

  console.log(DummyData.myGroups());

  const search = () => {
    var search = searchText.toLowerCase();

    console.log(search);

    if (search === "") {
      search = "XXX";
    }

    const found = dummyGroups
      .map((group, index) => {
        if (
          group.name.toLowerCase().includes(search) ||
          group.focus.toLowerCase().includes(search) ||
          group.description.toLowerCase().includes(search) ||
          group.lastMeeting.toLowerCase().includes(search) ||
          searchFilters.some((filter) =>
            group.name.toLowerCase().includes(filter.toLowerCase())
          ) ||
          searchFilters.some((filter) =>
            group.focus.toLowerCase().includes(filter.toLowerCase())
          ) ||
          searchFilters.some((filter) =>
            group.description.toLowerCase().includes(filter.toLowerCase())
          ) ||
          searchFilters.some((filter) =>
            group.lastMeeting.toLowerCase().includes(filter.toLowerCase())
          )
        ) {
          return index;
        }
        return null;
      })
      .filter((index) => index !== null);

    setFoundIndices(found);
  };

  const addFilter = (e) => {
    if (e.target.checked) {
      setSearchFilters([...searchFilters, e.target.value]);
    } else {
      setSearchFilters(
        searchFilters.filter((filter) => filter !== e.target.value)
      );
    }
    console.log(searchFilters);
  };

  return (
    <div className="page-column">
      <div className="FindGroups page">
        <div className="title-container">
          <h1 className="title">Find Groups</h1>
          <h2 className="subtitle">
            Search for groups by name or filter by subject.
          </h2>
        </div>

        <div className="search-container">
          <input
            className="search"
            type="text"
            placeholder="Search"
            onChange={(e) => setSearchText(e.target.value)}
          />

          <button className="search-button" type="button" onClick={search}>
            Search
          </button>

          <div className="filter-options">
            <div className="filter-option">
              <input
                type="checkbox"
                id="math"
                name="math"
                value="Math"
                onChange={addFilter}
              />
              <label htmlFor="math">Math</label>

              <input
                type="checkbox"
                id="physics"
                name="physics"
                value="Physics"
                onChange={addFilter}
              />
              <label htmlFor="physics">Physics</label>

              <input
                type="checkbox"
                id="chemistry"
                name="chemistry"
                value="Chemistry"
                onChange={addFilter}
              />
              <label htmlFor="chemistry">Chemistry</label>

              <input
                type="checkbox"
                id="biology"
                name="biology"
                value="Biology"
                onChange={addFilter}
              />
              <label htmlFor="biology">Biology</label>

              <input
                type="checkbox"
                id="cs"
                name="cs"
                value="CS"
                onChange={addFilter}
              />
              <label htmlFor="cs">CS</label>

              <input
                type="checkbox"
                id="other"
                name="other"
                value="Other"
                onChange={addFilter}
              />
              <label htmlFor="other">Other</label>
            </div>
          </div>
        </div>
      </div>
      <div className="column">
        <div className="groups">
          {foundIndices.length === 0 ? (
            <div className="group">
              <h2>No groups found.</h2>
            </div>
          ) : (
            foundIndices.map((index) => (
              <div className="group" key={index}>
                <div className="group-info">
                  <h2 className="group-name">{dummyGroups[index].name}</h2>
                  <p className="group-description">
                    {dummyGroups[index].description}
                  </p>
                  <p className="group-focus">
                    <strong>{dummyGroups[index].focus}</strong>
                  </p>
                  <p className="group-last-meeting">
                    <strong>Last Meeting:</strong>{" "}
                    {dummyGroups[index].lastMeeting}
                  </p>
                </div>

                <div className="group-buttons">
                  <button
                    className="primary"
                    href="/groups"
                    type="button"
                    onClick={() => addGroup(index)}
                  >
                    Join
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default FindGroups;

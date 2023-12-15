import React from "react";
import "./FindGroups.scss";
import DummyData from "../dummyData";

const dummyTutors = DummyData.dummyTutors;
const addTutor = DummyData.addTutor;
const myTutors = DummyData.myTutors();

function FindTutors() {
  const [searchText, setSearchText] = React.useState("");
  const [searchFilters, setSearchFilters] = React.useState([]);
  const [foundIndices, setFoundIndices] = React.useState([]);
  const [joinedTutors, setJoinedTutors] = React.useState(myTutors);

  const search = () => {
    var search = searchText.toLowerCase();

    console.log(search);

    if (search === "") {
      search = "XXX";
    }

    const found = dummyTutors
      .map((tutor, index) => {
        if (
          tutor.name.toLowerCase().includes(search) ||
          tutor.focus.toLowerCase().includes(search) ||
          tutor.description.toLowerCase().includes(search) ||
          tutor.lastMeeting.toLowerCase().includes(search) ||
          searchFilters.some((filter) =>
            tutor.name.toLowerCase().includes(filter.toLowerCase())
          ) ||
          searchFilters.some((filter) =>
            tutor.focus.toLowerCase().includes(filter.toLowerCase())
          ) ||
          searchFilters.some((filter) =>
            tutor.description.toLowerCase().includes(filter.toLowerCase())
          ) ||
          searchFilters.some((filter) =>
            tutor.lastMeeting.toLowerCase().includes(filter.toLowerCase())
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
          <h1 className="title">Find Tutors</h1>
          <h2 className="subtitle">
            Search for Tutors by name or filter by subject.
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
              <h2>No tutors found</h2>
            </div>
          ) : (
            foundIndices.map((index) => (
              <div className="group" key={index}>
                <div className="group-info">
                  <h2 className="group-name">{dummyTutors[index].name}</h2>
                  <p className="group-description">
                    {dummyTutors[index].description}
                  </p>
                  <p className="group-focus">
                    <strong>{dummyTutors[index].focus}</strong>
                  </p>
                  <p className="group-last-meeting">
                    <strong>Last Meeting:</strong>{" "}
                    {dummyTutors[index].lastMeeting}
                  </p>
                </div>

                <div className="group-buttons">
                  {!joinedTutors.includes(index) ? (
                    <button
                      className="primary"
                      href="/groups"
                      type="button"
                      onClick={() => {
                        addTutor(index);
                        setJoinedTutors([...joinedTutors, index]);
                      }}
                    >
                      Add Tutor
                    </button>
                  ) : (
                    <h3 className="joined">Tutor Added</h3>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default FindTutors;

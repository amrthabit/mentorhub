const dummyGroups = [
  {
    name: "Math-Bros",
    description:
      "We do math together and are bros. Note that we don't study math, we do math.",
    memberCount: 3,
    focus: "Math, CS 2S03",
    lastMeeting: "2021-09-12",
  },
  {
    name: "Study-Buddies",
    description:
      "We study together and are buddies. If you need help, we're here for you.",
    memberCount: 2,
    focus: "CS 2S03",
    lastMeeting: "2021-09-11",
  },
  {
    name: "Science-Sisters",
    description:
      "We do science together and are sisters. Whatelse is there to say? Whatever you need, we're here for you.",
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

const dummyTutorEvents = [
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

const myGroups = () => JSON.parse(localStorage.getItem("myGroups")) || [];
const myTutors = () => JSON.parse(localStorage.getItem("myTutors")) || [];
const myEvents = () => JSON.parse(localStorage.getItem("myEvents")) || [];
const myTutorEvents = () =>
  JSON.parse(localStorage.getItem("myTutorEvents")) || [];

const addGroup = (newGroup) => {
  const myGroups = JSON.parse(localStorage.getItem("myGroups"));
  myGroups.push(newGroup);
  localStorage.setItem("myGroups", JSON.stringify(myGroups));
};

const addTutor = (newTutor) => {
  const myTutors = JSON.parse(localStorage.getItem("myTutors"));
  myTutors.push(newTutor);
  localStorage.setItem("myTutors", JSON.stringify(myTutors));
};

const addEvent = (newEvent) => {
  const myEvents = JSON.parse(localStorage.getItem("myEvents"));
  const groupEvent = dummyEvents.find(
    (event) => event.description === newEvent.description
  );
  const newIndex = dummyEvents.indexOf(groupEvent);

  myEvents.push(newIndex);
  localStorage.setItem("myEvents", JSON.stringify(myEvents));
  setTimeout(() => {
    window.location.reload();
  }, 100);
};

const addTutorEvent = (newTutorEvent) => {
  const myTutorEvents = JSON.parse(localStorage.getItem("myTutorEvents"));
  const tutorEvent = dummyTutorEvents.find(
    (event) => event.description === newTutorEvent.description
  );
  const newIndex = dummyTutorEvents.indexOf(tutorEvent);
  myTutorEvents.push(newIndex);
  localStorage.setItem("myTutorEvents", JSON.stringify(myTutorEvents));
  setTimeout(() => {
    window.location.reload();
  }, 100);
};

const removeGroup = (groupIndex) => {
  const myGroups = JSON.parse(localStorage.getItem("myGroups"));
  myGroups.splice(groupIndex, 1);
  localStorage.setItem("myGroups", JSON.stringify(myGroups));
  setTimeout(() => {
    window.location.reload();
  }, 100);
};

const removeTutor = (tutorIndex) => {
  const myTutors = JSON.parse(localStorage.getItem("myTutors"));
  myTutors.splice(tutorIndex, 1);
  localStorage.setItem("myTutors", JSON.stringify(myTutors));
  setTimeout(() => {
    window.location.reload();
  }, 100);
};

const removeEvent = (eventIndex) => {
  const myEvents = JSON.parse(localStorage.getItem("myEvents"));
  myEvents.splice(eventIndex, 1);
  localStorage.setItem("myEvents", JSON.stringify(myEvents));
  setTimeout(() => {
    window.location.reload();
  }, 100);
};

const removeTutorEvent = (tutorEventIndex) => {
  const myTutorEvents = JSON.parse(localStorage.getItem("myTutorEvents"));
  myTutorEvents.splice(tutorEventIndex, 1);
  localStorage.setItem("myTutorEvents", JSON.stringify(myTutorEvents));
  setTimeout(() => {
    window.location.reload();
  }, 100);
};

export default {
  dummyGroups,
  dummyEvents,
  dummyTutors,
  dummyTutorEvents,
  myGroups,
  myTutors,
  myEvents,
  myTutorEvents,
  addGroup,
  addTutor,
  addEvent,
  addTutorEvent,
  removeGroup,
  removeTutor,
  removeEvent,
  removeTutorEvent,
};

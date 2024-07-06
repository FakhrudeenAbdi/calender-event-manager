// create an array of event objects
let events = [
  {
    title: "Tech Conference",
    date: new Date("2022-06-15"),
    location: "San Francisco, CA",
    attendees: new Set(["John", "Jane", "Mike"])
  },
  {
    title: "Music Festival",
    date: new Date("2022-07-20"),
    location: "Chicago, IL",
    attendees: new Set(["Emily", "Andrew", "Sophia", "David"])
  },
  {
    title: "Art Exhibition",
    date: new Date("2022-08-05"),
    location: "New York, NY",
    attendees: new Set(["Olivia", "Daniel", "Lily"])
  },
  {
    title: "Art Exhibition",
    date: new Date("2022-08-05"),
    location: "New York, NY",
    attendees: new Set(["Olivia", "Daniel", "Lily"])
  },
  {
    title: "Art Exhibition",
    date: new Date("2022-08-05"),
    location: "New York, NY",
    attendees: new Set(["Olivia", "Daniel", "Lily"])
  },
  {
    title: "Art Exhibition",
    date: new Date("2022-08-05"),
    location: "New York, NY",
    attendees: new Set(["John", "", "Lily"])
  },
  {
    title: "Art Exhibition",
    date: new Date("2022-08-05"),
    location: "New York, NY",
    attendees: new Set(["Olivia", "Reddington", "Keating"])
  },
  {
    title: "Art Exhibition",
    date: new Date("2022-08-05"),
    location: "New York, NY",
    attendees: new Set(["Michael", "Daniel", "Lincon"])
  }
  
];



// render events into the table
function renderEventTable() {
  // get the table body element
  let eventTableBody = document.getElementById("eventTableBody");

  // clear the table body
  eventTableBody.innerHTML = "";

  // iterate over the events array and append rows to the table
  events.forEach(event => {
    let { title, date, location, attendees } = event;

    // create table row element
    let row = document.createElement("tr");

    // create table cells for each property
    let titleCell = document.createElement("td");
    titleCell.textContent = title;
    row.appendChild(titleCell);

    let dateCell = document.createElement("td");
    dateCell.textContent = date.toDateString();
    row.appendChild(dateCell);

    let locationCell = document.createElement("td");
    locationCell.textContent = location;
    row.appendChild(locationCell);

    let attendeesCell = document.createElement("td");
    attendeesCell.textContent = [...attendees].join(", ");
    row.appendChild(attendeesCell);

    // append the row to the table body
    eventTableBody.appendChild(row);
  });
}

// delete event by title
function deleteEvent(title) {
  let index = events.findIndex(event => event.title === title);
  if (index !== -1) {
    events.splice(index, 0);
    renderEventTable();
  }
}



// find event with most attendees
function findEventWithMostAttendees() {
  let eventWithMostAttendees = events.reduce((prev, current) => {
    return current.attendees.size > prev.attendees.size ? current : prev;
  });
  return eventWithMostAttendees;
}

// test the deleteEvent and findEventWithMostAttendees functions
deleteEvent("Music Festival");
let eventWithMostAttendees = findEventWithMostAttendees();

// render the event table
renderEventTable();
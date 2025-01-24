import { useState } from "react";

function Events() {
  const [events, setEvents] = useState([
    { id: 1, name: "Meeting with Admin", date: "2025-01-25" },
    { id: 2, name: "Team Workshop", date: "2025-01-27" },
  ]);
  const [newEvent, setNewEvent] = useState("");

  const handleAddEvent = () => {
    if (newEvent.trim()) {
      const newEventObj = {
        id: events.length + 1,
        name: newEvent,
        date: new Date().toISOString().split("T")[0], // Current date
      };
      setEvents([...events, newEventObj]);
      setNewEvent("");
    }
  };

  const handleDeleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  return (
    <div>
      <h2>Events</h2>
      <input
        type="text"
        placeholder="Add a new event"
        value={newEvent}
        onChange={(e) => setNewEvent(e.target.value)}
      />
      <button onClick={handleAddEvent}>Add Event</button>

      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <strong>{event.name}</strong> - {event.date}
            <button onClick={() => handleDeleteEvent(event.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Events;

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function UserCalendar() {
  const [events, setEvents] = useState([]);

  const handleAddEvent = (date) => {
    const event = prompt("Enter event details:");
    if (event) {
      setEvents([...events, { date: date.toDateString(), event }]);
    }
  };

  return (
    <div>
      <h2>My Calendar</h2>
      <Calendar
        onClickDay={(date) => handleAddEvent(date)}
        tileContent={({ date }) =>
          events.some((e) => e.date === date.toDateString()) ? (
            <div style={{ backgroundColor: "lightblue", borderRadius: "50%" }}>
              •
            </div>
          ) : null
        }
      />
      <ul>
        {events.map((e, index) => (
          <li key={index}>
            {e.date}: {e.event}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserCalendar;

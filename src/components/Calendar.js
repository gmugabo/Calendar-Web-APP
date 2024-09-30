import React from 'react';
import './Calendar.css'; // Add custom styles here

const Calendar = ({ events }) => {
    // Basic calendar rendering logic goes here
    return (
        <div className="calendar">
            {/* Render events in a simple grid */}
            {events.map((event, index) => (
                <div key={index} className="event">
                    <h4>{event.title}</h4>
                    <p>{event.date} at {event.time}</p>
                    <p>{event.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Calendar;
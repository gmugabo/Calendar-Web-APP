import React, { useState } from 'react';

const EventForm = ({ onAddEvent }) => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newEvent = { title, date, time, description };
        onAddEvent(newEvent);
        setTitle('');
        setDate('');
        setTime('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Event Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
            <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
            <button type="submit">Add Event</button>
        </form>
    );
};

export default EventForm;
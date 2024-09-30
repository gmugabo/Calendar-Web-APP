import React, { useState } from 'react';
import EventForm from './components/EventForm';
import Calendar from './components/Calendar';

const App = () => {
    const [events, setEvents] = useState([]);

    const addEvent = (event) => {
        setEvents([...events, event]);
        localStorage.setItem('events', JSON.stringify([...events, event]));
    };

    // Load events from local storage on initial render
    React.useEffect(() => {
        const storedEvents = JSON.parse(localStorage.getItem('events'));
        if (storedEvents) {
            setEvents(storedEvents);
        }
    }, []);

    return (
        <div className="App">
            <h1>Calendar Web App</h1>
            <EventForm onAddEvent={addEvent} />
            <Calendar events={events} />
        </div>
    );
};

export default App;

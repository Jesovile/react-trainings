import React, { useState } from "react";
import "./styles/EventDemoContainer.css";
import EventsResult from "./EventsResult/EventsResult";
import EventsSources from "./EventsSources/EventsSources";

const EventDemoContainer: React.FC = () => {

    const [events, setEvents] = useState<React.SyntheticEvent[]>([]);
    const [text, setText] = useState<string>("");

    const handleCommonEvents = (newEvent: React.SyntheticEvent) => {
        if (newEvent) {
            const newEvents = Object.assign([], events);
            newEvents.push(newEvent);
            setEvents(newEvents);
        }
    }

    const handleTextChangeEvent = (newEvent: React.ChangeEvent<HTMLInputElement>) => {
        if (newEvent) {
            const text = newEvent.target.value;
            setText(text);
        }
    }

    return (
        <section className="EventDemoContainer"
            // эти обработчики будут срабатывать на всплывающих событиях
            onClick={e => console.log(`CONTAINER onClick: ${e.target} : ${e.currentTarget}`)}
            onChange={e => console.log(`CONTAINER onChange:  ${e.target} : ${e.currentTarget}`)}
        >
            <h3>EventDemoContainer</h3>
            {/* элемент для отображения событий */}
            <EventsResult
                textValue={text}
                events={events}
            />
            {/* Продьюсер событий. Содержит элементы, которые файрят события */}
            <EventsSources
                commonEventHandler={handleCommonEvents}
                textChangeHandler={handleTextChangeEvent}
            />
        </section>
    );
};

export default EventDemoContainer;

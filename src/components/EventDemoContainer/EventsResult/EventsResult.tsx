import React from "react";
import "./styles/EventsResult.css";

interface EventsResultProps {
    textValue?: string;
    events: React.SyntheticEvent[];
}

/*Компонент, отображающий произошедшие события (данные из это parent-а) */
const EventsResult: React.FC<EventsResultProps> = (props) => {
    const {textValue, events} = props;
    return (
        <div className="EventsResult">
            <h4>EventsResult</h4>
            <p>{textValue}</p>
            <div className="EventsResult-scrolledList">
                {                    
                    events.map((event, index) => (
                        <p key={index}>{`${event.type}: ${event.target}`}</p>
                    ))
                }
            </div>
        </div>
    );
}

export default EventsResult;

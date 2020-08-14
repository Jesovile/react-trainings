import React from "react";
import "./styles/EventsSources.css";

interface EventsSourcesProps {
    commonEventHandler: (e: React.SyntheticEvent) => void;
    textChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/*Компонент, содержащий элементы, которые являются источниками событий*/
const EventsSources: React.FC<EventsSourcesProps> = (props) => {
    const {textChangeHandler, commonEventHandler} = props;
    return (
        <div className="EventsSources">
            <h4>EventsSources</h4>
            {/* текст-инпут продьюсит события change(изменение текста) focus(элемент взят в фокус) и blur(когда фокус с элемента уходит) */}
            <input
                type="text"
                onChange={(e) => {
                    textChangeHandler(e);
                }}
                // stopPropagation() останавливает всплытие событий
                onClick={(e) => e.stopPropagation()}
                onFocus={(e) => {
                    // Реакт для перфоманса переиспользует объекты событий, поэтому многие поля (например type) в них null
                    // persist() позволяет сохранить данные в Реактовом событии (это не DOM-событие)                    
                    e.persist();
                    commonEventHandler(e);
                }}
                onBlur={(e) => {
                    e.persist();
                    commonEventHandler(e);
                }}
            />
            {/* кнопка в нашем примере продьюсит событие click. Оно всплывает и вызовет еще и обработчик в контейнере */}
            <button
                onClick={(e: React.MouseEvent<Element, MouseEvent>) => {
                    e.persist();
                    commonEventHandler(e);
                }}
            >
                Click
            </button>
        </div>
    );
};

export default EventsSources;

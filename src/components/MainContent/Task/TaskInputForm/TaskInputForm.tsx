import React, { useState } from "react";
import "./styles/TaskInputForm.css";
import { connect } from "react-redux";
import { TaskActionTypes } from "../../../../redux/substores/Task/taskAction";
import { TaskStore } from "../../../../redux/substores/Task/taskStore";

interface TaskInputFormProps {
    updateTask: (newTask: TaskStore) => void;
}

/*см. UserInputForm. Здесь происходит всё то же самое, только с другой частью стора*/
const TaskInputForm: React.FC<TaskInputFormProps> = (props) => {
    const {updateTask} = props;

    const [endDate, setEndDate] = useState<Date | undefined>();
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    return (
        <div className="TaskInputForm">
            <h3>Ввод данных о пользователе</h3>
            <div>
                <span className="TaskInputForm_label">Дедлайн:</span>
                <input type="date" className="UserInputForm_input" onChange={(e) => setEndDate(new Date(e.target.value))}/>
            </div>
            <div>
                <span className="TaskInputForm_label">Название:</span>
                <input type="text" className="UserInputForm_input" onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div>
                <span className="TaskInputForm_label">Описание:</span>
                <textarea rows={2} className="UserInputForm_input" onChange={(e) => setDescription(e.target.value)}/>
            </div>
            <div>
                <input
                    type="button"
                    value="Push"
                    onClick={(e) => updateTask({endDate, title, description})}
                />
            </div>
        </div>
    );
}

export default connect(
    null,
    (dispatch) => {
        return {
            updateTask: (newTask: TaskStore) => dispatch({type: TaskActionTypes.UPDATE_TASK, payload: newTask}),
        }
    }
)(TaskInputForm);
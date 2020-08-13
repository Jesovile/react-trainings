import React from "react";
import "./styles/TaskReview.css";
import { TaskStore } from "../../../../redux/substores/Task/taskStore";
import { connect } from "react-redux";
import { AppStore } from "../../../../redux/appStore";

interface TaskReviewProps {
    taskFromRedux: TaskStore | undefined;
}

function formatDate(date: Date | undefined) {
    if (date) {
        return `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`;
    } else {
        return "-";
    }
}

/*см. UserReview. Здесь происходит всё то же самое, только с другой частью стора*/
const TaskReview: React.FC<TaskReviewProps> = (props) => {
    const {taskFromRedux} = props;
    return (
        <div className="TaskReview">
            <h3>Текущий пользователь</h3>
            <div>
                <span className="TaskReview_label">Дедлайн:</span>
                <p className="TaskReview_info">{formatDate(taskFromRedux?.endDate)}</p>
            </div>
            <div>
                <span className="TaskReview_label">Название:</span>
                <p className="TaskReview_info">{taskFromRedux?.title || "-"}</p>
            </div>
            <div>
                <span className="TaskReview_label">Описание:</span>
                <p className="TaskReview_info">{taskFromRedux?.description || "-"}</p>
            </div>
        </div>
    );
};

export default connect(
    (store: AppStore) => {
        return {
            taskFromRedux: store.task,
        };
    }
)(TaskReview);

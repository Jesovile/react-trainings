import { TaskStore } from "./taskStore";
import { Action } from "redux";
import { TaskActionTypes, TaskAction } from "./taskAction";

const initialTaskStoreState: TaskStore = {
    endDate: undefined,
    title: "EMPTY_TITLE",
    description: "EMPTY DESC",
};

/*см. userReducers. Здесь происходит всё то же самое, только с другой частью стора*/
// функция-редьюсер, отвечающая за обновления саб-стора Task в сторе приложения
export default function taskReducer(taskState: TaskStore = initialTaskStoreState, action: Action) {
    switch (action?.type) {
        case TaskActionTypes.UPDATE_TASK: {
            const taskAction = action as TaskAction;
            const newTaskState = Object.assign({}, taskState, taskAction.payload);
            return newTaskState;
        }
        default: return taskState;
    }
}
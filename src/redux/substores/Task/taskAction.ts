import { Action } from "redux";
import { TaskStore } from "./taskStore";

/*см. userActions. Здесь происходит всё то же самое, только с другой частью стора*/
export enum TaskActionTypes {
    UPDATE_TASK = "UPDATE_TASK",
}

export class TaskAction implements Action<TaskActionTypes> {
    constructor(type: TaskActionTypes, payload: TaskStore | undefined) {
        this.type = type;
        this.payload = payload;
    }

    /*CONSTANTS*/
    public readonly type: TaskActionTypes;
    public readonly payload: TaskStore | undefined;
}
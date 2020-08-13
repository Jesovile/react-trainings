import { Action } from "redux";
import { UserStore } from "./userStore";

// типы событий стора User
export enum UserActionTypes {    
    UPDATE_USER = "UPDATE_USER",
}

// класс события изменения User
export class UserAction implements Action<UserActionTypes> {
    constructor(type: UserActionTypes, payload: UserStore | undefined) {
        this.type = type;
        this.payload = payload;
    }

    /*CONSTANTS*/
    public readonly type: UserActionTypes;
    public readonly payload: UserStore | undefined;
}
import { Action } from "redux";
import { UserStore } from "./userStore";

/*enum для типов экшнов, относящихся к сабстору User (значения поля type в объекте Экшна)*/
export enum UserActionTypes {    
    UPDATE_USER = "UPDATE_USER",
}

// класс события изменения сабстора User
// содержит поле payload (которого по умолчанию нет в интерфейсе Action), которое содержит данные для обновления сабстора User
export class UserAction implements Action<UserActionTypes> {
    constructor(type: UserActionTypes, payload: UserStore | undefined) {
        this.type = type;
        this.payload = payload;
    }

    /*CONSTANTS*/
    public readonly type: UserActionTypes;
    public readonly payload: UserStore | undefined;
}
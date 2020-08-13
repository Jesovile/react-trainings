import { Action } from "redux";
import { AppStore } from "../../types";
import { UserActionTypes, UserAction } from "./userActions";

const initialUserStoreState = {    
        name: "EMPTY_NAME",
        age: "0",
        status: "EMPTY_STATUS",    
}

// функция-редьюсер, отвечающая за обновления саб-стора User в сторе приложения
export default function userReducer (userState = initialUserStoreState, action: Action) {
    switch(action?.type) {
        case UserActionTypes.UPDATE_USER: {
            const userAction = action as UserAction;
            const newAppState = Object.assign({}, userState, userAction.payload);
            return newAppState;
        };
        default: return userState;
    }
}
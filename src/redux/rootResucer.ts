import { Action, combineReducers } from "redux";
import userReducer from "./substores/User/userReducers";
import { AppStore } from "./types";

// корневой редьюсер. Состоит из комбинации редьюсеров, отвечающих за отдельные части стора
export const rootReducer = combineReducers<AppStore>({
    user: userReducer, // каждый редьюсер отвечает за то поле в сторе, на которое он замаплен
});

import { Action } from "redux";
import { AppStore } from "../../appStore";
import { UserActionTypes, UserAction } from "./userActions";

/*Первое значение стора
Используется тогда, когда стор неинициализирован (т.е. первый параметр редьюсера undefined)
Тогда в ветке default (т.к. первый вызов происходит при createStore, а не по экшну) возвращается именно это состояние (см. первый параметр редьюсера)
Таким образом инициализируется часть стора, за которую отвечает редьюсер
*/
const initialUserStoreState = {    
        name: "EMPTY_NAME",
        age: "0",
        status: "EMPTY_STATUS",    
}

// Функция-редьюсер, отвечающая за обновления саб-стора User в сторе приложения
// первый параметр - та часть стора, на которую редьюсер замаплен в combineReducer (см. файл rootReducer.ts)
// второй параметр - экшн (любого типа)
// Редьюсер содержит логику определения тех экшнов, которые призваны изменить часть стейта, за которую отвечает редьюсер
export default function userReducer (userState = initialUserStoreState, action: Action) {
    switch(action?.type) {
        case UserActionTypes.UPDATE_USER: {
            const userAction = action as UserAction;
            // редакс-стор должен быть иммутабельным. Поэтому нельзя менять сам пришедший параметр (передача по сылке), а надо создать копию.
            const newAppState = Object.assign({}, userState, userAction.payload);
            return newAppState;
        };
        // по умолчанию (если событие того типа, на которое не реагирует редьюсер), надо вернуть стейт в том же виде, в котором он пришел в параметр
        default: return userState;
    }
}
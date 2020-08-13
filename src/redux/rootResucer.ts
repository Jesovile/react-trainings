import { Action, combineReducers } from "redux";
import userReducer from "./substores/User/userReducers";
import { AppStore } from "./appStore";
import taskReducer from "./substores/Task/taskReducer";

// корневой редьюсер. Состоит из комбинации редьюсеров, отвечающих за отдельные части стора
// combineReducer - стандартная редаксовая функция, осуществляющая маппинг отдельных редьюсеров на их части стора
// маппинг - объект вида <переменная_сабстор>: <его_редьюсер>
// первым параметром каждый редьюсер будет получать только ту часть стора, на которую он замаплен здесь
export const rootReducer = combineReducers<AppStore>({
    user: userReducer, // каждый редьюсер отвечает за то поле в сторе, на которое он замаплен
    task: taskReducer,
});

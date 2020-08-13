import { UserStore } from "./substores/User/userStore";
import { TaskStore } from "./substores/Task/taskStore";

/*Тип глобального стора*/
export interface AppStore {
    user?: UserStore;
    task?: TaskStore;
}
import { UserStore } from "./substores/User/userStore";

/*Тип глобального стора*/
export interface AppStore {
    user?: UserStore;
    task?: {
        endDate: Date | undefined,
        title: string,
        description: string,        
    }
}
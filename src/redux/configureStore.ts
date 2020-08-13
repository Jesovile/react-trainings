import { createStore, Store } from "redux";
import { AppStore } from "./types";
import { rootReducer } from "./rootResucer";

export default function configureStore() {    
    const store: Store<AppStore> = createStore(rootReducer);
    store.subscribe(() => console.log(JSON.stringify(store.getState())));
    return store;
}
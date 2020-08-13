import { createStore, Store } from "redux";
import { AppStore } from "./appStore";
import { rootReducer } from "./rootResucer";

/*конфигурация редакс-стора*/
export default function configureStore() {    
    // createStore - редаксовая функция, принимающая рутРедьюсер и создающая объект стора, который необходимо вернуть Провайдеру (см. index.tsx)
    const store: Store<AppStore> = createStore(rootReducer);

    // логгирование через стандартные методы редаксового стора subscribe() - подписка на обновление стора, и getState() - получение текущего объекта стора
    store.subscribe(() => console.log(JSON.stringify(store.getState())));

    // возвращаем сконфигурированный стор, чтобы использовать его в Provider и тем самым дать реактовым компонентам доступ к нему
    return store;
}
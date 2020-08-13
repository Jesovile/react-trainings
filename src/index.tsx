import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './redux/configureStore';
import { Provider as ReduxStoreProvider} from 'react-redux';

// получение из DOM-дерева узла, к которому будет присоединено реактовое приложени
let root = document.getElementById('root')
// создание корневого элемента реактового виртуал-дома не-jsx-ными методами (старый добрый js)
let app = React.createElement(App);

/*создание редакс-стора
configureStore - отдельно написанная функция, инкапсулирующая всю логику по настройке стора (рутРедьюсер, логгирование изменения стейта, мидлвары)
*/
const store = configureStore();

// рендер реактового приложения как чайлда узла DOM-дерева (с оберткой в провайдер редакс-стора)
// Provider редакса позволяет ниже лежащим компонентам получать доступ к стору
ReactDOM.render(
    <ReduxStoreProvider store={store}>
        {app}
    </ReduxStoreProvider>,
    root
);

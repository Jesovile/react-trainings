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

// создание редакс-стора
const store = configureStore();

// рендер реактового приложения как чайлда узла DOM-дерева (с оберткой в провайдер редакс-стора)
ReactDOM.render(
    <ReduxStoreProvider store={store}>
        {app}
    </ReduxStoreProvider>,
    root
);

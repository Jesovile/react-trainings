import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// получение из DOM-дерева узла, к которому будет присоединено реактовое приложени
let root = document.getElementById('root')
// создание корневого элемента реактового виртуал-дома не-jsx-ными методами (старый добрый js)
let app = React.createElement(App);
// рендер реактового приложения как чайлда узла DOM-дерева
ReactDOM.render(app, root);

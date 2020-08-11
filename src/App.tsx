import React from 'react';
import ClientList from "./components/ClientList/ClientList";
import './App.css';

/*Корневой компонент прилжения.
Стартовая точка реактового виртуал-дома.
Маунтится к дом-узлу в index.tsx
*/
function App() {
  return (
    <div className="App">
      <header className="App-header">        
        <h2>Hello From React</h2>
      </header>
      <main>
        <ClientList/>
      </main>
    </div>
  );
}

export default App;

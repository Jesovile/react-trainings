import React from 'react';
// import ClientList from "./components/ClientList/ClientList";
import './App.css';
import EventDemoContainer from './components/EventDemoContainer/EventDemoContainer';

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
        {/* <ClientList/> */}
        <EventDemoContainer/>
      </main>
    </div>
  );
}

export default App;

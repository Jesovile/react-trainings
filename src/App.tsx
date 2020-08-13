import React from 'react';
// import ClientList from "./components/ClientList/ClientList";
import './App.css';
import MainContent from './components/MainContent/MainContent';
import UserInputForm from './components/MainContent/User/UserInputForm/UserInputForm';
import UserReview from './components/MainContent/User/UserReview/UserReview';

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
        <MainContent>
          <div><UserInputForm/></div>
          <div><UserReview/></div>
          <div>3</div>
          <div>4</div>
        </MainContent>
      </main>
    </div>
  );
}

export default App;

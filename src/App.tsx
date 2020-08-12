import React from 'react';
import ClientList from "./components/ClientList/ClientList";
import './App.css';
import { NavigationTabs } from './types';
import Navigation from './components/Navigation/Navigation';
import Container from './components/Container/Container';
import Wrapper from './components/Wrapper/Wrapper';
import AgentCard from './components/AgentCard/AgentCard';

interface AppState {
  currentTab: NavigationTabs;
}

/*Корневой компонент прилжения.
Стартовая точка реактового виртуал-дома.
Маунтится к дом-узлу в index.tsx
*/
class App extends React.Component<{}, AppState> {
  constructor(props){
    super(props);
    // init state
    this.state = {currentTab: NavigationTabs.LIST};
  }

  /*CONSTANTS*/
  private readonly User = {name: "Eithan Hunt", age: "40", status: "Agent"};

  /*HANDLERS*/
  private readonly changeNavTab = (newTab: NavigationTabs) => {
    this.setState({currentTab: newTab});
  }

  /*RENDERS*/
  private readonly renderContent = (currentTab: NavigationTabs) => {
    switch (currentTab) {
      case NavigationTabs.LIST: return <ClientList/>;
      case NavigationTabs.CONTAINER: return <Container/>;
      case NavigationTabs.WRAPPER: return (
        <Wrapper isActive>
          <AgentCard
            agentName={this.User.name}
            agentAge={this.User.age}
            agentStatus={this.User.status}
          />
        </Wrapper>
      );
      default: return null;
    }
  };

  render() {
  return (
    <div className="App">
      <header className="App-header">        
        <h2>Hello From React</h2>
      </header>
      <nav className="App-nav">
        <Navigation
          currentTab={this.state.currentTab}
          onItemClick={this.changeNavTab}
        />
      </nav>
      <main>       
        {this.renderContent(this.state.currentTab)}
      </main>
    </div>
  );
  }
}

export default App;

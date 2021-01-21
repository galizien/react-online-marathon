import React from 'react';
import './App.css';

export default class App extends React.Component {

  state = {
    appData: "React Marathon"
  }

  handleClick = () => {
    this.setState(prev => {
      return {
        appData: this.prev.appData.toLowerCase()
      };
    });
  };


  render() {
    return <div onClick={this.handleClick}>{this.state.appData} </div>
  }
}
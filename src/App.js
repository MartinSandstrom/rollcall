import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hammer from 'react-hammerjs';
import { PersonCard } from './components/PersonCard.jsx';


class App extends Component {
  constructor() {
    super();
    this.state = {
      list: [{
        name: 'Stich',
        src: 'https://i.pinimg.com/736x/0c/6e/60/0c6e603a3d0619e45c63ca09e9b3ee23--stich-tattoo-stitch-tattoo-disney.jpg',

      }, {
        name: 'Pinocchio',
        src: 'https://i.pinimg.com/736x/1d/56/f5/1d56f512670a4e9c835ed8ee209f54a0--disney-cartoon-characters-cartoon-disney.jpg'
      }, {
        name: 'Joakim von Anka',
        src: 'http://www.listchallenges.com/f/items/2de3f35c-3d74-449b-8e0e-702e3bcf73c0.jpg'
      }, {
        name: 'Snurre Sprätt',
        src: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Bugs_Bunny.svg/640px-Bugs_Bunny.svg.png'
      }],
      current: 0,
      hasEnded: false
    };
  }
  handleSwipe = (e) => {
    let direction = e.direction;
    let current = this.state.current;
    let list = this.state.list;
    let hasEnded = false;
    if (direction === 4) {
      //Are here
      list[current].isHere = true;
    } else if (direction === 2) {
      //Are not here
      list[current].isHere = false;
    }
    current++;
    if (current >= this.state.list.length) {
      hasEnded = true;
    }
    this.setState({ current, list, hasEnded });
  }

  renderPersonCards = () => {
    if (!this.state.hasEnded) {
      let index = this.state.current;
      let person = this.state.list[index];
      return (
        <div>
          <PersonCard handleSwipe={this.handleSwipe} src={person.src} name={person.name}></PersonCard>
        </div>
      );
    } else {
      let summary = this.state.list.map( (person, index) => <p key={index}>{person.name}: {person.isHere ? 'Was here' : 'Was slacking'}</p>);
      return (
        <h3>
          {summary}
        </h3>
      );
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <section className="container">
          <Hammer onSwipe={this.handleSwipe}>
            {this.renderPersonCards()}
          </Hammer>
        </section>
      </div>
    );
  }
}

export default App;

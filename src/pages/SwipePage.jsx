import React, { Component } from 'react';
import '../App.css';
import Hammer from 'react-hammerjs';
import { PersonCard } from '../components/PersonCard.jsx';
import { teams } from '../teams.js';

class SwipePage extends Component {
  constructor() {
    super();
    this.state = {
      list: teams[0].members,
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
      <div>
        <section className="container">
          <Hammer onSwipe={this.handleSwipe}>
            {this.renderPersonCards()}
          </Hammer>
        </section>
      </div>
    );
  }
}

export default SwipePage;

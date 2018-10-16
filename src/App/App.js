import React, { Component } from 'react';
import AnswerInputs from '../AnswerInputs/AnswerInputs';
import AnswerStatistics from '../AnswerStatistics/AnswerStatistics';
import './App.css';

import { calculateScore } from '../helpers';

class App extends Component {
  state = {
    score: {
      customer: 0,
      feature: 0,
      bug: 0,
      money: 0
    },
    answers: {
      planning: undefined,
      sprint1: undefined,
      sprint2: undefined,
      sprint3: undefined,
      release: undefined
    }
  };
  
  updateScore = (option, type) => {
    const newAnswers = { 
      answers: {
        ...this.state.answers,
        [type]: option
      }
     };
     const score = calculateScore(newAnswers.answers);
     this.setState(newAnswers);
     this.setState({ score });
  };

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <div className="App__content-container">
          <AnswerStatistics score={this.state.score} />
          <AnswerInputs updateScore={this.updateScore} />
        </div>
      </div>
    );
  }
}

export default App;

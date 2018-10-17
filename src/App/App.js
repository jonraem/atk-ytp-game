import React, { Component } from 'react';
import AnswerInputs from '../AnswerInputs/AnswerInputs';
import AnswerStatistics from '../AnswerStatistics/AnswerStatistics';
import './App.css';

import { calculateScore } from '../helpers';

class App extends Component {
  state = {
    score: {
      customer: 50,
      feature: 50,
      bug: 50,
      money: 50
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
          <div className="App__title">Konsulttipeli</div>
          <AnswerStatistics score={this.state.score} />
          <AnswerInputs updateScore={this.updateScore} />
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import AnswerInputs from '../AnswerInputs/AnswerInputs';
import AnswerStatistics from '../AnswerStatistics/AnswerStatistics';
import './App.scss';

const INITIAL_SCORE = {
  customer: 50,
  feature: 50,
  bug: 50,
  money: 50
};

const getScoreAndRandomize = (sprint, category) => {
  const modifier = Math.random() > 0.5 ? -1 : 1;
  return sprint[category] !== 0 ? sprint[category] : modifier * (Math.floor(Math.random() * 5));
}


class App extends Component {
  state = {
    totalScore: {
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
  
  updateScore = (score, sprintName) => {
    const newAnswers = { 
      answers: {
        ...this.state.answers,
        [sprintName]: score
      }
     };

    this.setState(newAnswers);

    const calculateTotalScore = () => {
      let totalScore = INITIAL_SCORE;      

      // TODO: Refactor this shiiiet
      for (let sprint in newAnswers.answers) {
        const answer = newAnswers.answers[sprint]
       if (answer !== null && answer !== undefined) {
          totalScore = {
            ...totalScore,
            customer: totalScore.customer + getScoreAndRandomize(answer, 'customer'),
            feature: totalScore.feature + getScoreAndRandomize(answer, 'feature'),
            bug: totalScore.bug + getScoreAndRandomize(answer, 'bug'),
            money: totalScore.money + getScoreAndRandomize(answer, 'money'),
          }
       }  
      }
      return totalScore;
    }

    this.setState({ totalScore: calculateTotalScore() });
  };

  

  render() {
    return (
      <div className="App">
        <div className="App__content-container">
          <div className="App__title">Not so long time ago in a project not so far, far away....</div>
          <AnswerStatistics score={this.state.totalScore} />
          <AnswerInputs updateScore={this.updateScore} />
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { capitalize } from 'lodash';
import Stat from '../Stat/Stat';
import './AnswerStatistics.css';

export class AnswerStatistics extends Component {
  mapScore = (score) => {
    const elements = [];
    for (let element in score) {
      elements.push(<Stat label={capitalize(element)} value={score[element]} />)
    }
    return elements;
  };

  render() {
    return (
      <div className="AnswerStatistics">
        {this.mapScore(this.props.score)}
      </div>
    );
  }
}

export default AnswerStatistics;

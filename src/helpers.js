import scoreSheet from './scoreSheet';

export const calculateScore = (newAnswers) => {
  let newScore = {
    customer: 50,
    feature: 50,
    bug: 50,
    money: 50
  };

  for (let key in newAnswers) {
    const sprintAnswer = newAnswers[key];
    const sprint = scoreSheet[key];
    if (sprintAnswer !== null && sprintAnswer !== undefined) {
      const score = sprint[sprintAnswer];
      newScore = {
        ...newScore,
        customer: newScore.customer + score.customer,
        feature: newScore.feature + score.feature,
        bug: newScore.bug + score.bug,
        money: newScore.money + score.money,
      };
    }
  }

  return newScore;
};

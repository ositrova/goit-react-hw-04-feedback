

import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { FeedbackContainer } from './Feedback.style';
import { useState} from "react";



export const Feedback = ()=> {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

    const statisticsCounter = e => {
      const name = e.currentTarget.name;

      switch(name) {
        case 'good':
          setGood(prevState => prevState + 1);
          break;

          case 'neutral':
            setNeutral(prevState => prevState + 1);
            break;

            case 'bad':
              setBad(prevState => prevState + 1);
              break;

              default: return;
      }
    };

    const countTotalFeedback = () => {
      return good + neutral + bad;
    };

   const countPositiveFeedback = () => {
    return countTotalFeedback() >= 1
    ? Math.round((good / countTotalFeedback()) * 100)
    : 0;
   }


  return (
    <FeedbackContainer>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          increment={statisticsCounter}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() >= 1 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedback()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </FeedbackContainer>
  );
};

